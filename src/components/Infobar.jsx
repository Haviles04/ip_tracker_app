import React from 'react'
import Info from './Info'

const Infobar = ({info}) => {
  
  return (
    <div className='w-[1110px] h-[160px] mt-[-80px] bg-white rounded-xl flex items-center z-10 '>
        <div className='w-full h-[80px] grid grid-cols-4 divide-x divide-black'  >
            <div className='flex item-center pl-10'> <Info title={'IP ADDRESS'} info={ info && (info.ip)} /> </div>
            <div className='flex item-center pl-10'> <Info title={'LOCATION'} info={info && (`${info.location.region}, ${info.location.city}`) } /></div>
            <div className='flex item-center pl-10'> <Info title={'TIMEZONE'} info={info && (`UTC ${info.location.timezone}`)} /></div>
            <div className='flex item-center pl-10'> <Info title={'ISP'} info={info && (info.isp)} /> </div>
        </div>
    </div>
  )
}

export default Infobar
