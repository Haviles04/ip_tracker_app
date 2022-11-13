import React from 'react'
import Info from './Info'


const Infobar = ({info}) => {


  
  return (
    <div className='w-[327px] h-[295px] mt-[-135px] md:w-[1110px] md:h-[160px] md:mt-[-80px] bg-white rounded-xl z-10  flex items-center '>
        <div className='w-full md:grid md:grid-cols-4 md:auto-cols-max md:divide-x divide-black'>
            <Info title={'IP ADDRESS'} info={ info ? (info.ip) : " " } /> 
            <Info title={'LOCATION'} info={info ? (`${info.location.region}, ${info.location.city}`): " "} />
            <Info title={'TIMEZONE'} info={info ? (`UTC ${info.location.timezone}`): " "} />
            <Info title={'ISP'} info={info ? (info.isp) : " "} />
        </div>
    </div>
  )
}

export default Infobar
