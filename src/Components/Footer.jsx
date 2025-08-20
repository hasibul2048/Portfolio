import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-around items-center'>
        <p className='text-small text-muted-foreground'>&copy; {new Date().getFullYear()} Hasibul Hasan. All rights reserved</p>
        <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp />
        </a>
    </footer>
  )
}

export default Footer