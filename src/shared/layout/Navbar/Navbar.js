import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { PAGES, SETTINGS_MENU } from '../../../utils/menu/pages';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../../store';



const Navbar = () => {
  const authUser = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null);


  };

  const handleCloseUserMenu = (menu) => {
    setAnchorElUser(null);
    console.log("CLOSING")
    try {
      switch (menu.title) {
        case 'logout':
          logoutHandler()
          break;

        default:
          break;
      }
    }
    catch {

    }
  };
  const logoutHandler = () => {
          dispatch(
            authActions.logout()
          )
  }
  const onNavbarMainHandler = () => {
    console.log("This should route to main home");
  }
  const navigate = useNavigate();
  const onNavitemClicked = (route) => {
    console.log(route);
    setAnchorElNav(null);
    navigate(route.url);
  }



  return (
    <AppBar position="static" style={{ backgroundColor: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={onNavbarMainHandler}
            sx={{
              mr: 18,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            ExpenseShare
          </Typography>

          {/* //small screen navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* //bread crumb for small screen  */}
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.name} onClick={() => { onNavitemClicked(page) }}>
                  <Typography textAlign="center">  {page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: 100 }}>
            {PAGES.map((page) => (
              <Button
                key={page.name}
                onClick={() => { onNavitemClicked(page) }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

         {
          authUser.isLoggedIn &&  <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Profile">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

            </IconButton>
          </Tooltip>
          {/* <Button variant="outlined">Outlined</Button> */}
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {SETTINGS_MENU.map((setting) => (
              <MenuItem key={setting.title} onClick={() => { handleCloseUserMenu(setting) }}>
                <Typography textAlign="right">{setting.title}</Typography>
              </MenuItem>
            ))}
          </Menu>



        </Box>
         }
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export { Navbar };