// define a react component class
// Describes form and function of class
// The cookie cutter utensil

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <button className={"btn" + this.props.className} type="button">
            {this.props.title} <span className={this.props.subTitle.className}>{this.props.subTitle}</span>
        </button>
    }
});