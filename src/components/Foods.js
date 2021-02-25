import React, { Component } from 'react'
// import FoodBox from './FoodBox';
import foods from './foods.json';


class Foods extends Component {
    
    state = {
        foods: []
    }
    
    
    render() {
        const {foods} = this.state
        return (
            <div>
                {
                    foods.map ((foodbox) => {
                    return <foodBox
                    name={foodbox.name}
                    image={foodbox.image}
                    calories={foodbox.calories}
                    />
                    })
                }
            </div>
        )
    }
}

export default Foods