import React from 'react';

import { ReactSVG } from 'react-svg';
import SVGIcon from '../../assets/svg/detail.svg';

export interface SvgProps {
  path?: string;
}

export function Svg({ path }: SvgProps) {
  return <ReactSVG src={path || SVGIcon} />;
}
