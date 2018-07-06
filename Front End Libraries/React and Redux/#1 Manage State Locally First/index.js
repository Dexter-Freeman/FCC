class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    };
  
    submitMessage() {
      const newMessages = this.state.messages.concat(this.state.input);
      this.setState({
        messages: newMessages,
        input: ''
      });
    };
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.submitMessage}>Add message!</button>
          <ul>
            {this.state.messages.map(item => (<li>{item}</li>))}
          </ul>
        </div>
      );
    }
  };