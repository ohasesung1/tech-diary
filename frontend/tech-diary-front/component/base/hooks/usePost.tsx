import { useDispatch } from "react-redux";
import { POST_GET_REQUEST } from 'store/modules/post';

function usePost(page: number, category: string) {
  const dispatch = useDispatch();
  dispatch({
    POST_GET_REQUEST,
    page,
    category,
  })
};

export default usePost;