import React, { Component } from 'react';
import classes from './NewRecipe.css';
import { Redirect } from 'react-router-dom';
import { variables } from '../NaiveBaker/NaiveBaker';
import axios from 'axios';

class NewRecipe extends Component {
    state = {
        title: '',
        ingredient: '',
        category:'VEG',
        mealType:'BREAKFAST',
        cookingTime:60,
        calories:0.0,
        imageLink:'',
        cuisine:'',
        description:'',
        procedure:'',
        userid:variables.userID
    }

    postDataHandler = () => {
        axios.post('/newrecipe',this.state);
    }

    render () {

        return (
            <fragment>
            <link href='https://fonts.googleapis.com/css?family=Concert One' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Dancing Script' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Fira Sans' rel='stylesheet'></link>
            <div className={classes.NewPost}>
           
             <div className={[classes.wrapper,classes.fadeIn].join(' ')} style={{maxWidth:'600px'}}>
                <h1 className={classes.heading}>Add a Recipe</h1>
                <h4 className={classes.subtext}>Go ahead and add your own recipe !</h4>
                <label className={classes.sub}>Title</label>
                <input className={classes.inputTextType} type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} required/>
                <label className={classes.sub}>Ingredients</label>
                <input className={classes.inputTextType} type="text" value={this.state.ingredient} onChange={(event) => this.setState({ingredient: event.target.value})} required />
                <label className={classes.sub}>Category</label>
                <select className={classes.inputTextType} value={this.state.category} onChange={( event ) => this.setState( { category: event.target.value } )}>
                    <option value="VEG">Veg</option>
                    <option value="NON-VEG">Non-Veg</option>
                    <option value="CONTAINS-EGGS">Contains-eggs</option>
                    <option value="VEGAN">Vegan</option>
                </select>
                <label className={classes.sub}>Meal Type</label>
                <select className={classes.inputTextType} value={this.state.mealType} onChange={( event ) => this.setState( { mealType: event.target.value } )}>
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="LUNCH">Lunch</option>
                    <option value="DINNER">Dinner</option>
                </select>
                <label className={classes.sub}>Cooking Time<em style={{fontWeight:'100'}}>(in minutes)</em></label>
                <input className={classes.inputTextType} type="number" value={this.state.cookingTime} onChange={(event) => this.setState({cookingTime: event.target.value})} />
                <label className={classes.sub}>Calories</label>
                <input className={classes.inputTextType} type="number" value={this.state.calories} onChange={(event) => this.setState({calories: event.target.value})} />
                <label className={classes.sub}>Cuisine</label>
                <input className={classes.inputTextType} type="text" value={this.state.cuisine} onChange={(event) => this.setState({cuisine: event.target.value})} />
                <label className={classes.sub}>Image Link</label>
                <input className={classes.inputTextType} type="text" value={this.state.imageLink} onChange={(event) => this.setState({imageLink: event.target.value})} />
                <label className={classes.sub}>Procedure</label>
                <textarea className={classes.inputTextType} rows="4" value={this.state.procedure} onChange={(event) => this.setState({procedure: event.target.value})} required/>
                <label className={classes.sub}>Description</label>
                <textarea className={classes.inputTextType} rows="4" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                <button className={classes.inputSubmitType} onClick={this.postDataHandler}>Add Recipe</button>
                
                 </div>
                
            </div>
            </fragment>
        );
    }
}

export default NewRecipe;