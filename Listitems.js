const Listitems=(props)=>{
const items = props.items.map(item=><Item  key={item.id} id = {item.id} name={item.name} active = {item.active} changeStatus ={props.changeStatus} />)
    return(
        <div>
        <ul>
           {items} 
        </ul>
        </div>
    )
}