class App extends React.Component{
  // dane
state={
items:[
  {id:1, name:'Karma dla psa',active:false},
  {id:2, name:'Legowisko dla psa',active:false},
  {id:3, name:'Przysmak',active:false},
  {id:4, name:'Zabawka dla psa',active:false},
  {id:5, name:'Książka o psach',active:false},
  {id:6, name:'Ubranka dla psa',active:false},
],}

handleChange=(id)=>{
 const items= this.state.items.map(item=>{
   if(id===item.id){
  item.active=!item.active}
   return item

})
this.setState({
  items
})
}

render (){
  
  return(
<div>
  <Header items = {this.state.items}/>
  <Listitems items={this.state.items} changeStatus={this.handleChange}/>
  </div>
  );
}
}
ReactDOM.render(<App/>,document.getElementById('root'))
  
