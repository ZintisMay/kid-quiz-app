import React, { useState } from 'react';
import './Menu.css';

// import './Menu.css';

function Menu(props) {
  // const [count, setCount] = useState(0);

    return (

    	<div className={`Menu ${props.menuIsOpen ? "onScreen":"offScreen"}`}>

       Menu
      </div>
    );

}

export default Menu;