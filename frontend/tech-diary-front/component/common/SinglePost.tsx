import React from 'react';
import usePostDetail from 'component/base/hooks/usePostDetail';
import Loading from './Loading';

type Props = {
  postId: string;
}

function SinglePost({ postId }: Props) {
  const { loading, postData } = usePostDetail(postId);
  
  if (loading || !postData) return (<Loading/>);
  return (
    <div>
      
    </div>
  );
}

export default SinglePost;