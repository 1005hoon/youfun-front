import styled from "styled-components/macro";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Background = styled.div`
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
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
  padding: 48px 0;
  align-items: center;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    width: 100%;
    margin: 0 80px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1280px;
    width: 100%;
    margin: 0 80px;
  }
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;

  @media screen and (min-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

export const MobileIcon = styled.div`
  display: block;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Hamburger = styled.img.attrs({
  src: "/images/icons/hamburger.svg",
})``;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
  }
`;

export const NavItem = styled.li`
  margin: 0 24px;
  font-weight: 300;
`;

export const NavScrollLink = styled(ScrollLink)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &.active,
  :hover {
    color: #fff;
  }
`;

export const CTALink = styled(RouterLink)`
  font-weight: normal;
  text-decoration: none;
  color: #fff;
  display: flex;
  font-size: 20px;
  border: 1px solid #fff;
  border-radius: 41px;
  padding: 13px 24px;
  width: 92.4px;
  height: 24px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
