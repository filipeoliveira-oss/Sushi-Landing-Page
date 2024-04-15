import './Spinner.css'
import p1 from '../../assets/images/prato1.jpg'
import p2 from '../../assets/images/prato2.png'
import p3 from '../../assets/images/prato3.png'
import p4 from '../../assets/images/prato4.png'


import Image from 'next/image'
export default function Spinner(){
    return(
        <div className="SpinnerContainer">
            <Image src={p1} id='um' className='SpinnerPhoto' alt='Spinner image - sushi'/>
            <Image src={p2} id='dois' className='SpinnerPhoto' alt='Spinner image - sushi'/>
            <Image src={p3} id='tres' className='SpinnerPhoto' alt='Spinner image - sushi'/>
            <Image src={p4} id='quatro' className='SpinnerPhoto' alt='Spinner image - sushi'/>
        </div>
    )
}