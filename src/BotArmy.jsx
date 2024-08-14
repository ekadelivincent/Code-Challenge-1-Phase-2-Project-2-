import { useState } from "react"
import SingleBot from "./SingleBot"

function YourBotArmy({Bot,setArmy,army}){
    const [canBeRemoved,setcanBeRemoved]=useState(true)
    return(<div>
        <h1>Your Bot Army</h1>
        {
            Bot.map((item,index)=>{
                return(<SingleBot
                Data={item}
                key={item.id}
                setArmy={setArmy}
               canBeRemoved={canBeRemoved}
               index={index}
                army={army}/>)
            })

        }
    </div>)
}

export default YourBotArmy