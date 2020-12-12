import React, {useState} from 'react'

const ButtonClickable = props => {
    const [isActive, setActive] = useState("false");
    const handleToggle = (ev) => {
     setActive(!isActive);
     props.onClick && props.onClick(props.value)
    };
     return <button
               type="button"
               value="Peperoni, "
               className={isActive ? "button btn first" : "button btn firstActive"}
               onClick={handleToggle}
             >
               {props.value}
             </button>
   
   }
   export default ButtonClickable