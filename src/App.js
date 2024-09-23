import Home from "./Screens/Home";
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Screens/NotFound'
import Footer from './Components/Footer/Footer'
import Favoritoss from './Screens/Favoritoss';
import Cartel from "./Screens/Cartel";
import Detalle from "./Screens/Detalle";
import ResultadosBusqueda from "./Screens/Resultados";
import Populares from "./Screens/Populares";
//el correcto uso de switch, route

function App() {
  return (
    <>


    <Navbar />
      <div className="App">

        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/favoritos' component={Favoritoss} />
          <Route path='/populares'  exact={true} component={Populares}/>
          <Route path="/detalle/:id" component={Detalle} />
          <Route path='/cartel'  exact={true} component={Cartel}/>
          <Route path='/resultados' exact={true} component={ResultadosBusqueda} />
          <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
      </div>
    </>
  );
}

export default App;