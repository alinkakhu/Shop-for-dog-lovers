const Item=(props)=>(
    <li style = {props.active ? {fontWeight:'bold'}:{fontColor: 'gray'}} 
    onClick={()=>props.changeStatus(props.id)}>{props.name}</li>
)