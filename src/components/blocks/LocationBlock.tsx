import { Block } from "../Block"
import Map, {Marker} from "react-map-gl/mapbox"
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react"



export const LocationBlock = () => {

    const [viewState, setViewState] = useState({
        longitude: -114.1618,
        latitude: 51.0867,
        zoom: 10,
    })




    return(
        <Block className="hidden flex-col items-center gap-4 md:col-span-4 md:flex  p-0 overflow-hidden">
            <div className="h-full w-full m-0" >


                <Map
                    {...viewState}
                    onMove={evt=> setViewState(evt.viewState)}
                    style={{width: '100%', height: '100%'}}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                >

                <Marker longitude={-114.1618} latitude={ 51.0867} anchor="center">
                <div className="relative w-6 h-6 group">
                <div className="absolute w-full h-full bg-[#0d1117] opacity-75 rounded-full animate-ping"></div>
                <div className="absolute w-3 h-3 bg-[#0d1117] rounded-full top-1.5 left-1.5"></div>
           

                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 whitespace-nowrap">
                    <h1 className="w-full font-poppins">Based in Calgary, Canada 🇨🇦</h1>
                </div> 
                </div>
                </Marker>
                </Map>



            </div>

        </Block>
    )
}