import { AuthLogin } from 'store/types/auth.types';
import axios from 'axios';
import { env } from 'libs/config/env';

const { server } = env;

class authRepository {
  public async authLogInReq(req: AuthLogin) {
    return axios.post(`${server.host}/auth/login`, {
      memberId: req.memberId,
      pw: req.pw,
    })
    .catch((error) => error.response);
  }
}

export default new authRepository();