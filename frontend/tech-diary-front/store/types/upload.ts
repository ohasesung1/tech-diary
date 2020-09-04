export type UploadFileReq = {
  formData: any;

  successCB?: () => void;
  failureCB?: () => void;
};

export type UploadFileSuccess = {
  imgs: Array<string>;
};

export type UploadThumnailSuccess = {
  thumnail: string;
};
