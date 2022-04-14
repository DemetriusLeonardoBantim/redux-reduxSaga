import React from 'react';
import {Provider} from 'react-redux'
import Catalog from './components/Catalog';
import store from './store'
import Cart from './components/Cart'


function App() {
  return (
    <Provider store={store}>
      <Catalog/>
      <Cart/>
    </Provider>
  );
}

export default App;
