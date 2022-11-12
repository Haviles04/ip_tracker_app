import {useEffect} from 'react'
import {useMap } from 'react-leaflet';

const Updatemap = ({info}) => {
    
    const map = useMap();

    useEffect( () => {
        if(info){
      map.setView([info.location.lat, info.location.lng])}
    }, [info, map])
    

    return null
}

export default Updatemap