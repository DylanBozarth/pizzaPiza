import React, {useState} from 'react'

const ButtonClickable2 = (props) => {
    const [isActive, setActive] = useState("false");
    const handleToggle = (e) => {
     setActive(!isActive);
     props.onClick(e)
    }; 
     return <button
               type="button"
               value={props.value}
               className={isActive ? "button btn fifth" : "button btn fifthActive"}
               onClick={handleToggle}
             >
              {props.name}
             </button>
   
   }

   export default ButtonClickable2