'use client'
import './Coolvibes.css'
import Image from 'next/image'
import s1 from '../../assets/images/sushi1.png'
import s2 from '../../assets/images/sushi2.png'
import s3 from '../../assets/images/sushi3.png'
import s4 from '../../assets/images/sushi4.png'

export default function Coolvibes(){



    return(
        <div className="CoolvibesContainer">
            <div className='CVImg'>
                <Image src={s1} className='ImageCV' priority alt='Sushi'/>
                <Image src={s2} className='ImageCV' priority alt='Sushi'/>
                <Image src={s3} className='ImageCV' priority alt='Sushi'/>
                <Image src={s4} className='ImageCV' priority alt='Sushi'/>
            </div>

            <div className='CVText'>
                <h1>Cool vibes, Hot Rolls</h1>
                <h3>Elevate your sushi experience with us, a digital maestro orchestranting a harmonious fusion of Japanese culinary artistry and online innovation</h3>
            </div>
        </div>
    )
}