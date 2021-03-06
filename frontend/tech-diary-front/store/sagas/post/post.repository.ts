import axios from 'axios';
import { env } from 'libs/config/env';
import { PostGet, PostWriteReq, PostUpdateReq, PostDeleteReq } from 'store/types/post.type';
import { getStorage } from 'libs/storage';

const { server } = env;

class PostRepository {
  public async postGetByCategoryReq(req: PostGet) {
    return axios.get(`${server.host}/post?page=${req.page}&category=${req.category}`)
      .catch((error) => error.response);
  }

  public async postGetDetailByIdReq(id: string) {
    return axios.get(`${server.host}/post/id/?id=${id}`)
      .catch((error) => error.response);
  }

  public async postWriteReq(req: PostWriteReq) {
    const token = getStorage('diary-token');

    return axios.post(`${server.host}/post/`, {
      title: req.title,
      contents: req.contents,
      category: req.category,
      thumnailAddress: req.thumnailAddress,
    }, {
      headers: {
        token: token,
      }
    })
    .catch((error) => error.response);
  }

  public async postUpdateReq(req: PostUpdateReq) {
    const token = getStorage('diary-token');

    return axios.put(`${server.host}/post/`, {
      id: req.id,
      title: req.title,
      contents: req.contents,
      thumbnailAddress: req.thumbnailAddress,
    }, {
      headers: {
        token: token,
      }
    })
    .catch((error) => error.response);
  }

  public async postDeleteReq(req: PostDeleteReq) {
    const token = getStorage('diary-token');

    return axios.delete(`${server.host}/post/?id=${req.id}`, {
      headers: {
        token: token,
      }
    })
    .catch((error) => error.response);
  }
}

export default new PostRepository();