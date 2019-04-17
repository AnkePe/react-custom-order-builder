import React from 'react'
import ingredientsData from './ingredientsData'
import IngredItem from './IngredItem'
import CreatePizza from './CreatePizza'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: [...ingredientsData],
            size: 1,
            pizzaObj: {
                pizzaIngr: [],
                pizzaPrice: ""
            },
            allPizzasArray: []

        }
    }

    //functies

    getPizzaIngr = () => {        
        const pizza = this.state.ingredients.filter(ingred => ingred.chosen === true)       
        return pizza
    }

    getPizzaPrice = () => {
        const pizza = this.getPizzaIngr()
        const pizzaPrice = pizza.map(ingred => ingred.price * this.state.size).reduce((acc, cur) => acc + cur, 0).toFixed(2)
        return pizzaPrice
    }

    //eventHandlers
    handleSize = (event) => {
        if (event.target.value === "small") {
            console.log("small aangeklikt")
            this.setState({size : 0.8})
            console.log(this.state.size)

        }
        else if (event.target.value === "medium") {
            console.log("medium aangeklikt")
            this.setState({size : 1})
            console.log(this.state.size)
        }
        else if (event.target.value === "large") {
            console.log("large aangeklikt")
            this.setState({size : 1.2})
            console.log(this.state.size)
        }
                  
        }
    
    

    handleChange = (id) => {
        this.setState(prevState => {
            const chosenIngredients = prevState.ingredients.map(ingredient => {
                if (ingredient.id === id) {
                    ingredient.chosen = !ingredient.chosen
                }
                return ingredient         
            })
            return {
                ingredients: chosenIngredients
            }
        })
    }

    handleClickOrder = () => {
        // console.log("Ordered")
        const pizza = this.getPizzaIngr()
        const pizzaAmount = this.getPizzaPrice()
        this.setState(prevState => {
                return {
                pizzaObj: { ...prevState.pizzaObj, pizzaIngr: pizza, pizzaPrice: pizzaAmount}       
                }                
            },
            // callback functie zodat state al gewijzigd is
            () => {
                this.setState({allPizzasArray: this.state.allPizzasArray.concat(this.state.pizzaObj)})
            }
        )
        // werkt niet???
        // this.setState({ingredients: ingredientsData})

        //opgepast: deze console.log geeft de vorige staat weer (asynchroon) !!!!
        //als je de juiste staat wil kennen, consol.loggen in de render() hieronder
        // console.log(this.state.allPizzasArray)
    }

   
    handleClickDelete = () => {
        console.log("Delete")
    }


    //render
    render() {
        console.log('deze pizza', this.state.pizzaObj)
        console.log('alle pizzas', this.state.allPizzasArray)
        console.log("in render", this.state.ingredients)
        console.log("oorspronkelijke array", ingredientsData)
        // const ingredItems = this.state.ingredients.map(item => <IngredItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
           
            <div>
                 
                <p>lijst ingredienten</p>
                <div className="ingred-list">
                   {/* {ingredItems} */}
                   <CreatePizza
                        ingredients={this.state.ingredients}
                        size={this.state.size}
                        getPizzaIngr={this.getPizzaIngr}
                        getPizzaPrice={this.getPizzaPrice}
                        handleChange={this.handleChange}
                        handleSize={this.handleSize} 
                        handleClickDelete={this.handleClickDelete}
                        handleClickOrder={this.handleClickOrder}/>
             </div>
            </div>
        )

    }       
    
}


export default App