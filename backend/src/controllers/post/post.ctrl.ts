import { Service } from 'typedi';
import { Response } from 'express';
import { PostService } from '../../services/post.service';
import { AuthRequest } from '../../typings'; 
import * as Validate  from '../../lib/validate';

@Service() // typedi를 이용한 의존성 주입 위한 설정
export class PostCtrl {
  constructor(
    private postService: PostService,
  ) { }
  
  // 게시글 조회 함수
  public getPosts = async (req: AuthRequest, res: Response) => {
    const limit: string  = req.query.limit as string;
    const page: string  = req.query.page as string;

    // limit, page의 요청 방식이 올바른지 확인 하는 코드입니다.
    if (!limit || parseInt(limit) < 0 || !page || parseInt(page)) {
          res.status(400).json({
            status: 400,
            message: '양식이 맞지 않아요!'
          });
    
          return
        }

    try {
      // DB에 있는 데이터를 조회 합니다.
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

  // 게시글 작성 함수
  public writePost = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    try {
      // validate 라이브러리를 사용해 요청 form을 검사합니다.
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

      // DB에 저장하는 함수를 실행합니다.
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

  // 게시글 수정 함수
  public updatePost = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    // validate 라이브러리를 사용해 요청 form을 검사합니다.
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

      // 요청받은 게시글 idx를 기준으로 데이터를 업데이트하는 함수입니다.
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

  // 게시글 삭제 함수
  public deletePost = async (req: AuthRequest, res: Response) => {
    let idx: string = req.query.idx as string; 

    // 게시글 idx를 검사합니다. (idx의 존재 여부, 1이상의 양의 정수인지 확인)
    if (!idx || parseInt(idx) < 0) {
      res.status(400).json({
        status: 400,
        message: 'idx를 정확히 작성해 주세요!'
      });

      return;
    }

    try {
      // 요청 받은 게시글 idx를 기준으로 데이터를 삭제합니다. 
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
