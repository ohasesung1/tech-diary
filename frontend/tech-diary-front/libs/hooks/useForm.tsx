import { useReducer, ChangeEvent, useCallback } from 'react';

type ActionType = {
  name: string;
  value: any;
};

function reducer<T>(state: T, action: ActionType|null) {
  if(!action) {
    const initialState: any = {};
    Object.keys(state).forEach((key) => {
      initialState[key] = '';
    });

    return initialState;
  }

  return {
    ...state,
    [action.name]: action.value,
  };
}

function useForm<T>(initialState: T) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({ name, value });
  }, []);

  return [ state, onChange, dispatch ] as [
    T,
    typeof onChange,
    typeof dispatch,
  ];
}

export default useForm;