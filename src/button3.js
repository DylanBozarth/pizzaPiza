import React, {useState} from 'react'
const ButtonClickable3 = (props) => {
    
     return <button
               type="button"
               value={props.value}
               name={props.name}
              
               
             >
              {props.name}
             </button>
   
   }

   export default ButtonClickable3