import Image from 'next/image'
import './bestsellers.css'
import salmon from '../../assets/images/salmon.webp'
import Bsrecipe from '../bsrecipe/bsrecipe'
import bs1 from '../../assets/images/bs1.jpeg'
import bs2 from '../../assets/images/bs2.jpg'
import bs3 from '../../assets/images/bs3.webp'
import bs4 from '../../assets/images/bs4.webp'
import bs5 from '../../assets/images/bs5.jpg'
export default function Bestsellers(){
    return(
        <div className="BestsellersContainer" id='bestseller'>
            <div className='BSTitleContainer'>
                <h1 className='BSTitle'>Best Sellers</h1>
                <Image src={salmon} className='BSTitleImage' alt='Best seller image - salmon'/>
            </div>

            <div className='BSRecipesContainer'>
                <Bsrecipe image={bs1} position={'left'} name='Tokyo Rice Ball'/>
                <Bsrecipe image={bs2} position={'right'} name='Veggie Sushi'/>
                <Bsrecipe image={bs3} position={'left'} name= 'Special Salmon Combo'/>
                <Bsrecipe image={bs4} position={'right'} name='38 Pieces combo'/>
                <Bsrecipe image={bs5} position={'left'} name='Sushi Rolls'/>
            </div>
        </div>
    )
}