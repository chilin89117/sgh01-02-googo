import React from 'react'
import FooterCountry from '@/components/FooterCountry'

const Footer = () => (
  <footer className='w-full absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2]'>
    <div className='py-3 px-5 text-center sm:text-left border-b border-gray-300'>
      <FooterCountry />
    </div>

    <div className='py-3 px-5 flex flex-col sm:flex-row justify-between items-center'>
      <ul className='flex items-center gap-5'>
        <li className='link'>About</li>
        <li className='link'>Advertising</li>
        <li className='link'>Business</li>
        <li className='link'>How Search Works</li>
      </ul>
      <ul className='flex items-center gap-5'>
        <li className='link'>Privacy</li>
        <li className='link'>Terms</li>
        <li className='link'>Settings</li>
      </ul>
    </div>
  </footer>
)

export default Footer
