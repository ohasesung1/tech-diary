
export type Post = {
  id: string;
  title: string;
  contents: string;
  thumbnail_address?: string;
  series?: string;
  createTime: string;
};

export type PostSuccess = {
  posts: Post[];
  totalPage: number;
}

export type PostGet = {
  page: number;
  category: string;

  successCB?: () => void;
  failureCB?: () => void;
};