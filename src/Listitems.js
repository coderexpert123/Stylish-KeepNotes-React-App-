import React from 'react';
import   './Listitems.css';
import {  FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function Listitems(props){
const items=props.items;
 const listItem=items.map(item=>{

    return <div className="list" key="item.key">
<p>{item.text} <span>
    <FontAwesomeIcon className='faicons' icon='trash'></FontAwesomeIcon>
</span>
</p>


    </div>
 })
return( 

<div>
<FlipMove duration={500} easing="ease-in-out">
{listItem}
</FlipMove>
</div>
  
)
}
export default Listitems;
