import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { POST_GET_DETAIL_REQUEST } from 'store/modules/postDetail';

const usePostDetail = (postId: string) => {
  const dispatch = useDispatch();
  const { postData, loading } = useSelector((state: RootState) => state.postDetail);

  useEffect(() => {
    dispatch({
      type: POST_GET_DETAIL_REQUEST,
      payload: { id: postId },
    });
  }, [postId]);

  return { postData, loading }
};

export default usePostDetail