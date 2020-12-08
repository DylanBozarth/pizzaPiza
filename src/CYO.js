import React, {useState} from 'react'



const CYO = () => {
    const [pizzaSize, setPizzaSize] = useState(null);
const changePizza = () => {
setPizzaSize()
}
return (

    
    <div className="container">
        <h1 className="text-center">Create your own pizza</h1><div className="row">
            
<div className="col-sm-8">
<p>{pizzaSize}</p>
</div>
<div className="col-sm-4">
    <h3>Pizza size</h3>
    <button type="button" onClick={() => changePizza()}>Medium</button><button type="button">Large</button> 
</div>

</div>
    </div>
)
}
export default CYO