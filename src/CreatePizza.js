import React from 'react'
import ingredientsData from './ingredientsData'
import IngredItem from './IngredItem'

function CreatePizza(props) {
    const sauce = ingredientsData.filter(ingred => ingred.category === "sauce")
    const meatFish = ingredientsData.filter(ingred => ingred.category === "meat/fish")
    const vegetables = ingredientsData.filter(ingred => ingred.category === "vegetables")
    const cheese = ingredientsData.filter(ingred => ingred.category === "cheese")

    const pizza = props.ingredients.filter(ingred => ingred.chosen === true)
    console.log(pizza)
       
    const sauceIngred = sauce.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange} size={props.size}/>)
    const meatFishIngred = meatFish.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange} size={props.size}/>)
    const vegetablesIngred = vegetables.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange} size={props.size}/>)
    const cheeseIngred = cheese.map(item => <IngredItem key={item.id} item={item} handleChange={props.handleChange} size={props.size}/>)
    //ingredients and price of chosen pizza
    const pizzaIngred = pizza.map(ingred => <div>{ingred.name}</div>)    
    const pizzaPrice = pizza.map(ingred => ingred.price * props.size).reduce((acc, cur) => acc + cur, 0).toFixed(2)



    return (
        <div>
            <input type="radio" name="size" value="small" checked={props.size === 0.8} onChange={props.handleSize}/>Small
            <input type="radio" name="size" value="medium" checked={props.size === 1} onChange={props.handleSize}/>Medium
            <input type="radio" name="size" value="large" checked={props.size === 1.2} onChange={props.handleSize}/>Large
            <h2 className="category">Sauce</h2>
            <p>{sauceIngred}</p>
            <h2>Meat/Fish</h2>
            <p>{meatFishIngred}</p>
            <h2>Vegetables</h2>
            <p>{vegetablesIngred}</p>
            <h2>Cheese</h2>
            <p>{cheeseIngred}</p>
            <div className="pizzaDetail">
                {pizzaIngred}
            </div>
            <h1>Totaal: {pizzaPrice}</h1>
            <button onClick={props.handleClickOrder}>Order</button>
            <button onClick={props.handleClickDelete}>Delete</button>
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
