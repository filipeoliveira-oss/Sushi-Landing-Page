
import Spinner from '../spinner/page'
import './Special.css'
export default function Special(){

    return(
        <div className="SpecialContainer">
            <h1 className='SpecialTitle'>Let's Try Our Specials Sushi</h1>
            <div className='SpecialRecipeContainer'>
                <h3 className='SpecialRecipeTitle'>Salmon Sashimi and Nigiri Roll</h3>
                <ul aria-label="Ingredients:" className='SpecialRecipeUl'>
                    <li className='SpecialRecipeLi'>Sushi Rice (prepared and seasoned)</li>
                    <li className='SpecialRecipeLi'>Fresh salmon fillet, sushi-grade</li>
                    <li className='SpecialRecipeLi'>Spicy mayo (mayonnaise mixed with Sriracha sauce)</li>
                    <li className='SpecialRecipeLi'>Soy sauce for dipping</li>
                    <li className='SpecialRecipeLi'>Thinly sliced green onions for garnish</li>
                    <li className='SpecialRecipeLi'>Sesame seeds for garnish</li>
                    <li className='SpecialRecipeLi'>Wasabi (optional)</li>
                    <li className='SpecialRecipeLi'>Pickled ginger for serving</li>
                </ul>
            </div>

           <div className='SpecialSpinner'>
                <Spinner/>
           </div>
        </div>
    )
}
