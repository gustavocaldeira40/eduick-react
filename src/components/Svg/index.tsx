import React from 'react';

import { ReactSVG } from 'react-svg';
import SVGIcon from '../../assets/svg/detail-right.svg';

export interface SvgProps {
  path?: any;
}

export function Svg({ path }: SvgProps) {
  return <ReactSVG src={path || SVGIcon} />;
}
