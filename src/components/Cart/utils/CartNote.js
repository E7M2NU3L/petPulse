import React from 'react'
import './main.css';

import { Button, Card, CardActions, Typography, CardContent } from '@mui/material';

const CartNote = () => {
  return (
    <div className='flex flex-row note bg-gradient-to-br from-green-200 via-green-400 to-emerald-300 justify-around gap-8' id='card-note'>
      <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trusted Products
        </Typography>
        <Typography variant="body2" color="text.secondary">
          24/7 Customer care and support Services
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          Pharmacy and Food Products
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Home</Button>
        <Button size="small" color='secondary'>Shop</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trusted Products
        </Typography>
        <Typography variant="body2" color="text.secondary">
          24/7 Customer care and support Services
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          Pharmacy and Food Products
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Home</Button>
        <Button size="small" color='secondary'>Shop</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trusted Products
        </Typography>
        <Typography variant="body2" color="text.secondary">
          24/7 Customer care and support Services
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          Pharmacy and Food Products
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Home</Button>
        <Button size="small" color='secondary'>Shop</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CartNote