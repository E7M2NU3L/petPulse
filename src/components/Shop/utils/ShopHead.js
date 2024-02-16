import React from 'react'
import './main.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Food1 from '../../../assets/images/food1.jpg'
import Food2 from '../../../assets/images/food6.png';
import Food3 from '../../../assets/images/food14.webp';
import Food4 from '../../../assets/images/food8.jpg';
import Food5 from '../../../assets/images/food9.webp';
import Food6 from '../../../assets/images/food10.webp';
import Food7 from '../../../assets/images/food10.jpg';
import Food8 from '../../../assets/images/food11.jpg';
import Food9 from '../../../assets/images/food12.webp';
import Food10 from '../../../assets/images/food13.jpg';


const ShopHead = () => {

  const petFoodNames = [
    "Pawsome Feast",
    "Meow Mix Delight",
    "Yummy Tummy Crunch",
    "Happy Hound Blend",
    "Feline Fancy Bites",
    "Woofy Wellness Nuggets",
    "Purrfect Portions",
    "Bark Bistro Buffet",
    "Whisker Whirl Delights",
    "Tail Waggin' Treats",
  ];
  
  const petFoodPrices = [
    20.99,
    15.49,
    18.79,
    22.99,
    24.99,
    19.99,
    12.99,
    28.49,
    23.99,
    9.99
  ];  


  const petFoodDescriptions = [
    "A delectable blend of meats and vegetables, providing your pet with a balanced and nutritious meal.",
    "Irresistible cat food with a mix of flavors and textures that will leave your feline friend purring for more.",
    "Crunchy and flavorful dog food that promotes dental health and satisfies your pup's cravings.",
    "A wholesome blend of grains, proteins, and vitamins tailored to keep your dog healthy and energetic.",
    "Gourmet cat food with tender bites and rich flavors, perfect for pampering your sophisticated feline.",
    "Nutrient-packed dog food nuggets designed to support your dog's overall health and well-being.",
    "Convenient and portion-controlled cat food servings that ensure freshness and satisfaction with every meal.",
    "A premium selection of dog food inspired by culinary delights, offering your canine companion a taste of luxury.",
    "Wholesome cat food with a delightful blend of proteins and antioxidants to keep your cat happy and healthy.",
    "Delicious and nutritious dog treats that make training sessions fun and rewarding for your furry friend."
  ];

  const images = [
    Food1,
    Food2,
    Food3,
    Food4,
    Food5,
    Food6,
    Food7,
    Food8,
    Food9,
    Food10,
  ]
  
  return (
    <div className='shop section bg-gradient-to-br from-[#fefedf] to-[#BFBAB0]'>
      <main className='more'>
        <div className='flex justify-between items-center w-full pt-8'>
        <h1 className='text-4xl ml-3 font-["Poppins", sansiserif], font-italic font-semibold text-orange-400 hover:font-bold hover:shadow-sm mb-6'>
          More From us
        </h1>
        </div>
        

        <div className='image-holder'>      
        <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[0]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[5]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[5]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[5]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[5]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[2]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[2]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[2]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[2]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[2]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[2]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[2]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[2]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[3]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[3]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[3]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[3]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[4]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[4]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[4]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[4]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
        </div>

        <div className='flex w-full justify-center items-center'>
        <button className='more-btn text-sm text-gray-600 hover:text-green-600 mt-8'>
          <a href='/' className='link border border-zinc-700 rounded-lg px-2 py-1 hover:bg-gradient-to-r from-[#fefedf] via-yellow-100 font-boldto-amber-100'>Know more!</a>
        </button>
        </div>
      </main>
      <main className='you-may-like'>
      <div className='flex justify-between items-center w-full pt-8'>
        <h1 className='text-4xl ml-3 font-["Poppins", sansiserif], font-italic font-semibold text-orange-400 hover:font-bold hover:shadow-sm'>
          you May Also Like
        </h1>
        </div>

        <div className='image-holder mt-6'>
        <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[7]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[7]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[7]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[7]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[8]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[8]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[8]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[8]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[5]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[5]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[5]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[5]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[4]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[4]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[4]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[4]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[2]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[2]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[2]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[2]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: 6, boxShadow: 2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images[6]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petFoodNames[6]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petFoodDescriptions[6]}
        </Typography>
        <Typography variant="body1" color="text.secondary" paddingTop="8px" sx={{
          color: "purple",
          fontWeight: 700
        }} >
          $ {petFoodPrices[6]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" color='secondary'>Buy Now</Button>
      </CardActions>
    </Card>
        </div>
      </main>

      <div className='flex w-full justify-center items-center pb-8'>
        <button className='more-btn text-sm text-gray-600 hover:text-green-600 mt-8 font-bold'>
          <a href='/' className='link border border-zinc-700 rounded-lg px-2 py-1 hover:bg-gradient-to-r from-[#fefedf] via-yellow-100 to-amber-100'>Know more!</a>
        </button>
        </div>
    </div>
  )
}

export default ShopHead;