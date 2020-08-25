import React from 'react';
import PageHeade from 'component/base/PageHeade';
import PostList from 'component/common/PostList';
import PageNationList from 'component/common/PageNation/PageNationList';
import Loading from 'component/common/Loading';
import usePost from '../../component/base/hooks/usePost';

function BlogLayout() {
  const { loading, postData, page, setPage, totalPage } = usePost('blog');

  if (loading || !postData) return (<Loading/>);
  return (
    <>
      <PageHeade title={'Blog'}/>
      <PostList items={postData || []} />
      <PageNationList totalPage={totalPage} setPage={setPage} page={page}/>
    </>
  );
}

export default BlogLayout;