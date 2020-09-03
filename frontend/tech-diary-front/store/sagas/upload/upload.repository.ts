import axios from "axios";
import { UploadFileReq } from "store/types/upload";

class UploadRepository {
  public async uploadFileReq(req: UploadFileReq) {
    return axios.post(`upload/img`, req.formData)
    .catch((error) => error.response);
  }
}

export default new UploadRepository();