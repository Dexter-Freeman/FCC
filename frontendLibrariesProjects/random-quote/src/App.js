import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


const QUOTES = [
  {text: "В действительности существуют два мага — природа и наши желания.", author: "Ишхан Геворгян"},
  {text: "History will be kind to me for I intend to write it.", author: "Winston S. Churchill"},
  {text: "I hated every minute of training, but I said, 'Don’t quit. Suffer now and live the rest of your life as a champion'.", author: "Muhammad Ali"},
  {text: "We are all failures. At least the best of us are.", author: "J.M. Barrie"},
  {text: "If you want happiness for an hour – take a nap. If you want happiness for a day – go fishing. If you want happiness for a year – inherit a fortune. If you want happiness for a life time – help someone else.", author: "Chinese proverb"},
  {text: "There are no short cuts to any place worth going.", author: "Beverly Sills"},
  {text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison"},
  {text: "Every strike brings me closer to the next home run", author: "Babe Ruth"},
  {text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
  {text: "The power of imagination makes us infinite.", author: "John Muir"},
  ]
  

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "dkkdl",
      author: "ddd",
    }
    this.getQuote = this.getQuote.bind(this);
  };

  getQuote() {
    // const idx = Math.round(Math.random() * (QUOTES.length - 1));
    // const newQuote = QUOTES[idx];
    // console.log(`newQuote - ${JSON.stringify(newQuote)}`);
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', false);
    // xhr.send();
    // const m = xhr.responseText;
    let n = fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en', {mode: "no-cors"});
    console.log(n);
    // this.setState({
    //   text: newQuote.text,
    //   author: newQuote.author,
    // });
  };

  componentWillMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="wrapper">
        <div id="quote-box">
          <TextQuote text={this.state.text.toUpperCase()} />
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
    <button 
      id="new-quote" 
      onClick={props.handleClick}
      className="btn btn-outline-dark"
    >
      New quote
    </button>
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
      <i className="fab fa-twitter"></i>
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
        <i className="fab fa-codepen"></i>
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
