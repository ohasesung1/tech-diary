import React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import MarkdownRender from './MarkdownRender';
import { Post } from 'store/types/post.type';
import { mediaQuery } from 'component/layout/responsive';

const SinglePostTemplate = styled.div`
  label: template;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;

  ${mediaQuery.xl} {
    width: 70%;
  }
`;

const ContentWrap = styled.div`
  label: content_wrap;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  label: content;
  width: 95%;
  min-height: 40rem;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 3rem;
  padding: 1rem;

  ${mediaQuery.sm} {
    min-height: 30rem;
  }
`;

const Thumnail = styled.img`
  label: thumnail;
  display: flex;
  justify-content: center;
  height: 30rem;
  max-width: 100%;

  ${mediaQuery.sm} {
    height: 15rem;
  }

  ${mediaQuery.md} {
    height: 15rem;
  }

  ${mediaQuery.lg} {
    height: 20rem;
  }
`;

const PostInfoWrap = styled.div`
  label: post_info_wrap;
  display: column;
  min-height: 6rem;
  margin: 1rem 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
`;

const Date = styled.div`
  padding-left: 2rem;
`;


type Props = {
  data: Post;
}

function SinglePost({ data }: Props) {

  const {
    contents,
    title,
    thumbnail_address,
    createTime
  } = data;

  const dateFormat = moment(createTime).format('YYYY년 MM월 DD일');

  return (
    <SinglePostTemplate>
      <Thumnail src={thumbnail_address} alt={"thumnail"}/>

      <PostInfoWrap>
        <Title>{title}</Title>
        <Date>{dateFormat}</Date>
      </PostInfoWrap>

      <ContentWrap>
        <Content>
          <MarkdownRender markdown={contents} fontSize={'1.1rem'}/>
        </Content>
      </ContentWrap>
    </SinglePostTemplate>
  );
}

export default SinglePost;