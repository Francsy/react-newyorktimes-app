import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { userContext } from "../../../context/userContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Home', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
    };
  }
  static contextType = userContext;


  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  handleOpenUserMenu = (event) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  render() {
    const { anchorElNav, anchorElUser } = this.state;
    const { name, removeName } = this.context;


    return (
      <AppBar className="header" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            {/* <Link to="/"> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href={"/"}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NEW YORK TIMES
            </Typography>
            {/* </Link> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleOpenNavMenu}
                color="inherit"
              >
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
                onClose={this.handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
               {/*  {pages.map((page) => (
                  <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
                <Link to="/">
                 <MenuItem onClick={this.handleCloseNavMenu}>
                    <Typography textAlign="center">{'Home'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="/list">
                 <MenuItem onClick={this.handleCloseNavMenu}>
                    <Typography textAlign="center">{'News!'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="/form">
                 <MenuItem onClick={this.handleCloseNavMenu}>
                    <Typography textAlign="center">{'Post!'}</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            {/* <Link to="/"> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NYT
            </Typography>
            {/* </Link> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
               <Button
                  key={'Home'}
                  onClick={this.handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                >
                  {'Home'}
                </Button>
              </Link>
              <Link to="/list">
               <Button
                  key={'News!'}
                  onClick={this.handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {'News!'}
                </Button>
              </Link>
              <Link to="/form">
               <Button
                  key={'Post!'}
                  onClick={this.handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {'Post!'}
                </Button>
              </Link>
            </Box>
            {name ? 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <span>{name}</span>
                  {/* <Typography textAlign="center">{name}</Typography> */}
                </IconButton>
              </Tooltip>
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
                onClose={this.handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                
                  <MenuItem onClick={removeName}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>: 
            <></>}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
export default Nav;














// ***************************
/* 

import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return <nav>
      <Link to='/'><button>Home</button></Link>
      <Link to='/list'><button>News!</button></Link>
      <Link to='/form'><button>Post!</button></Link>
    </nav>
  }
}

export default Nav;
 */