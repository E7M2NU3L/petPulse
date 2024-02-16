import React from 'react'
import Typography from '@mui/material/Typography'
import './main.css';
import Brand1 from '../../../assets/images/brand.webp';
import Brand2 from '../../../assets/images/brand11.webp';
import Brand3 from '../../../assets/images/brand2.webp';
import Brand4 from '../../../assets/images/brand3.webp';
import Brand5 from '../../../assets/images/brand4.webp';
import Brand6 from '../../../assets/images/brand5.webp';
import Brand7 from '../../../assets/images/carousel_offer.webp';
import Brand8 from '../../../assets/images/carousel_offer4.webp';
import Brand9 from '../../../assets/images/carousel_offer2.webp';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4} className='paper'>
    <img src={Brand4} />
  </Paper>
);

const BuyPage = () => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className='bg-gradient-to-br from bg-amber-100 via-yellow-100 to-orange-100'>
      <div className='text-head mb-8'>
      <Typography variant="h4" color="secondary" sx={{
        fontWeight: "bold"
      }}>
        Fascinating Offers For You
      </Typography>
    </div>

    <main className='flex justify-around items-center gap-1 mb-7 scroller'>
    <Box sx={{ height: 300 }} className="relative">
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Open"
        className='justify-start absolute top
        4 -left-24'
      />
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 120,
            width: 250,
          },
        }}
      >
        <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </div>
        <div>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
    </main>

    <section className='w-full justify-around flex items-center relative flow-pack' style={{
      paddingBottom: "5rem",
      padding: "3rem 3rem"
    }}>
    <Stack direction="row" spacing={2} variant="section" className='stack' >
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Dog & Cat Pack
          </Typography>
          <Typography variant="subtitle1" color="secondary" component="div">
            Pongal Sale
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Brand7}
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Combo Pack
          </Typography>
          <Typography variant="subtitle1" color="secondary" component="div">
            Deepawali Sale
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Brand7}
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Combo Pack
          </Typography>
          <Typography variant="subtitle1" color="secondary" component="div">
            Deepawali Sale
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Brand7}
        alt="Live from space album cover"
      />
    </Card>
    </Stack>
    </section>
    </div>
  )
}

export default BuyPage