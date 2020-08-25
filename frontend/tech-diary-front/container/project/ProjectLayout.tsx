import React, { useEffect, useState } from 'react';
import PageHeade from 'component/base/PageHeade';
import { Post } from 'store/types/post.type';
import PostList from 'component/common/PostList';
import Loading from 'component/common/Loading';

type Props = {
  posts?: Post[];
  loading?: boolean;
}

function ProjectLayout({ posts, loading }: Props) {

  if (loading || !posts) return (<Loading/>);
  return (
    <>
      <PageHeade title={'Project'}/>
      <PostList items={posts || []} />
    </>
  );
}

export default ProjectLayout;