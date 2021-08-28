import React from 'react';
import ReactDOM from 'react-dom';

const ItemListContainer = (props) => {
    const greeting = "Bienvenid@!"
    ReactDOM.render(
        <ItemListContainer props="{greeting}" />
        ,
        document.getElementById('root')
        )
}
  

export default ItemListContainer