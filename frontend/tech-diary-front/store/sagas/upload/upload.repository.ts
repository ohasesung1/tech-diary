import axios from "axios";
import { UploadFileReq } from "store/types/upload";
import { env } from 'libs/config/env';
import { getStorage } from "libs/storage";

const { server } = env;

class UploadRepository {
  public async uploadFileReq(req: UploadFileReq) {
    const token = getStorage('diary-token');

    return axios.post(`${server.host}/upload/img`, req.formData, {
      headers: {
        token: token,
      }
    })
    .catch((error) => error.response);
  }
}

export default new UploadRepository();