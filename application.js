var options = {
    thumbnailData: [{
        title: 'Inbox',
        number: 32,
        header: 'Learn React',
        description: 'Blah blah blah.',
        imageUrl: 'https://talks.artificial.io/cross-platform-react/images/react.svg'
    }, {
        title: 'Inbox',
        number: 25,
        header: 'Learn Gulp',
        description: 'God damn it',
        imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
    }]
};

// Ask react to render this class
// Cookie dough cut out
var element = React.createElement(ThumbnailList, options);


// When we ask react to render this class, we will tell it
// where to palce the rendered element in the dom
ReactDOM.render(element, document.querySelector('.container'));
// define a react component class
// Describes form and function of class
// The cookie cutter utensil
var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
            list
        )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageUrl}), 
            React.createElement("div", {className: "caption"}, 
                React.createElement("h3", null, this.props.header), 
                React.createElement("p", null, this.props.description), 
                React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                )
            )
        )
    }
});