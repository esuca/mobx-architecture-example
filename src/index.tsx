import "reflect-metadata"
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import { App } from 'App';
import reportWebVitals from './reportWebVitals';
import { configure } from 'mobx'

configure({
  enforceActions: 'always', // don't allow state modifications outside actions
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false,
})

if (process.env.NODE_ENV === 'development') {
  const { msw } = require('./test-utils/mocks/msw')
  msw.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
