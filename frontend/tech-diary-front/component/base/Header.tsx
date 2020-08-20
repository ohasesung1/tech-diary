import styled from "@emotion/styled";


const HeaderWarp = styled.header`
  label: header;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16rem;
  /* top: 0; */

`;

const TitleWarp = styled.div`
  width: 100%;
  height: 10rem;
  top: 6rem;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  /* top: 4px; */
  border: 1px solid black;
`;

const CategoryWarp = styled.div`
  label: category_warp;
  display: flex;
  width: 100%;
  height: 3rem;
  margin-top: 0;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 4px;
  border: 1px solid black;
`;



function Header({ title: string }) {
  return (
    <>
    {/* <HeaderWarp> */}
      <TitleWarp></TitleWarp>
    {/* </HeaderWarp>/ */}
    </>
  );
}

export default Header;