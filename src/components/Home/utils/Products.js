import React from 'react'
import './main.css'
import Video from '../../../assets/videos/sales_video.mp4'
import Product1 from '../../../assets/images/brand10.webp'
import Product2 from '../../../assets/images/brand.webp'
import Product3 from '../../../assets/images/brand2.webp'
import Product4 from '../../../assets/images/brand3.webp'
import Product5 from '../../../assets/images/brand4.webp'
import Product6 from '../../../assets/images/brand5.webp'
import Product7 from '../../../assets/images/brand6.webp'
import Product8 from '../../../assets/images/brand7.webp'
import Offer1 from '../../../assets/images/offer_1.webp'
import Offer2 from '../../../assets/images/offer_2.webp'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import backgroundImage from '../../../assets/images/bg.jpg'; // Adjust the path as needed


const Products = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className='products-section' style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }}>
      <div className='video-section'>
        <video autoplay loop muted plays-inline className='bg-clip'>
          <source src={Video} type='video/mp4' />
        </video>
      </div>

      <main className='title-prod' style={{
        paddingBottom: "1.2rem"
      }}>
        <h1 className='text-4xl text-center font-bold mt-8 mb-6 text-[#fefedf]'>
          Why Choose <span className='text-orange-600'>Pet <span className='text-orange-500'>Pulse</span></span>
        </h1>
      </main>

      <div className='images-full'>
          <img src={Offer1} alt='' />
        </div>

      <section className='flex flex-col gap-3 w-full items-center h-full justify-around'>

      <div className='accord'>
        <div className='inner-acc'>
        <Accordion className='bg-gradient-to-tr from-slate-200 via-zinc-200 to-neutral-200' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} color="primary" variant='h6'>
            Nutritional Benefits
          </Typography>
          <Typography color="secondary" >Discover the nutritional benefits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="error">
          Carefully crafted to provide your furry friend with essential nutrients for optimal health and vitality. From high-quality proteins to wholesome grains and vitamins, our recipes are formulated to support your pet's overall well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gradient-to-tr from-slate-200 via-zinc-200 to-neutral-200'  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} color="primary" variant='h6'>Quality Ingredients</Typography>
          <Typography color="secondary">
          Learn about the quality ingredients
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="error">
          We source only the finest ingredients, including real meat, fresh vegetables, and natural flavors, to ensure that your pet receives a delicious and nutritious meal every time
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gradient-to-tr from-slate-200 via-zinc-200 to-neutral-200' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} color="primary" variant='h6'>
          Feeding Guidelines
          </Typography>
          <Typography color="secondary">
          Understand the feeding guidelines
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="error">
          Ensure that your pet receives the right amount of nutrition. Our guidelines are designed to help you maintain your pet's ideal weight and promote healthy eating habits. Consult our recommendations for feeding schedules and portion sizes tailored to your pet's age, size, and activity level
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-gradient-to-tr from-slate-200 via-zinc-200 to-neutral-200' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} color="primary" variant='h6'>Health Benefits</Typography>

          <Typography color="secondary">
            Explore the health benefits
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="error">
          Discover how our pet food contributes to your pet's overall health and well-being. From supporting a shiny coat to promoting healthy digestion, our products are designed to keep your pet happy and thriving.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>

    </div>
      </section>
          
      <div className='images-full'>
          <img src={Offer2} alt='' className='second' />
        </div>
    </div>
  )
}

export default Products