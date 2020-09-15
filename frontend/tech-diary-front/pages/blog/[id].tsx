import React from 'react';
import Head from 'next/head';
import { MainTemplate } from 'component/template/MainTemplate';
import { env } from 'libs/config/env';
import { useRouter } from 'next/router';
import SinglePost from 'component/common/SinglePost';
import usePostDetail from 'component/base/hooks/usePostDetail';
import Loading from 'component/common/Loading';

function PostSinglePage() {
  const router = useRouter();
  const postId = router.query.id as string;

  const { loading, postData } = usePostDetail(postId);

  if (loading || !postData) return (<Loading/>);

  return (
    <>
      <Head>
        <title>{env.appName}</title>
      </Head>
      <MainTemplate>
        <SinglePost 
          data={postData}
          postId={postId}
        />
      </MainTemplate>
    </>
  );
}

export default PostSinglePage;