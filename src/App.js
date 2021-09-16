import React, { Component } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import QuoteContainer from './components/QuoteContainer';
import { render } from '@testing-library/react';

// export function App() {
//   const getQuote = async() => {
//     const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/*')
//   };

// class App extends Component {
// render() {
//   return<ronheader />;
// }
// }

const App = () => {
  return (
    <div className="App">
      <QuoteContainer />
    </div>
  )
}
export default App;
