var React = require('react');
var Button = require('./button');
//var List = require('./list');

module.exports = Reach.createClass({
   render: function() {
       return <div className="dropdown">
            <Button className="btn-default" title={this.props.title} subTitleClassName="caret"/>
       </div>
   }
});