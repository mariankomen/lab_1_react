import React from 'react'
import Header from "./components/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Ploshcha from "./components/ploshcha/ploshcha";
import Perimetr from "./components/perimetr/perimetr";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div className="App">
              <Route path='/area' render={()=><Ploshcha/>}/>
              <Route path='/perymetr' render={()=><Perimetr/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
