/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { mediaQuery } from 'component/layout/responsive';

const LinkWrap = styled.li<{ active: boolean }>`
  label: link;
  font-size: 0.9rem;
  user-select: none;
  cursor: pointer;
  display: block;
  padding: 1rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: #868e96;
  transition: 0.3s ease-in-out;
  border-bottom: solid 0.01rem #495057;

  &:hover {
    transition: 0.3s ease-in-out;
    color: #DDFFAA;
    border-left: solid 0.2rem #DDFFAA;
  }

  ${(props) => props.active && `
      color: #DDFFAA;
      border-left: solid 0.2rem #DDFFAA;
    `
  }

  
  ${mediaQuery.sm} {
    font-size: 0.8rem;
    border-left: none;

    &:hover {
      transition: 0.3s ease-in-out;
      color: #DDFFAA;
      border-left: none;
      border-bottom: solid 0.2rem #DDFFAA;
    }

    ${(props) => props.active && `
      color: #DDFFAA;
      border-bottom: solid 0.2rem #DDFFAA;
    `
    }
  }
`;

type Props = {
  href: string;
  children: ReactNode|string;
};

function NavItem({ href, children }: Props) {
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <Link href={href}>
      <LinkWrap active={active}>{children}</LinkWrap>
    </Link>
  );
}

export default NavItem;