import SingleBot from "./SingleBot"

function BotCollection({Bot,setArmy,army}){
    return(<div>
        {
            Bot.map((item)=>{
                return(<SingleBot
                Data={item}
                key={item.id}
                setArmy={setArmy}
                army={army}/>)
            })

        }
    </div>)
}

export default BotCollection