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