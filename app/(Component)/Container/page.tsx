import React from 'react'

function Container({children}: {children: React.ReactNode}) {
  return (
    <div className='w-[80%] mx-auto h-full'>
        {children}
    </div>
  )
}

export default Container