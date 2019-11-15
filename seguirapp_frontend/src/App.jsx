import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from './shared/Login'
import TopBar from './shared/topBar/TopBar'
import NavBar from './shared/navBar/NavBar'
import Dashboard from './pages/dashboard/Dashboard'
import ClienteForm from './pages/clientes/ClienteForm'
import DispositivoForm from './pages/dispositivos/DispositivoForm'
import ClienteList from './pages/clientes/ClienteList'

class App extends Component {

  render() {
    const user = window.localStorage.getItem('user')

    if (!user) {
      return <Login />
    }

    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" render={() => (
              <div>
                <TopBar />
                <NavBar />
                <div className='container'>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/cliente" exact component={ClienteList} />
                  <Route path="/cliente/novo" exact component={ClienteForm} />
                  <Route path="/dispositivo" exact component={DispositivoForm} />
                </div>
              </div>
            )} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.system.user
});

export default connect(mapStateToProps)(App);