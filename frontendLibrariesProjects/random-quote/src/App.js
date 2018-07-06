import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


const QUOTES = [
  {text: "text", author: "Dexter"},
  {text: "text2", author: "Dexter2"},
  {text: "text3", author: "Dexter3"},
  {text: "text4", author: "Dexter4"},
  {text: "text5", author: "Dexter5"},
  {text: "text6", author: "Dexter6"},
  {text: "text7", author: "Dexter7"},
  {text: "text8", author: "Dexter8"},
  {text: "text9", author: "Dexter9"},
  {text: "text10", author: "Dexter10"},
  ]
  

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.getQuote = this.getQuote.bind(this);
    console.log(`state - ${JSON.stringify(this.state)}`);
  };

  getQuote() {
    const idx = Math.round(Math.random() * 9);
    const newQuote = QUOTES[idx];
    // console.log(`newQuote - ${JSON.stringify(newQuote)}`);
    this.setState({
      text: newQuote.text,
      author: newQuote.author,
    });
  };

  componentWillMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="wrapper">
        <div id="quote-box">
          <TextQuote text={this.state.text} />
          <AuthorQuote author={this.state.author} />
          <Tweet text={this.state.text} />
          <NewQuote handleClick={this.getQuote} />
        </div>
        <Footer />
      </div>
    )
  }

};

const TextQuote = (props) => {
  return (
    <div id="text">
      <span>{props.text}</span>
    </div>
    );
};

const AuthorQuote = props => {
  return (
    <div id="author">
      <span>{props.author}</span>
    </div>
  );
};

const NewQuote = props => {
  return (
    <button id="new-quote" onClick={props.handleClick}>Get new quote</button>
  )
};

const Tweet = props => {
  return (
    <a 
    id="tweet-quote" 
    title="Tweet this quote!" 
    target="_blank" 
    href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(props.text)}`}
    >
      Tweet me!
    </a>
  );
};

const Footer = function() {
  return (
    <div className="footer">
      <span>by </span>
      <a 
        href="https://codepen.io/D-F/"
        target="_blank"
      >
        Dexter Freeman
      </a>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Card />
    )
  }
}


export default App;
