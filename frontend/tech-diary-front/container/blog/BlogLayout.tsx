import React, { useCallback, useEffect } from 'react';
import PageHeade from 'component/base/PageHeade';
import PostList from 'component/common/PostList';
import PageNationList from 'component/common/PageNationList';
import Loading from 'component/common/Loading';
import { useBlog } from './hooks/useBlog';

function BlogLayout() {
  const { loading, postData, page, setPage, totalPage } = useBlog();

  

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