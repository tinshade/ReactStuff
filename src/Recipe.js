import React from 'react';
//!Getting information from the useState in here:

const Recipe = ({title ,calories ,image ,source ,serves, ingredients, url}) =>{
    return(

        <div className="col-md-4 col-lg-4 col-sm-12 mb-2">
            <div className="card">
                <h5 className="card-header">{title}</h5>
                <img src={image} alt={title} className="card-img-top" height="348px" width="348px"/>
                <div className="card-body">
                    <div className="info">
                        <p className="text-danger">Calories<br/>{calories}</p>
                        <p className="text-primary">Source<br/>{source}</p>
                        <p className="text-success">Serves<br/>{serves}</p>
                    </div>
                    <div className="container ing">
                        <ul type="none">
                        {ingredients.map(ingredient => (
                            <li className="card-text">{ingredient.text}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="m-2">
                        {/* <a href={url} className="btn-success p-2 m-2">GET RECIPE</a> */}
                    </div>
                </div>
                <div className="card-footer">
                    <a target="_blank" title={title} rel="noopener noreferrer" href={url} className="btn-success p-2 m-2">GET RECIPE</a>
                    {/* <div className="info">
                        <i className="fas fa-heart fa-2x"></i>
                        <i className="fas fa-bookmark fa-2x"></i>
                        <i className="fas fa-comment fa-2x"></i>
                        <i className="fas fa-paper-plane fa-2x"></i>
                    </div> */}
                </div>
            </div>
        </div>


    );
}

export default Recipe;