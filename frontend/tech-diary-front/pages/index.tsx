import React from 'react';
import Head from 'next/head'
import { env } from 'libs/config/env';
import { MainTemplate } from 'component/template/MainTemplate';
import ProjectLayout from 'container/project/ProjectLayout';
import { NextPageContext } from 'next';
import axios from 'axios';
import { Post } from 'store/post.type';


type Props = {
  posts?: Post[];
};

function IndexPage({ posts }: Props) {
  return (
   <>
    <Head>
      <title>{env.appName}</title>
    </Head>
    <MainTemplate>
      <ProjectLayout posts={posts}/>
    </MainTemplate>
   </>
  );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const { data } = await axios.get(`${env.server.host}/post/?page=0&limit=10&category=project`,);

  return {
    posts: data.data.posts,
  };
};



export default IndexPage;
