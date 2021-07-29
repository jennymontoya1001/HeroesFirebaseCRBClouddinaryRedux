import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HeroesApp } from './HeroesApp';
import {store} from './store/store';
import {Provider} from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
  <HeroesApp />
  </Provider>,
  document.getElementById('root')
);
