import { h, Component } from 'preact';

export default class HelloWorld extends Component {
  render() {
    return (
      <div>Hello World, or '{this.props.title}'!</div>
    );
  }
}
