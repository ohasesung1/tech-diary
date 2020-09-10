import React from 'react';
import { useRouter } from 'next/router';
import PostUpdate from 'component/post/PostUpdate';
import usePostDetail from 'component/base/hooks/usePostDetail';
import Loading from 'component/common/Loading';


function PostUpdatePage() {
  const router = useRouter();
  const postId = router.query.id as string;

  const { loading, postData } = usePostDetail(postId);


  if (loading || !postData) return (<Loading/>);

  return (
    <PostUpdate
      postId={postId}
      postData={postData}
    />
  );
}

export default PostUpdatePage;