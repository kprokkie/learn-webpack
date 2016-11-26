var React = require('react');
var ReactDOM = require('react-dom');

// To pull in all CSS files
require('./style.css');

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

ReactDOM.render(<Message title='Pradeep Kumar' message='Can you tell me about Webpack ?'/>,
    document.getElementById('react-container'));

