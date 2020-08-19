import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Post } from '../database/models/Post';

@Service()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
  ) { }

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

  public async createPost(title: string, contents: string, thumbnail_address?: string) {
    const posts = await this.postRepo.create({
      title,
      contents,
      thumbnail_address
    });

    return posts;
  }
}