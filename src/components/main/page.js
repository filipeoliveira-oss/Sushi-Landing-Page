import './Main.css'
import Image from 'next/image'
import bgi from '../../assets/images/bgcMain.jpg'
export default function Main(){
    return(
        <div className="MainContainer" >
            <Image alt='background' src={bgi} className='bgi'/>
        </div>
    )
}