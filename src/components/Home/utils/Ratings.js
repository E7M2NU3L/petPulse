import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Ratings = () => {
  return (
    <div className='bg-gradient-to-tr from-slate-200 via-violet-200 to-purple-200 py-2'>
      <h1 style={{
        fontFamily: "Poppins, sans-serif"
      }} className='text-4xl font-bold text-center text-orange-600 py-7'>
        Testi<span className='text-purple-500'>monials</span>
      </h1>

      <section className='flex flex-row flex-wrap justify-around gap-4 items-center w-full h-full py-3'>
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Sarah Johnson
        </Typography>
        <Typography variant="h5" component="div">
        February 15, 2024
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        10:30 AM
        </Typography>
        <Typography variant="body2">
        I've been a customer of PetPulse for over a year now, and I couldn't be happier with their service. The quality of their pet food is unmatched, and my furry friend absolutely loves it! Plus, their customer support team is always friendly and helpful.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={4} readOnly />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Sarah Johnson
        </Typography>
        <Typography variant="h5" component="div">
        February 15, 2024
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        10:30 AM
        </Typography>
        <Typography variant="body2">
        I've been a customer of PetPulse for over a year now, and I couldn't be happier with their service. The quality of their pet food is unmatched, and my furry friend absolutely loves it! Plus, their customer support team is always friendly and helpful.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={4} readOnly />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Sarah Johnson
        </Typography>
        <Typography variant="h5" component="div">
        February 15, 2024
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        10:30 AM
        </Typography>
        <Typography variant="body2">
        I've been a customer of PetPulse for over a year now, and I couldn't be happier with their service. The quality of their pet food is unmatched, and my furry friend absolutely loves it! Plus, their customer support team is always friendly and helpful.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={4} readOnly />
      </CardActions>
    </Card>
      </section>

    </div>
  )
}

export default Ratings