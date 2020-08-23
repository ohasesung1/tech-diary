import React from 'react';
import PageHeade from 'component/base/PageHeade';
import { Post } from 'store/post.type';
import PostList from 'component/common/PostList';

type Props = {
  posts?: Post[];
}

function ProjectLayout({ posts }: Props) {

  return (
    <>
      <PageHeade title={'Project'}/>
      <PostList items={posts || []} />
    </>
  );
}

export default ProjectLayout;