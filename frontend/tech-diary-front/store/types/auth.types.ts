export type AuthLogin = {
  memberId: string;
  pw: string;

  successCB?: () => void;
  failureCB?: () => void;
};
