import Link from 'next/link'
import React from 'react'

const HeaderComponent = () => {
  return (
    <header className='w-full px-3 text-center pt-5'>
      <Link href="/" className='text-4xl font-semibold'>Movie Web App</Link>
    </header>
  )
}

export {HeaderComponent}
