import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Table, TableCell, TableRow } from '@mui/material';
import image from '../images/Capture.JPG'
import MediaQuery from 'react-responsive'

export default function MediaCard() {
  return (
    <>
    <MediaQuery minWidth={1224}>
    <Card sx={{ maxHeight: 500, maxWidth:800 , display:'flex' }}>
      <CardContent>
        <Typography fontWeight="bold" >
           Overview
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           This Month 
        </Typography>
        <Typography variant="h6" fontWeight="bold" >
           $24,568
        </Typography>


        <Table sx={{maxWidth: 200,display:'block'}}>
            <TableRow>
            <TableCell>    
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Orders 
            </Typography>
            <Typography fontWeight="bold" >
                5,643
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Sales
            </Typography>
            <Typography fontWeight="bold" >
                16,273
            </Typography>
            </TableCell>
            </TableRow>

            <TableRow sx={{mr:8}}>
            <TableCell >

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Order Value 
            </Typography>
            <Typography fontWeight="bold" >
                12.03%
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Customer 
            </Typography>
            <Typography fontWeight="bold" >
                21,456
            </Typography>
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Income 
            </Typography>
            <Typography fontWeight="bold" >
                $35,652
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Expenses 
            </Typography>
            <Typography fontWeight="bold" >
                $12,248
            </Typography>
                </TableCell>
            </TableRow>


        
        </Table>
      </CardContent>
      <CardMedia
        component="img"
        height="270"
        image={image}
        alt="graph"
      />
      
    </Card>
    </MediaQuery>

    <MediaQuery maxWidth={1200}>
    <Card sx={{ maxHeight: '50%', maxWidth:'70%' , display:'block' }}>
      <CardContent>
        <Typography fontWeight="bold" >
           Overview
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           This Month 
        </Typography>
        <Typography variant="h6" fontWeight="bold" >
           $24,568
        </Typography>


        <Table sx={{maxWidth: 200,display:'block'}}>
            <TableRow>
            <TableCell>    
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Orders 
            </Typography>
            <Typography fontWeight="bold" >
                5,643
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Sales
            </Typography>
            <Typography fontWeight="bold" >
                16,273
            </Typography>
            </TableCell>
            </TableRow>

            <TableRow sx={{mr:8}}>
            <TableCell >

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Order Value 
            </Typography>
            <Typography fontWeight="bold" >
                12.03%
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Customer 
            </Typography>
            <Typography fontWeight="bold" >
                21,456
            </Typography>
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Income 
            </Typography>
            <Typography fontWeight="bold" >
                $35,652
            </Typography>
            </TableCell>
            <TableCell>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Expenses 
            </Typography>
            <Typography fontWeight="bold" >
                $12,248
            </Typography>
                </TableCell>
            </TableRow>


        
        </Table>
      </CardContent>
      
      
    </Card>
    </MediaQuery>
    
    </>
  );
}
