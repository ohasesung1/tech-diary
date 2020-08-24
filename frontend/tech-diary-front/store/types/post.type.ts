
export type Post = {
  id: string;
  title: string;
  contents: string;
  thumbnail_address?: string;
  series?: string;
  createTime: string;
};

export type PostGet = {
  page: number;
  limit: number;
  category: string;

  successCB?: () => void;
  failureCB?: () => void;
};