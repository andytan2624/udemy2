// define a react component class
// Describes form and function of class
// The cookie cutter utensil
var Badge = React.createClass({
    render: function() {
        return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});
