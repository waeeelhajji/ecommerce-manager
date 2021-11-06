import { Redirect, Route, Switch } from 'react-router';
import ListOfProd from "./components/ListOfProd"
import Product from './components/ProductsUPDE';
import AddProd from "./components/AddProd"
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Commerce Manager</h1>
       <Switch>
         <Route exact path ="/" >
         <Redirect to ="/products"/>
         </Route>
         <Route exact path ="/products" component={ListOfProd} />
         <Route exact path ="/products/:id" component={Product}/>
         <Route exact path ="/product/new" component={AddProd}/>

       </Switch>
    </div>
  );
}

export default App;
