import { useMediaQuery } from '@material-ui/core';
import { widthType } from '../types';

// ----------------------------------------------------------------------



interface schema{
    width: widthType;
    children: JSX.Element
}
export default function MHidden({ width, children }:schema) {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme:any) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme:any) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
