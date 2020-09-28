
export type Post = {
  id: string;
  title: string;
  contents: string;
  thumbnail_address?: string;
  series?: string;
  create_time: string;
};

export type PostListResponse = {
  posts: Post[];
  totalPage: number;
}

export type PostGet = {
  page: number;
  category: string;

  successCB?: () => void;
  failureCB?: () => void;
};


export type PostGetById = {
  id: string;

  successCB?: () => void;
  failureCB?: () => void;
};

export type PostWriteReq = {
  title: string;
  contents: string;
  category: string;
  thumnailAddress: string;

  successCB?: () => void;
  failureCB?: () => void;
}

export type PostUpdateReq = {
  id: string;
  thumbnailAddress: string;
  title: string;
  contents: string;

  successCB?: () => void;
  failureCB?: () => void;
}

export type PostDeleteReq = {
  id: string;

  successCB?: () => void;
  failureCB?: () => void;
}