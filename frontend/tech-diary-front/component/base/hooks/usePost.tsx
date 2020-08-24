import { useSelector, useDispatch } from 'react-redux';
import { getPostSaga } from 'store/sagas/post/post.saga';
import { POST_GET_REQUEST } from 'store/modules/post';

export const usePost = (page: number, limit: number, category: string) => {
  const dispatch = useDispatch();
  dispatch(getPostSaga());
  
};
