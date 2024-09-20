import Home from "./Screens/Home";
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer'
import Favoritoss from './Screens/Favoritoss';
import Cartel from "./Screens/Cartel";

//el correcto uso de switch, route

function App() {
  return (
    <>


    <Navbar />
      <div className="App">

        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/favoritos' component={Favoritoss} />
      
          <Route path='/cartel'  exact={true} component={Cartel}/>
  

 
        </Switch>
        <Footer/>
      </div>
    </>
  );
}

export default App;