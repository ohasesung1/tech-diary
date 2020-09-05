import React from 'react';
import PostWriterLayout from 'container/postWrite/PostWriterLayout';
import { useRouter } from 'next/router';

function ProjectPostWritePage() {
  const router = useRouter();
  const pathNameArray = router.pathname.split('/');

  return (
    <PostWriterLayout category={pathNameArray[1]}/>
  );
}

export default ProjectPostWritePage;