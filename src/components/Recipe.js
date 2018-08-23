import React  from "react"
import {Link} from "react-router-dom"

const API_KEY="c1fec899dba79735c67b07571439e9c2"

class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }

    componentDidMount= async ()=>{
        
                const title=this.props.location.state.recipe
        const req = await fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        
        const res=await req.json()
      this.setState({activeRecipe:res.recipes[0]})
        console.log(this.state.activeRecipe)
        
    }
    render(){
        const recipe=this.state.activeRecipe;
        return(
            <div className="container">
           {this.state.activeRecipe.length !==0 &&
                 <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title ">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher"><span>Publisher: </span>{recipe.publisher}</h4>
                    <p className="active-recipe__website">Website: <span> <a href={recipe.source_url}>Vist site</a> </span></p>
                    <button className="active-recipe__button"><Link to={"/"}>Home</Link></button>
                </div> 
            
            }
           </div>
        
        )
    }
}

export default Recipe