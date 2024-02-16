import React from 'react'
import BlogCard from './BlogCard'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Blogs = () => {
  return (
    <div className='blog-section bg-gradient-to-br  from-slate-300 via-neutral-300 to-[#fefedf]'>
      <div className='ps-8 pt-6'>
        <h1 className='text-4xl text-orange-400 font-bold'>
          Blogs For <span className='text-purple-600'>You</span>
        </h1>
      </div>

      <BlogCard />

      <Stack spacing={2} className='flex justify-center items-center w-full h-full pb-7'>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
    </div>
  )
}

export default Blogs