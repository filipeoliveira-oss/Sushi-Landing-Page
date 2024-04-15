import Restaurant from '../restaurant/restaurant'
import './VisitUs.css'
import rs1 from '../../assets/images/rs1.jpg'
import rs2 from '../../assets/images/rs2.jpg'
import rs3 from '../../assets/images/rs3.jpg'
export default function VisitUs(){
    return(
        <div className='VisitUsContainer'>
            <h1>Come Visit Us</h1>
            <div className="VisitUsRestaurantContainer">
                <Restaurant image={rs1} className='VisitRestaurant' name='New York City' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac venenatis elit. Morbi pharetra consequat.'/>
                <Restaurant image={rs2} className='VisitRestaurant' name='California, LA' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac venenatis elit. Morbi pharetra consequat.'/>
                <Restaurant image={rs3} className='VisitRestaurant' name='Tokyo, Japan' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac venenatis elit. Morbi pharetra consequat.'/>
            </div>
        </div>
    )
}


