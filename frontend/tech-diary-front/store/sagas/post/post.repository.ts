import axios from 'axios';
import { env } from 'libs/config/env';

const { server } = env;

type PostGetRequest = {
  page: number;
  limit: number;
  category: string;
}

class PostRepository {
  public async postGetByCategoryReq(req: PostGetRequest) {
    return axios.get(`${server.host}/api/post?page=${req.page}&limit=${req.limit}&category=${req.category}`)
      .catch((error) => error.response);
  }
}

export default new PostRepository();