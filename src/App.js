
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//importar componentes
import Footer from './components/footer';
import Header from './components/header';
import PokeInicio from './pages/poke_inicio';
import PokeApp from './pages/busca_poke';
import Formulario from './pages/formulario';


function App() {
  const history = createBrowserHistory()
  const [addPoke, setAddpoke] = useState([])
  return (
    <BrowserRouter history={history}>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={PokeInicio} />
          <Route path='/busca_poke'><PokeApp addPoke={addPoke} setAddpoke={setAddpoke} /></Route>
          <Route path='/formulario' > <Formulario addPoke={addPoke} setAddpoke={setAddpoke} /></Route>
          <Route exact={true} path='*' component={() => {
            return (
              <div className='fondo-error text-warning'>
                <h1 className='font-weight-bold'>Error 404 no encontrado</h1>
              </div>
            )
          }} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



