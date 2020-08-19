import { Service } from 'typedi';
import { Response } from 'express';
import { PostService } from '../../services/post.service';
import { AuthRequest } from '../../typings'; 
import * as validate  from '../../lib/validate';


@Service()
export class PostCtrl {
  constructor(
    private postService: PostService,
  ) { }
  
  public getPosts = async (req: AuthRequest, res: Response) => {
    const limit: string  = req.query.limit as string;
    const page: string  = req.query.page as string;

    try {
      const posts = await this.postService.getPostsByLimit(parseInt(limit, 10), parseInt(page, 10));

      res.status(200).json({
        status: 200,
        message: '게시글 조회 성공',
        data: {
          posts,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: '게시글 조회 실패!'
      });
    }
  }

  public writePost = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    try {
      await validate.writePostValidate(body);
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: '양식이 맞지 않아요!'
      });

      return
    }

    try {
      console.log(body);
      
      const { title, contents, thumnailAddress } = body;

      
      
      res.status(200).json({
        status: 200,
        message: '게시글 작성 성공',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: '게시글 작성 실패!'
      });
    }
  }
}
