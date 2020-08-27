import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import useForm from 'libs/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_LOGIN_REQUEST, setLoginErrorMsg } from 'store/modules/auth';
import { RootState } from 'store/modules';

const ErrorMsgWrap = styled.div`
  margin-bottom: 1rem;
  color: tomato;
  font-size: 1.15rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 1.5rem;

  padding: 0.5rem;
`;

const SignInButton = styled.button`
  width: 10rem;
  height: 3rem;

  margin-top: 2rem;
`;

type CreateSignInForm = {
  id: string,
  pw: string,
};

function SignInModal() {
  const dispatch = useDispatch();
  const { authLoginErrorMsg } = useSelector((state: RootState) => state.auth);

  const [form, onChange] = useForm<CreateSignInForm>({
    id: '',
    pw: '',
  });

  const onSignIn = useCallback(() => {
    const { id, pw } = form;
    
    dispatch({
      type: AUTH_LOGIN_REQUEST,
      payload: {
        memberId: id,
        pw,
      },
    });
  }, [form.id, form.pw, dispatch]);

  return (
    <Container>
      <ErrorMsgWrap>{authLoginErrorMsg}</ErrorMsgWrap>
      <SignInHeader>Sign In</SignInHeader>
      <SignInFormWrap>
        <InputForm placeholder={"ID"} name={'id'} value={form.id} onChange={onChange}/>
        <InputForm placeholder={"PW"} name={'pw'} type={'password'} value={form.pw} onChange={onChange}/>
      </SignInFormWrap>
      <SignInButton onClick={onSignIn}>
        Sign In
      </SignInButton>
    </Container>
  );
}

export default SignInModal;