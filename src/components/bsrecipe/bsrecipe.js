'use client'
import { useInView, animated as a } from '@react-spring/web'
import Image from 'next/image'
import './bsrecipe.css'
import ArrowRightSVG from '@/assets/svg/arrowRight'

export default function Bsrecipe({image, position, name}){
    const [ref, inView] = useInView({
        once:true
    })

    return(
        <div className={`bsrecipeContainer ${position} ${inView ? 'appearRecipe' : ''}`} ref={ref}>
            <div className='bsrecipeImageContainer'>
                <Image src={image} className='bsrecipeImage' alt='Recipe Image'/>
            </div>

            <div className='bsrecipeNameContainer'>
                <h3 className='bsrecipeName'>{name}</h3>
                <button className='bsrecipeOrder'>
                    <span>Order</span>
                    <ArrowRightSVG className='bsrecipeOrderArrow'/>    
                </button>
            </div>
        </div>
    )
}