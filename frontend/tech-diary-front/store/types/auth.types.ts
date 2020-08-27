export type AuthLogin = {
  memberId: string;
  pw: string;

  successCB?: () => void;
  failureCB?: () => void;
};

// export type AuthLoginSuccess = {
//   token: string;
//   refreshToken: string;
// }