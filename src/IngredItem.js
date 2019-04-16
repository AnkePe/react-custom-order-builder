import React from 'react'

function IngredItem(props) {
    return(
       <div className="ingred-item">
            <p>{props.item.name} {props.item.price}</p>

            <input
                type="checkbox"
                checked={props.item.chosen}
                onChange={() => props.handleChange(props.item.id)}
            />
                   
       </div>
    )
}

export default IngredItem