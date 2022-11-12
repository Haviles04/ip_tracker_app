import React from 'react'

const Info = ({info, title}) => {
  return (
    <div className='flex-col'>
        <p className='text-slate-400'>{title}</p>
        <p className='text-2xl font-medium'>{info}</p>
    </div>
  )
}

export default Info