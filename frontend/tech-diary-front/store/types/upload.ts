export type UploadFileReq = {
  formData: any;

  successCB?: () => void;
  failureCB?: () => void;
};

export type UploadFileSuccess = {
  imgs: Array<string>;
};