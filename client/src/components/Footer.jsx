import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.logo} alt="imagify logo" width={150}/>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. Copyright @imagify</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="facebook icon" width={35}/>
        <img src={assets.instagram_icon} alt="instagram icon" width={35}/>
        <img src={assets.twitter_icon} alt="twitter icon" width={35}/>
      </div>
    </div>
  )
}
