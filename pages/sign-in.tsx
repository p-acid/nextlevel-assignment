import { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { submitUserData } from '../lib/user';
import { Wrapper, SubWrapper, Logo, Title, Form, Button } from '../styles/Signin/SignInStyle';

import InputBox from '../components/InputBox/InputBox';

const SignIn: NextPage = props => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });

  const router = useRouter();

  const { id, password } = userInfo;

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const userData = JSON.stringify({
    identifier: id,
    password: password,
  });

  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await submitUserData(userData);

    if (res.data.jwt) {
      localStorage.setItem('token', res.data.jwt);
      router.push('/');
    } else {
      alert('아이디 비밀번호를 확인해주세요');
    }
  };

  return (
    <Wrapper>
      <SubWrapper>
        <Logo src="/images/typo_logo.png" alt="symbol_logo" />
        <Title>로그인</Title>
        <Form onSubmit={submitData}>
          <InputBox data={DATA.id} value={id} event={handleUserInfo} />
          <InputBox data={DATA.pw} value={password} event={handleUserInfo} />
          <Button disabled={(id + password).length === 0}>로그인</Button>
        </Form>
      </SubWrapper>
    </Wrapper>
  );
};

const DATA = {
  id: { type: 'text', placeholder: '아이디를 입력해주세요.(email)', title: 'ID' },
  pw: { type: 'password', placeholder: '비밀번호를 입력해주세요.', title: 'Password' },
};

export default SignIn;
