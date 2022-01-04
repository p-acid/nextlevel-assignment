import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { URI } from '../config';

import InputBox from '../components/InputBox';

const SignIn: NextPage = props => {
  const [userInfo, setUserInfo] = useState({
    ID: '',
    Password: '',
  });

  const router = useRouter();

  const { ID, Password } = userInfo;

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const userData = JSON.stringify({
    identifier: ID,
    password: Password,
  });

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${URI}/v1/auth/local`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: userData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.jwt) {
          console.log(res.jwt);
          console.log(localStorage);
          router.push('/');
        } else {
          alert('아이디 비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <Wrapper>
      <SubWrapper>
        <Logo src="/images/typo_logo.png" alt="symbol_logo" />
        <Title>로그인</Title>
        <Form onSubmit={submitData}>
          <InputBox data={DATA.id} value={ID} event={handleUserInfo} />
          <InputBox data={DATA.pw} value={Password} event={handleUserInfo} />
          <Button>로그인</Button>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 375px;
`;

const Logo = styled.img`
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  padding-bottom: 1.5rem;
  font-family: NotoSansB;
`;

const Form = styled.form`
  width: 100%;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 0;
  width: 100%;
  border-radius: 4rem;
  font-family: NotoSansB;
  background-color: ${({ theme }) => theme.main};
  cursor: pointer;
`;
