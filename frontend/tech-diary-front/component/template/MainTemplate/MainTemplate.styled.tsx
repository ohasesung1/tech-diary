import { css } from "@emotion/core";
import styled from "@emotion/styled";
// import { layoutTerm, mainLayoutTerm } from "component/layout/page";
import { mediaQuery, breakPoints } from "component/layout/responsive";

export const Template = styled.div`
  label: template;
  position: relative;
`;

export const Container = styled.div`
  label: container;
  width: 100%;
  display: flex;
  flex-direction: row;

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 1px solid black; */
  }
`;

export const AsideSemen = styled.aside<{hidden: boolean}>`
  label: aside_style;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  width: 22rem;
  height: 100vh;
  flex-shrink: 0;
  background-color: #191919;

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 20rem;
    background-color: #191919;
  }

  ${(props) => props.hidden && css`
    display: none;
  `}
  
`;

export const MainSeme = styled.main`
  label: main_semen;
  min-height: 100rem;
  /* border: 1px solid black; */
`;

export const MainSemeWarp = styled.main`
  label: main_semen_wrap;
  /* border: 1px solid black; */
  padding: 2rem;
  flex: 1;
  background-color: #e9ecef;
`;