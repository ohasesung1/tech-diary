import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import useForm from 'libs/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_LOGIN_REQUEST } from 'store/modules/auth';
import { RootState } from 'store/modules';
import Button from './Button';

const ErrorMsgWrap = styled.div`
  margin-bottom: 2rem;
  color: tomato;
  font-size: 1.15rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`;

const SignInHeader = styled.div`
  height: 2rem;
  font-size: 1.5rem;
`;

const SignInFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 5rem;
  margin-top: 2rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

const InputForm = styled.input`
  width: 13rem;
  height: 2rem;

  border: 0.1px solid #ced4da;

  padding: 0.5rem;
`;

type CreateSignInForm = {
  id: string,
  pw: string,
};

const validate = {
  id: (text: string) => {
    if (text.length === 0) {
      return 'id 입력';
    }
  },

  pw: (text: string) => {
    if (text.length === 0) {
      return 'pw 입력';
    }
  },
}

function SignInModal() {
  const dispatch = useDispatch();
  const { authLoginErrorMsg } = useSelector((state: RootState) => state.auth);

  const [form, onChange] = useForm<CreateSignInForm>({
    id: '',
    pw: '',
  });

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSignIn();
    }
  };

  const onSignIn = useCallback(() => {
    const { id, pw } = form;

    const errorMsg = validate.id(id) 
    || validate.pw(pw)
    || null;

  if (errorMsg) {
    alert(errorMsg);
    return;
  }
    
    dispatch({
      type: AUTH_LOGIN_REQUEST,
      payload: {
        memberId: id,
        pw,
      },
    });

  }, [form.id, form.pw, dispatch, authLoginErrorMsg]);


  return (
    <Container>
      <ErrorMsgWrap>{authLoginErrorMsg}</ErrorMsgWrap>
      <SignInHeader>Sign In</SignInHeader>
      <SignInFormWrap>
        <InputForm placeholder={"ID"} name={'id'} value={form.id} onChange={onChange} onKeyDown={(event) => handleKeyPress(event)}/>
        <InputForm placeholder={"PW"} name={'pw'} type={'password'} value={form.pw} onChange={onChange} onKeyDown={(event) => handleKeyPress(event)}/>
      </SignInFormWrap>
      <Button type={'primary'} margin={'2rem 0'} onClick={onSignIn}>
        Sign In
      </Button>
    </Container>
  );
}

export default SignInModal;