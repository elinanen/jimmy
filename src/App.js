import React, { Component } from 'react';
import './App.css';
import sampleResults from './sample-results';
import Result from './Result';
var Rebase = require('re-base');
var firebase = require('firebase');


var app = firebase.initializeApp({
  apiKey: "AIzaSyD7vuzVrZC5iASYlisMmRuvHWy1XC2onck",
  authDomain: "jimmy-82d49.firebaseapp.com",
  databaseURL: "https://jimmy-82d49.firebaseio.com",
});
var base = Rebase.createClass(app.database());


// firebase.database().ref().set({
// results: sampleResults
// });


class App extends Component {
  state = {
      results: sampleResults
    };

    componentDidMount(){
      base.syncState(`results`, {
        context: this,
        state: 'results',
        // asArray: true
      });
    }



  render() {
    return (
      <div>
        <ul>
          { Object
            .keys(this.state.results)
            .map(key => <Result key={key} result={this.state.results[key]}></Result>)
          }
        </ul>


    </div>
    );
  }
}

export default App;
