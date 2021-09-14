import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

import Data from "./pages/Data";


function App() {
  return (
    <div className="App">
        <div className={"max_width"}>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/data"> <Data data/></Route>
                    <Route path="/" component={Home}/>
                </Switch>
            </ Router>
        </div>
    </div>
  );
}

export default App;
