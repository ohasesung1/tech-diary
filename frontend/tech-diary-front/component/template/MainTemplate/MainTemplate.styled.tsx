import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { layoutTerm, mainLayoutTerm } from "component/layout/page";

export const Template = styled.div`
  label: template;
  position: relative;
`;

export const Container = styled.div`
  label: container;
  width: 100%;
  height: 300rem;
  display: flex;
  flex-direction: row;
`;

export const AsideSemen = styled.aside<{hidden: boolean}>`
  label: aside_style;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  min-height: 100vh;
  background-color: #191919;
  flex-shrink: 0;

  ${(props) => props.hidden && css`
    display: none;
  `}
`;

export const MainSeme = styled.main`
  label: main_semen;
  flex: 1;
  background-color: #e9ecef;
  /* padding-top: 2rem;
  padding-left: ${mainLayoutTerm};
  padding-right: 2rem; */
`;