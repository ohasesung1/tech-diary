import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { Post } from 'store/post.type';
import Link from 'next/link';
import moment from 'moment';

const Container = styled.div`
  label: post-item;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 30rem;
  /* margin-top: 1rem; */
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const HeadWrap = styled.div`
  label: head_wrap;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  /* border: 1px solid black; */
`;

const ThumnailWrap = styled.div`
  label: thumnail_wrap;
  display: flex;
  justify-content: center;
  height: 10rem;
`;

const Thumnail = styled.img`
  label: thumnail;
  max-width: 100%;
  height: 10rem;
  border-radius: 3px;
`;

const ContentWrap = styled.div`
  display: block;
  label: content_wrap;
  width: 90%;
  height: 12rem;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

const BottomWrap = styled.div`
  label: bottom_wrap;
  display: flex;
  width: 100%;
  height: 3rem;
  flex-direction: row;
  font-size: 0.8rem;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  color: #DDFFAA;
`;

const LinkFontStyle = styled.a<{type?: string}>`
  color: #66CC33;
  transition: 0.3s ease-in-out;
  font-size: 0.7rem;
  &:hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    color: #ced4da;
  }

  ${(props) => props.type === 'title' && css`
    font-size: 1.2rem;
    font-weight: 600;
  `}
`;

type Props = {
  data: Post;
};

function PostItem({ data }: Props) {
  
  const {
    id,
    title,
    contents,
    thumbnail_address,
    createTime
  } = data;

  const dateFormat = moment(createTime).format('YYYY년 MM월 DD일');

  return (
    <Container>
      <ThumnailWrap>
        <Thumnail src={thumbnail_address}></Thumnail>
      </ThumnailWrap>

      <HeadWrap>
        <Link href={`/post/${id}`}>
          <LinkFontStyle type={'title'}>{title}</LinkFontStyle>
        </Link>
        <div>
          <Link href={`/post/${id}`}>
            <LinkFontStyle>{dateFormat}</LinkFontStyle>
          </Link>
        </div>
      </HeadWrap>

      <ContentWrap>
        {contents}
      </ContentWrap>

      <BottomWrap>
        <Link href={`/post/${id}`}>
          <LinkFontStyle>Read More...</LinkFontStyle>
        </Link>
      </BottomWrap>
    </Container>
  );
}

export default PostItem;