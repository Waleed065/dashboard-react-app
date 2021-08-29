import { styled } from '@material-ui/core/styles';

import MHidden from './MHidden';
import { defaultSpaceMd, defaultSpaceSm, navBarHeightMd, navBarHeightSm } from '../constants/styles';

// ----------------------------------------------------------------------

interface schema{
    children: JSX.Element | JSX.Element[]
}
export default function AuthLayout({ children }:schema) {
  return (
    <HeaderStyle>
      <MHidden width="smDown">
        <StyledDiv>
          {children}
        </StyledDiv>
      </MHidden>
    </HeaderStyle>
  );
}


const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'absolute',
  height: navBarHeightMd,
  [theme.breakpoints.down("sm")]: {
    alignItems: 'flex-start',
    height: navBarHeightSm,
  }
}));

const StyledDiv = styled('div')(({theme}) => ({
  margin: theme.spacing(0, defaultSpaceMd),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, defaultSpaceSm),
  }
}))