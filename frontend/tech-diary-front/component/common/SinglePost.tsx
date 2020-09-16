import React, { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import MarkdownRender from './MarkdownRender';
import { Post } from 'store/types/post.type';
import { mediaQuery } from 'component/layout/responsive';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import { getStorage } from 'libs/storage';
import Link from 'next/link';
import { POST_DELETE_REQUEST } from 'store/modules/postDelete';
import { useRouter } from 'next/router';
import { DiscussionEmbed } from 'disqus-react';

const SinglePostTemplate = styled.div`
  label: template;
  display: flex;
  flex-direction: column;
  max-width: 100rem;
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
  max-width: 100%;

  ${mediaQuery.sm} {
    height: 15rem;
  }

  ${mediaQuery.md} {
    height: 15rem;
  }

  ${mediaQuery.lg} {
    min-height: 20rem;
  }

  ${mediaQuery.xl} {
    min-height: 30rem;
  }
`;

const PostInfoWrap = styled.div`
  label: post_info_wrap;
  display: column;
  min-height: 6rem;
  margin: 1rem 0;
`;

const ControlButtonWrap = styled.div`
  label: control_button_wrap;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & > * {
    margin: 0.5rem 2rem 0.5rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
`;

const Date = styled.div`
  padding-left: 2rem;
`;

const DiscussWrap = styled.div`
  padding: 2rem;
`;

const controlButtonStyle = {
  color: '#adb5bd',
  cursor: 'pointer',
};



type Props = {
  data: Post;
  postId: string;
}

function SinglePost({ data, postId }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [isToken, setIsToken] = useState(false);
  const { isLoginSuccess } = useSelector((state: RootState) => state.auth);
  const { stateType } = useSelector((state: RootState) => state.postDelete);

  const disqusShortname = "Tech-diary"

  const {
    contents,
    title,
    thumbnail_address,
    create_time
  } = data;

  const disqusConfig = {
    url: `https://www.happy-ohaeseong.com/${postId}`,
    identifier: postId,
    title: "Tech-diary"
  };

  const dateFormat = moment(create_time).format('YYYY년 MM월 DD일');

  const onDeletePost = useCallback(() => {
    dispatch({
      type: POST_DELETE_REQUEST,
      payload: {
        id: postId,
      }
    })
  }, [dispatch]);

  useEffect(() => {
    const token = getStorage('diary-token');

    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [isToken, isLoginSuccess]);


  useEffect(() => {
    if (stateType === 'success') {
      router.back();
    }
  }, [stateType, router]);

  return (
    <SinglePostTemplate>
      <Thumnail src={thumbnail_address} alt={"thumnail"}/>

      <PostInfoWrap>
        <Title>{title}</Title>
        <Date>{dateFormat}</Date>
        {
          isToken ? 
          <>
            <ControlButtonWrap>
              <span style={controlButtonStyle} onClick={() => onDeletePost()}>삭제 하기</span>
              <Link href={`/post-update/${postId}`}>
                <a style={controlButtonStyle}>수정 하기</a>
              </Link>
            </ControlButtonWrap>
          </>
          : <></>
        }

      </PostInfoWrap>

      <ContentWrap>
        <Content>
          <MarkdownRender markdown={contents} fontSize={'1.1rem'}/>
        </Content>
      </ContentWrap>
      <DiscussWrap>
        <DiscussionEmbed 
          shortname={disqusShortname}
          config = {disqusConfig}
        />
      </DiscussWrap>

    </SinglePostTemplate>
  );
}

export default SinglePost;