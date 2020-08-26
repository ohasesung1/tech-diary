import React from 'react';
import Head from 'next/head';
import { MainTemplate } from 'component/template/MainTemplate';
import { env } from 'libs/config/env';
import { useRouter } from 'next/router';
import SinglePost from 'component/common/SinglePost';

// 게시글 상세조회를 위한 공통 페이지
function PostSinglePage() {
  const router = useRouter();
  const postId = router.query.id as string;

  return (
    <>
      <Head>
        <title>{env.appName}</title>
      </Head>
      <MainTemplate>
        <SinglePost postId={postId} />
      </MainTemplate>
    </>
  );
}

export default PostSinglePage;