import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { POST_GET_REQUEST } from 'store/modules/post';

 const usePost = (category: string) => {
  const dispatch = useDispatch();
  const { postData, totalPage, loading } = useSelector((state: RootState) => state.post);

  const [page, setPage] = useState(0);

  const fetchBlogData = useCallback(() => {
    dispatch({
      type: POST_GET_REQUEST,
      payload: {
        page,
        category,
      }
    });
  }, [page]);

  useEffect(() => {
    fetchBlogData();
  }, [page]);

  return { postData, loading, page, totalPage, setPage };
}

export default usePost;