import * as React from 'react'
import {styled, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline  from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import  Toolbar  from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography  from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


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

const AppBar = styled(MuiAppBar,{ shouldForwardProp: prop => prop!=='open'})(
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

export default function NavPanel(){
    const theme = useTheme()
    const[open, setOpen] = React.useState(false);
    

    const handlePanelOpen =()=>{
        setOpen(true)
    }

    const handlePanelClose = () =>{
        setOpen(false)
    }


    return(
        <Box sx={{ display: 'flex' }}>
        
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handlePanelOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
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
    )
}

