import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Post } from '../database/models/Post';

// 의존성 주입 (객체를 인스턴스화 시킬 경우 Service 데코 사용)
@Service()
export class PostService {

  // InjectRepository은 Repository를 생성자 주입 해주기 위해 사용한다. (의존성 주입)
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
  ) { }

  // 게시글을 요청 받은 limit값과 page 별로 조회 한다.
  public async getPostsByLimit(limit: number, page: number, category: string) {
    const posts = await this.postRepo.find({
      where: {
        category,
      },
      order: {
        create_time: "DESC"
      },
      skip: page * limit,
      take: limit,
    });

    return posts;
  }

  // 게시글 카테고리 별 전체 조회
  public async getAllPostDataByCategory(category: string) {
    const result = await this.postRepo.find({
      where: {
        category,
      }
    });

    return result;
  }

  // 게시글 id별 조회
  public async getPostById(id: string) {
    const result = await this.postRepo.findOne({
      where: {
        id,
      }
    });

    return result;
  }

  // 게시글 작성
  public async createPost(id:string, title: string, contents: string, category: string, thumbnail_address?: string) {
    const post = await this.postRepo.save({
      id,
      title,
      category,
      contents,
      thumbnail_address,
    });

    return post;
  }

  // 게시글 수정
  public async updatePostByIdx(id: string, title: string, contents: string, thumbnail_address?: string) {
    const result =  await this.postRepo.update({
      id,
    }, {
      title,
      contents,
      thumbnail_address,
    });

    return result;
  }

  // 게시글 삭제
  public async deletePostByIdx(id: string) {
    const result = await this.postRepo.delete({
      id
    });

    return result;
  }
}