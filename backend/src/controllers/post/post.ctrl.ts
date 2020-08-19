import { Service } from 'typedi';
import { Response } from 'express';
import { PostService } from '../../services/post.service';
import { AuthRequest } from '../../typings'; 
import * as Validate  from '../../lib/validate';

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
  };

  public writePost = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    try {
      await Validate.writePostValidate(body);
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: '양식이 맞지 않아요!'
      });

      return
    }

    try {
      const { title, contents, thumnailAddress } = body;

      await this.postService.createPost(title, contents, thumnailAddress);

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
  };

  public updatePost = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    try {
      await Validate.updatePostValidate(body);
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: '양식이 맞지 않아요!'
      });

      return
    }

    try {
      const { idx, title, contents, thumnailAddress } = body;

      await this.postService.updatePostByIdx(idx, title, contents, thumnailAddress);

      res.status(200).json({
        status: 200,
        message: '게시글 수정 성공',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: '게시글 수정 실패!'
      });
    }
  };

  public deletePost = async (req: AuthRequest, res: Response) => {
    let idx: string = req.query.idx as string; 

    if (!idx || parseInt(idx) < 0) {
      res.status(400).json({
        status: 400,
        message: 'idx를 정확히 작성해 주세요!'
      });

      return;
    }

    try {

      await this.postService.deletePostByIdx(parseInt(idx));

      res.status(200).json({
        status: 200,
        message: '게시글 삭제 성공',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: '게시글 삭제 실패!'
      });
    }
  };
}
