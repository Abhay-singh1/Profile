import React from 'react'
import {styled, useTheme} from '@mui/material/styles'
import Image1 from '../images/images.jpeg'
import Typography from '@mui/material/Typography';
import { Table, TableCell, TableRow } from '@mui/material';
import MediaQuery from 'react-responsive'

const Card =styled('div')(({theme}) =>({
    width:300,
    height: 480,
    marginLeft:100,
    marginTop:20,
    background:'inherit',
    borderRadius:'10px',
    
}))

const UpperContainer = styled('div')(({theme}) =>({
    height:100,
    background:'grey',


}))
const LowerContainer = styled('div')(({theme}) =>({
    height:'80%',
    textAlign:'center',
    justifyContent:'center'
}))
const Name = styled('div')(({theme}) =>({
    paddingTop:60
}))


const Image = styled('img')(({theme})=>({
    background:'white',
    width:'100px',
    height:'100px',
    borderRadius:'50%',
    padding:5,
    transform:'translate(95px,45px)'
}))

function ProfileCard() {
  return (
    <>
    <MediaQuery minWidth={1224}>
    <Card>
        <UpperContainer>
            <Image src={Image1}></Image>
        </UpperContainer>
        <LowerContainer>
            <Name>
                <Typography fontWeight="bold" >
                John Doe
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Product Design 
                </Typography>
                <Table >
                    <TableRow >
                        <TableCell sx={{textAlign:'center'}}>    
                        <Typography fontWeight="bold" >
                            1,269
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Products 
                        </Typography>
                        </TableCell>
                        <TableCell sx={{textAlign:'center'}}>
                        <Typography fontWeight="bold" >
                            5.2k
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Followers
                        </Typography>
                        </TableCell>
                    </TableRow>
                </Table>
            </Name>
                <Typography fontWeight="bold" sx={{textAlign:'left'}}>
                    Recent Activity
                </Typography>
                <Table >
                    <TableRow >
                        <TableCell sx={{textAlign:'center'}}>    
                        <Typography fontWeight="bold" >
                            12
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sep 
                        </Typography>
                        </TableCell>
                        
                        <TableCell sx={{textAlign:'center'}}>
                        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                            Responded to need "Volunteer Activity"
                        </Typography>
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell sx={{textAlign:'center'}}>    
                        <Typography fontWeight="bold" >
                            11
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sep 
                        </Typography>
                        </TableCell>
                        <TableCell sx={{textAlign:'center'}}>
                        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                            Responded to need "Volunteer Activity"
                        </Typography>
                        </TableCell>
                    </TableRow>
                </Table>
        </LowerContainer>
    </Card>
    </MediaQuery>

    <MediaQuery maxWidth={1200}>
    <Card xs={{justifyContent:'left'}}>
        <UpperContainer >
            <Image src={Image1}></Image>
        </UpperContainer>
        <LowerContainer>
            <Name>
                <Typography fontWeight="bold" >
                John Doe
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Product Design 
                </Typography>
                <Table >
                    <TableRow >
                        <TableCell sx={{textAlign:'center'}}>    
                        <Typography fontWeight="bold" >
                            1,269
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Products 
                        </Typography>
                        </TableCell>
                        <TableCell sx={{textAlign:'center'}}>
                        <Typography fontWeight="bold" >
                            5.2k
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Followers
                        </Typography>
                        </TableCell>
                    </TableRow>
                </Table>
            </Name>
                
        </LowerContainer>
        </Card>
    </MediaQuery>

    </>

  )
}

export default ProfileCard