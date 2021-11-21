import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

import { alpha } from '@mui/material/styles';

//Components
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {
  Box,
  List,
  Grid,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Collapse,
  Toolbar,
  Menu,
  MenuItem,
  ListItemButton,
  Stack
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

//Icons
import {
  MenuRounded,
  FaceRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  HomeRounded,
  ListAltRounded,
  ArrowRightRounded,
  ManageSearchRounded,
  SettingsRounded,
} from "@mui/icons-material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { ReactComponent as ArtesanLogo } from "../asserts/16_6_6_661_Artesan.svg"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "theme.shape.borderRadius",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  color: "#7B442A",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 300;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7.2)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const MyListItem = styled(ListItem)(({ theme }) => ({
  "&.Mui-selected": {
    background: "rgba(51, 126, 173, .1)",
    "&:hover": {
      background: "rgba(51, 126, 173, .1)"
    },
  },

}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: theme.palette.primary,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const MyToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Toggle = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AvatarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
const Footer = styled("div")({
  display: "flex",
  position: "fixed",
  bottom: 0,
  marginTop: 20,
  zIndex: 50,
  padding: 10,
  background: "#F5FBFF",
  width: "100%",
  marginLeft: "-25px",
  color: "white",
})
export default function PageWrapper({ children, ...props }) {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const [open3, setOpen3] = React.useState(true);

  const handleClose = () => {
    localStorage.removeItem('user');
    props.setUserState();
    setAnchorEl(null);
  }


  const handleCloseMenu = () => {
    setAnchorEl(null);
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    setOpen(!open3);
  };


  ////////

  const handleDrawerOpen = () => {
    setOpen(!open);
    if (open) {
      setOpenSchedule(false);
      setOpenAttendance(false);
      setOpenSchedule(false);
      setOpenProgram(false);
    }
  };
  const closeOnContainerClick = () => {
    setOpen(false);
    setOpenSchedule(false);
    setOpenAttendance(false);
    setOpenSchedule(false);
    setOpenProgram(false);
  }
  const routes = [
    {
      name: "Dashboard",
      link: "/",
      icon: <DashboardOutlinedIcon color="primary" />,
      subRoutes: [],
    },
    {
      name: "Pedidos",
      link: "/pedidos",
      icon: <ShoppingCartOutlinedIcon color="primary" />,
      subRoutes: [],
    },
    {
      name: "Fornecedores",
      link: "/fornecedores",
      icon: <GroupRoundedIcon color="primary" />,
      subRoutes: [],
    },
    {
      name: "Financeiro",
      link: "/Financeiro",
      icon: <CreditCardIcon color="primary" />,
      subRoutes: [],
    },
  ];
  const [openSchedule, setOpenSchedule] = React.useState(false);
  const [openAttendance, setOpenAttendance] = React.useState(false);
  const [openProgram, setOpenProgram] = React.useState(false);
  function openMenu() {
    if (!open) {
      setOpen(true);
    }
  }
  function variables() {
    return {
      openSchedule: openSchedule,
      openAttendance: openAttendance,
      openProgram: openProgram,
      handleOpenSchedule: () => {
        setOpenSchedule(!openSchedule);
        setOpenAttendance(false);
        setOpenProgram(false);
        openMenu();
      },
      handleOpenAttendance: () => {
        setOpenAttendance(!openAttendance);
        setOpenSchedule(false);
        setOpenProgram(false);
        openMenu();
      },
      handleOpenProgram: () => {
        setOpenProgram(!openProgram);
        setOpenAttendance(false);
        setOpenSchedule(false);
        setOpenAttendance(false);
        openMenu();
      },
    };
  }

  return (
    <Box sx={{ display: "flex", bgcolor: "transparent" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="" elevation={1}>
        <MyToolbar>
          <Toggle>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
              }}
            >
              <MenuRounded color="primary" />
            </IconButton>
            <ArtesanLogo />
          </Toggle>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="row" spacing={1}>
              <Stack direction="row" spacing={1}>
                <ShoppingBagOutlinedIcon color="primary" />
                <Typography color="#7B442A">
                  Cadastrar Fornecedor
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <ShoppingBasketOutlinedIcon color="primary" />
                <Typography color="#7B442A">
                  Registrar o produto
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <NotificationsOutlinedIcon color="primary" />
            <AvatarContainer onClick={handleMenu}>
              <br />
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="primary"
                  >
                    <Avatar sx={{ bgcolor: "#7B442A" }}>MQ</Avatar>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open2}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                  </Menu>
                </div>
              )}
              <ListItemButton onClick={handleClick}>
                <ListItemText primary=" Marly Queiroz" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </AvatarContainer>
          </Grid>
        </MyToolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} color="secondary">
        <DrawerHeader>
          <Typography fontWeight="500" color="#7B442A" align="center">
            Gestão Artesan
          </Typography>
          {/* <IconButton onClick={handleDrawerClose} sx={{justifySelf:"flex-end"}}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon color="primary" />
            )}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((item) => (
            <div key={item.name}>
              <MyListItem
                button
                component={NavLink}
                to={item.link}
                end={item.link === "/" ? true : false}
                style={({ isActive }) => ({ background: isActive && "rgba(51, 126, 173, .1)" })}

                onClick={variables()[item.eventClick]}
                sx={{ display: "flex", color: "#7B442A" }}
              >
                <ListItemIcon >{item.icon}</ListItemIcon>
                <ListItemText sx={{ ml: -1 }} primary={item.name} />
                {item.subRoutes.length ? (
                  variables()[item.collapseRoute] ? (
                    <ExpandLessRounded />
                  ) : (
                    <ExpandMoreRounded />
                  )
                ) : (
                  <span></span>
                )}
              </MyListItem>
              <Collapse in={variables()[item.collapseRoute]}>
                {item.subRoutes.map((item) => (
                  <MyListItem
                    key={item.name}
                    button
                    component={NavLink}
                    to={item.link}
                    style={({ isActive }) => ({ background: isActive && "rgba(51, 126, 173, .1)" })}
                    end
                    onClick={variables()[item.eventClick]}
                    sx={{ display: "flex", pl: 4, color: "#7B442A" }}
                  >
                    <ListItemIcon>
                      <ArrowRightRounded color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </MyListItem>
                ))}
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} onClick={closeOnContainerClick}>
        <DrawerHeader />
        {children}
        <Footer>
          <Typography variant="h7" color="#7B442A" sx={{ ml: 2 }}>
            <Typography component="span" fontWeight="500" >@Projeto Alegria</Typography> - Todos os Direitos Reservados
          </Typography>
        </Footer>
      </Box>
    </Box>
  );
}
