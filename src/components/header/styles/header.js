import styled from "styled-components/macro";

export const Background = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url("/images/header/img_deco_01.png") no-repeat top 618px right
      227.5px/72.5px 20.7px,
    url("/images/header/img_deco_01.png") no-repeat top 553px right 0px/33px
      14px,
    url("/images/header/img_main_01@1x.png") no-repeat top 383px right 23.6px/182.4px
      279.9px,
    url("/images/header/img_deco_bg_01@1x.png") no-repeat top 47px right 0px/264px
      662px;
  @media screen and (min-width: 1200px) {
    align-items: center;
    background: url("/images/header/img_deco_01.png") no-repeat top 845px right
        502px/133px 38px,
      url("/images/header/img_deco_01.png") no-repeat top 739px right 48px/94px
        32px,
      url("/images/header/img_main_01@2x.png") no-repeat top 283px right 138px/430px
        660px,
      url("/images/header/img_deco_bg_01@2x.png") no-repeat top right/749px
        943.2px;
  }
  @media screen and (min-width: 1920px) {
    background: url("/images/header/img_deco_01.png") no-repeat top 859px right
        742px/133px 38px,
      url("/images/header/img_deco_01.png") no-repeat top 753px right 288px/94px
        32px,
      url("/images/header/img_main_01@2x.png") no-repeat top 297px right 378px/430px
        660px,
      url("/images/header/img_deco_bg_01@3x.png") no-repeat top right/960px
        978.2px;
  }
`;

export const Container = styled.div`
  margin: 3rem 1.5rem;
  display: flex;
`;
