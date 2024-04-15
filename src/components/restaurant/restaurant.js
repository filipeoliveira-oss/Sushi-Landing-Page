'use client'
import './Restaurant.css'

export default function Restaurant({image,name, description}){
    

    return(
        <div className="RestaurantContainer" style={{backgroundImage: `url(${image.src})`}}>
            <div className='RestaurantInfoContainer'>
                <h1 className='RestaurantTitle'>{name}</h1>
                <span className='RestaurantAddress'>{description}</span>
            </div>
        </div>
    )
}