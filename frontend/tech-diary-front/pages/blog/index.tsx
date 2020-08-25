import React from 'react';
import Head from 'next/head';
import { MainTemplate } from 'component/template/MainTemplate';
import { env } from 'libs/config/env';
import BlogLayout from 'container/blog/BlogLayout';


function IndexBlogPage() {
  return (
    <>
      <Head>
        <title>{env.appName}</title>
      </Head>
      <MainTemplate>
        <BlogLayout/>
      </MainTemplate>
    </>
  );
}

export default IndexBlogPage;