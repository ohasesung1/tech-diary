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
  public async getPostsByLimit(limit: number, page: number) {
    const posts = await this.postRepo.find({
      order: {
        create_time: "DESC"
      },
      skip: page,
      take: limit,
    });

    return posts;
  }

  // 게시글 작성
  public async createPost(title: string, contents: string, thumbnail_address?: string) {
    const post = await this.postRepo.save({
      title,
      contents,
      thumbnail_address
    });

    return post;
  }

  // 게시글 수정
  public async updatePostByIdx(idx: number, title: string, contents: string, thumbnail_address?: string) {
    const result =  await this.postRepo.update({
      idx,
    }, {
      title,
      contents,
      thumbnail_address,
    });

    return result;
  }

  // 게시글 삭제
  public async deletePostByIdx(idx: number) {
    const result = await this.postRepo.delete({
      idx
    });

    return result;
  }
}