import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {styled, useTheme} from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List'




const panelWidth= 200;

const Main = styled('main',{ shouldForwardProp: (prop)=>prop !=='open' })(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition:theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${panelWidth}px`,
        ...(open && {
            transition:theme.transitions.create('margin',{
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft:0
        } )
    })
)

const AppBars = styled(MuiAppBar,{ shouldForwardProp: prop => prop!=='open'})(
    ({theme,open})=>({
        transition:theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            width:`calc(100% - ${panelWidth}px)`,
            marginLeft: `${panelWidth}px`,
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        } )
    })
)


const PanelHead = styled('div')(({theme}) =>({
    display:'flex',
    alignItems: 'center',
    padding:'theme.spacing(0,1)',
    ...theme.mixins.toolbar,
    justifyContent:'flex-end' 
}))

export default function Nav() {
  const theme = useTheme()
    const[open, setOpen] = React.useState(false);
    

    const handlePanelOpen =()=>{
        setOpen(true)
    }

    const handlePanelClose = () =>{
        setOpen(false)
    }


  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 } )
  const isMobileOrTablets = useMediaQuery(
    { minDeviceWidth: 300} // `device` prop
 )
  return (
    
    <Box >
      <MediaQuery minWidth={1224}>
    
      <AppBar sx={{pb:-4}} position="static">
        <Toolbar >
        <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handlePanelOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: 'flex' }}>
        
        
        <Drawer
          sx={{
            width: panelWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: panelWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <PanelHead>
            <IconButton onClick={handlePanelClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </PanelHead>
          <Divider />
          <List>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Sales
            </Typography>
            {['Dashboard', 'E-commerce', 'Saas', 'Crypto'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                    {index[text]}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Applications
            </Typography>
            {['Calendar', 'Chat', 'File Manager', 'Ecommerce', 'Email', 'invoice', 'projects'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                    {index[text]}                  
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <PanelHead />
          
        </Main>
      </Box>

          <Typography color="black" variant="h4" fontWeight="bold" component="div" sx={{ flexGrow:2}}>
            Dashboard
          </Typography>
          <SearchIcon color="inherit" sx={{  mr: 4 }} />
          <WidgetsIcon color="inherit" sx={{  mr: 4}} />
          <NotificationsNoneIcon color="inherit" sx={{  mr: 4 }} />
          <SettingsIcon color="inherit" sx={{  mr: 4 }} />
          <AccountCircleIcon color="inherit" sx={{  mr: 4 }} />
        
        </Toolbar>
      </AppBar>
      </MediaQuery>
      
       <MediaQuery maxWidth={1200}>
     
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ flexGrow:1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="black"  fontWeight="bold" component="div" sx={{ flexGrow:1}}>
            Dashboard
          </Typography>
          <SearchIcon color="inherit" sx={{  flexGrow:1 }} />
          <WidgetsIcon color="inherit" sx={{  flexGrow:1}} />
          <NotificationsNoneIcon color="inherit" sx={{  flexGrow:1 }} />
          <SettingsIcon color="inherit" sx={{  flexGrow:1 }} />
          <AccountCircleIcon color="inherit" sx={{  flexGrow:1 }} />
        
        </Toolbar>
      </AppBar>
      </MediaQuery>
    </Box>
  );
}
