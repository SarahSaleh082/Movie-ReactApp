import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import NavComponent from "./components/NavComponent";
import MovieDetails from "./pages/MovieDetails";
import Favourites from "./pages/Favourites";
import { LanguageContext } from "./context/languageContext";

function App() {
  const [ contextLang , setContextLang ] = useState('en')
  return (
    <div>
      <LanguageContext.Provider value={{contextLang , setContextLang}}>

      <BrowserRouter>
      <NavComponent />
      <Switch>
          <Route path={"/register"} exact component={Register}/>
          <Route path={"/login"} exact component={Login}/>
          <Route path={"/"} exact component={Movies}/>
          <Route path={"/movies"} exact component={Movies}/>
          <Route path={"/favourite"} exact component={Favourites}/>
          <Route path={"/details/:id"} exact component={MovieDetails} />
          <Route path={"*"} exact component={NotFound}/>

      </Switch>
        
      </BrowserRouter>
      </LanguageContext.Provider>

      
    </div>
  );
}

export default App;
