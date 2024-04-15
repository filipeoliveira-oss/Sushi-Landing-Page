import './Footer.css'

export default function Footer(){
    return(
        <div className="FooterContainer">
            <div className='FooterName'>
                <h1>Sushi</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas sagittis dui a euismod. Curabitur et dignissim arcu. Integer malesuada iaculis lorem, eget placerat nulla placerat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>

            <div className='teste'>
                <div className='FooterList'>
                    <ul className='FooterUl' aria-label="About Us">
                        <li className='FooterLi'>Home</li>
                        <li className='FooterLi'>Menu</li>
                        <li className='FooterLi'>Delivery</li>
                        <li className='FooterLi'>Payment</li>
                        <li className='FooterLi'>Help</li>
                    </ul>
                </div>

                <div className='FooterList'>
                    <ul className='FooterUl' aria-label="Contact Us">
                        <li className='FooterLi'>Facebook</li>
                        <li className='FooterLi'>Instagram</li>
                        <li className='FooterLi'>Twitter</li>
                        <li className='FooterLi'>Reddit</li>
                    </ul>
                </div>
            </div>
            
            
            <div className='FooterOpacity'></div>
        </div>
    )
}