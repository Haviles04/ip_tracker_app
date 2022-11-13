import React from 'react'

const Info = ({info, title}) => {
  return (
    <div className='m-4 md:m-0'>
        <p className='flex justify-center md:pl-5 md:pr-5 md:justify-start text-sm  text-slate-400'>{title}</p>
        <p className='flex justify-center md:pl-5 md:pr-10 md:justify-start text-lg  md:text-2xl font-medium'>{info}</p>
    </div>
  )
}

export default Info