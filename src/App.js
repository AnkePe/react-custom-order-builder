import React from 'react'
import ingredientsData from './ingredientsData'
import IngredItem from './IngredItem'
import CreatePizza from './CreatePizza'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: ingredientsData,
            size: ""
        }
    }

    //functies
    handleSize = (event) => {
        
       
        
        this.setState({
            size: event.target.value
        }, () => {
            console.log("callback", this.state.size)

            const priceCalc = (price) => {
                if (this.state.size === "small") {
                    return price * 0.8
                }
                if (this.state.size === "medium") {
                    return price
                }
                if (this.state.size === "large") {
                    return price * 1.2
                }
            }


            this.setState(() => {
            const pricedIngredients = ingredientsData.map(ingredient => {
                ingredient.price = priceCalc(ingredient.price)
                console.log(ingredient)
                return ingredient
            })
            return {
                ingredients: pricedIngredients
            }  
            })
                   

        }
                
        )
        
        
        }

        
        
        // this.setState(()=> {
           
            
        //     const pricedIngredients = ingredientsData.map(ingredient => {
        //         ingredient.price = priceCalc(ingredient.price)
        //         return ingredient
        //     })
        //     return {
        //         ingredients: pricedIngredients
        //     }

        // })
        
        
    

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


    //render
    render() {
        console.log(this.state.size)
        // const ingredItems = this.state.ingredients.map(item => <IngredItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
           
            <div>
                 
                <p>lijst ingredienten</p>
                <div className="ingred-list">
                   {/* {ingredItems} */}
                   <CreatePizza
                        size={this.state.size}
                        handleChange={this.handleChange}
                        handleSize={this.handleSize} />
             </div>
            </div>
        )

    }


    
    
        
    
}

// function App() {
//     const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
//     return (
//         <div>
//             {jokeComponents}            
//         </div>
//     )
// }

// render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     )    
// }

export default App