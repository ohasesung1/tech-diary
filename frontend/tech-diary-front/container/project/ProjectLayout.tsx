import React from 'react';
import PageHeade from 'component/base/PageHeade';
import { Post } from 'store/types/post.type';
import PostList from 'component/common/PostList';
import Loading from 'component/common/Loading';
import usePost from 'component/base/hooks/usePost';
import PageNationList from 'component/common/PageNationList';

type Props = {
  posts?: Post[];
}

function ProjectLayout({ posts }: Props) {
  const { loading, postData, page, setPage, totalPage } = usePost('project');


  if (loading || !postData) return (<Loading/>);
  return (
    <>
      <PageHeade title={'Project'}/>
      <PostList items={posts || postData || []} page={'project'}/>
      <PageNationList totalPage={totalPage} setPage={setPage} page={page}/>
    </>
  );
}

export default ProjectLayout;