import axios from 'axios';
import { env } from 'libs/config/env';
import { PostGet } from 'store/types/post.type';

const { server } = env;

class PostRepository {
  public async postGetByCategoryReq(req: PostGet) {
    return axios.get(`${server.host}/post?page=${req.page}&category=${req.category}`)
      .catch((error) => error.response);
  }
}

export default new PostRepository();