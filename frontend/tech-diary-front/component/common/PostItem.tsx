import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { Post } from 'store/types/post.type';
import Link from 'next/link';
import moment from 'moment'; 
import MarkdownRender from './MarkdownRender';
// container commnet wow
const Container = styled.div`
  label: post-item;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  min-height: 30rem;
  align-self: center;
  justify-self: center;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  
  user-select: none;
`;

const HeadWrap = styled.div`
  label: head_wrap;
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
`;

const Thumnail = styled.img`
  label: thumnail;
  display: flex;
  height: 10rem;
  width: 20rem;
  z-index: 0;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  transition: 0.5s ease-in-out;
  object-fit: cover;

  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);

    cursor: pointer;
   }
`;

const ThumnailWarp = styled.span`
  height: 10rem;
  width: 20rem;
  border-radius: 5px 5px 0 0;

  overflow: hidden;
`;

const ContentWrap = styled.div`
  label: content_wrap;
  display: block;
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
    font-size: 1.5rem;
    font-weight: 500;
  `}
`;

type Props = {
  data: Post;
  page: string;
};

function PostItem({ data, page }: Props) {
  
  const {
    id,
    title,
    contents,
    thumbnail_address,
    create_time
  } = data;

  const dateFormat = moment(create_time).format('YYYY년 MM월 DD일');
  
  return (
    <Container>
      <Link href={`${page}/${id}`}>
        <ThumnailWarp>
          <Thumnail src={thumbnail_address}/>
        </ThumnailWarp>
      </Link>
      <HeadWrap>
        <Link href={`${page}/${id}`}>
          <LinkFontStyle type={'title'}>{title}</LinkFontStyle>
        </Link>
        <div>
          <Link href={`${page}/${id}`}>
            <LinkFontStyle>{dateFormat}</LinkFontStyle>
          </Link>
        </div>
      </HeadWrap>

      <ContentWrap>
        <MarkdownRender markdown={contents.substring(0, 100)}/>
      </ContentWrap>

      <BottomWrap>
        <Link href={`${page}/${id}`}>
          <LinkFontStyle>Read More...</LinkFontStyle>
        </Link>
      </BottomWrap>
    </Container>
  );
}

export default PostItem;