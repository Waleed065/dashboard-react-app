import { Link, Outlet } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
// components
import Logo from '../components/Logo';
import { staticPaths } from '../constants';
import {navBarHeightSm, navBarHeightMd, defaultSpaceMd, defaultSpaceSm} from '../constants/styles';


// ----------------------------------------------------------------------

const { homeRoute:{homeRoute} } = staticPaths;

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <Link to={homeRoute}>
          <Logo />
        </Link>
      </HeaderStyle>
      <Outlet />
    </>
  );
}


const HeaderStyle = styled('header')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: navBarHeightMd,
  padding: theme.spacing(0, defaultSpaceMd),
  [theme.breakpoints.down('sm')]: {
    height: navBarHeightSm,
    padding: theme.spacing(0, defaultSpaceSm),
  }
}));
