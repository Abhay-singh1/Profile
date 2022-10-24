import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PieChartIcon from '@mui/icons-material/PieChart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleIcon from '@mui/icons-material/People';


export default function Cards () {
  return (
      <Box sx={{display:'inline-flex', flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 250,
        height: 100
      }}}>  
        <Card sx={{ transform: 'scale(0.8)'}} >
          <CardContent sx={{display:'flex'}}>
            <PieChartIcon color='primary' fontSize='large'  />
            <div sx={{display:'block'}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Revenue
              </Typography>
              
              <Typography variant="h6" fontWeight="bold" >
                $21,456
              </Typography>
              </div>  
            </CardContent>
          
      </Card>
      <Card sx={{transform: 'scale(0.8)'}} >
        <CardContent sx={{display:'flex'}}>
          <Inventory2Icon color='primary' fontSize='large'  />
            <div sx={{display:'block'}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Orders
              </Typography>
              
              <Typography variant="h6" fontWeight="bold" >
                5,643
              </Typography>
              </div>  
          </CardContent>
      </Card>  
      <Card sx={{transform: 'scale(0.8)'}} >
        <CardContent sx={{display:'flex'}}>
          <PeopleIcon color='primary' fontSize='large'  />
            <div sx={{display:'block'}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Customers
              </Typography>
              
              <Typography variant="h6" fontWeight="bold" >
                45,254
              </Typography>
              </div>  
          </CardContent>
      </Card>  
    </Box>  
  )
}
