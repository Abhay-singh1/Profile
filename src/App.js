import './App.css';
import Nav from './Components/Nav'
import Cards from './Components/Cards'
import MediaCard from './Components/MediaCard';
import ProfileCard from './Components/ProfileCard';
import {styled, useTheme} from '@mui/material/styles'
import MediaQuery from 'react-responsive'


const Packet = styled('div')(({theme})=>({
  display: 'inline-flex'

}))



function App() {
  return (
    <>
    <MediaQuery minWidth={1224}>
    <Nav />
    <Packet>
      <div>
      <Cards />  
      <MediaCard />
      </div>
      <ProfileCard />

    </Packet> 
    </MediaQuery>
    <MediaQuery maxWidth={1200}>
    <Nav />
    <Packet>
      <div>
      <Cards />  
      <MediaCard />
      </div>

    </Packet> 
      <ProfileCard />
    </MediaQuery>
    </> 
  );
}

export default App;
