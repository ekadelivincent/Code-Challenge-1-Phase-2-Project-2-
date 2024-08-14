import { useState } from "react"

function SingleBot({Data,setArmy,army,canBeRemoved,index}){
    const [isclicked,setIsClicked]=useState(false)
    function AddToArmy(newdata){
        setArmy((prevdata)=>[...prevdata,newdata])
        setIsClicked(true)
    }
    function removeFromArmy(index){
        const theArmy =[...army]
        theArmy.splice(index,1)
        setArmy(theArmy)
    }
    return(
        <div>
       <img src={Data.avatar_url}/>
       <h2>{Data.name}</h2>
       {canBeRemoved?<button onClick={()=>removeFromArmy(index)}>REMOVE</button>:isclicked?"":<button onClick={()=>AddToArmy(Data)}>ENLIST</button>} 
       
        </div>
    )
}
export default SingleBot