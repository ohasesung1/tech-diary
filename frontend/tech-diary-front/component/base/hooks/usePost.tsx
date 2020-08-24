import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import { fetchPostGet, setPostGetErrorMsg } from 'store/modules/post';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import postSaga from 'store/sagas/post/post.saga';

export const usePost = (page: number, limit: number, category: string) => {
  const dispatch = useDispatch();
  const test = postSaga();
  console.log(test);
  
};
