'use client'
import SearchSVG from '@/assets/svg/SearchSvg'
import './Header.css'
import { useEffect } from 'react'

export default function Header(){

    function distance(){
        var header = document.getElementById('header')
        if(window.scrollY > 0){
            header.classList.add('offset')
        }else{
            header.classList.remove('offset')
        }
    }

    useEffect(() =>{
        document.addEventListener('scroll', () => distance())
    },[])

    return(
        <div className="HeaderContainer" id='header'>
            <div className='HeaderTitle' onClick={() => window.scrollTo({
                top:0,
                behavior:'smooth'
                })}><h1>SUSHI</h1></div>
            <div className='HeaderActions'>
                <ul className='HeaderUl'>
                    <li className='HeaderLi' href='#'>Menu</li>
                    <li className='HeaderLi' onClick={() => window.scrollTo({
                    top: document.getElementById('bestseller').offsetTop - 60,
                    behavior: 'smooth',
                    })}>Best Sellers</li>

                    <li className='HeaderLi' onClick={() => window.scrollTo({
                        top:9000000,
                        behavior:'smooth'
                    })}>
                        Contact us
                    </li>
                    <li className='HeaderLi'><SearchSVG/></li>
                </ul>
            </div>
        </div>
    )
}