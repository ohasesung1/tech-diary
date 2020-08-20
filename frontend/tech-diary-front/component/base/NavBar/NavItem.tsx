/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const LinkWrap = styled.a<{ active: boolean }>`
  label: link;
  font-size: 0.9rem;
  user-select: none;
  cursor: pointer;
  display: block;
  padding: 1rem 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  color: #868e96;
  transition: 0.3s ease-in-out;
  border-bottom: solid 0.01rem #495057;

  &:hover {
    transition: 0.3s ease-in-out;
    color: white;
    border-right: solid 0.2rem #DDFFAA;
  }

  ${(props) => props.active && `
      color: white;
      border-right: solid 0.2rem #DDFFAA;
    ` 
  }
`;

type Props = {
  href: string;
  children: ReactNode|string;
}

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