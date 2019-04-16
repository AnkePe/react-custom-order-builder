import React from 'react'
import ingredientsData from './ingredientsData'
import IngredItem from './IngredItem'

function CreatePizza(props) {
    const sauce = ingredientsData.filter(ingred => ingred.category === "sauce")
    const meatFish = ingredientsData.filter(ingred => ingred.category === "meat/fish")
    const vegetables = ingredientsData.filter(ingred => ingred.category === "vegetables")
    const cheese = ingredientsData.filter(ingred => ingred.category === "cheese")
    // console.log(sauce)
    const sauceIngred = sauce.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange}/>)
    const meatFishIngred = meatFish.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange}/>)
    const vegetablesIngred = vegetables.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange}/>)
    const cheeseIngred = cheese.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange}/>)


    return (
        <div>
            <input type="radio" name="size" value="small" checked={props.size === "small"} onChange={props.handleSize}/>Small
            <input type="radio" name="size" value="medium" checked={props.size === "medium"} onChange={props.handleSize}/>Medium
            <input type="radio" name="size" value="large" checked={props.size === "large"} onChange={props.handleSize}/>Large
            <h2 className="category">Sauce</h2>
            <p>{sauceIngred}</p>
            <h2>Meat/Fish</h2>
            <p>{meatFishIngred}</p>
            <h2>Vegetables</h2>
            <p>{vegetablesIngred}</p>
            <h2>Cheese</h2>
            <p>{cheeseIngred}</p>
        </div>
    )
}

// handleChange = (id) => {
//     this.setState(prevState => {
//         const updatedIngredients = prevState.ingredients.map(ingredient => {
//             if (ingredient.id === id) {
//                 ingredient.chosen = !ingredient.chosen
//             }
//             return ingredient         
//         })
//         return {
//             ingredients: updatedIngredients
//         }
//     })
// }


    // const sauceIngred = sauce.map(item => <IngredItem key={item.id} item={item} handleChange={this.handleChange}/>)
    // return(
    //     <div>
    //         <p>lijst sauce ingredienten</p>
    //         <div className="ingred-list">
    //            {sauceIngred}
               
    //      </div>
    //     </div>
    // )


export default CreatePizza
