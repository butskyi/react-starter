import { type SerializedStyles, type Theme, css } from '@emotion/react';
import { Grid } from 'antd';

export { type Breakpoint } from 'antd/es/_util/responsiveObserver';

export const useBreakpoint = () => Grid.useBreakpoint();

export const createStyles = <
  T extends Record<string, SerializedStyles | ((theme: Theme) => SerializedStyles)>
>(
  arg: T
) => arg;

export const getMQ = (token: Theme['token']) => ({
  xsMin: `@media (min-width: ${token.screenXSMin}px)`,
  xsMax: `@media (max-width: ${token.screenXSMax}px)`,
  smMin: `@media (min-width: ${token.screenSMMin}px)`,
  smMax: `@media (max-width: ${token.screenSMMax}px)`,
  mdMin: `@media (min-width: ${token.screenMDMin}px)`,
  mdMax: `@media (max-width: ${token.screenMDMax}px)`,
  lgMin: `@media (min-width: ${token.screenLGMin}px)`,
  lgMax: `@media (max-width: ${token.screenLGMax}px)`,
  xlMin: `@media (min-width: ${token.screenXLMin}px)`,
  xlMax: `@media (max-width: ${token.screenXLMax}px)`,
  xxlMin: `@media (min-width: ${token.screenXXLMin}px)`,
});

export const centeredCss = css({
  display: 'grid',
  placeContent: 'center',
  height: '100%',
});

export const fullVPHeightCss = css({
  height: '100vh',
});
