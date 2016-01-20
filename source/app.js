var React = require('react');
var ReactDOM = require('react-dom');
// npm install jquery --save (in terminal)
var $ = require('jquery');
// npm install backbone --save (in terminal)
var backbone = require('backbone')

var input = require('./dispensary');


// jsx element = reactElement
// jsx converts html style syntax into something called a reactElement

// <h1 className='emphasis' />
// compiles to:
// var element = React.createElement('h1', { className: 'emphasis' });
//
// // ReactDOM.rend(<h1 className='emphasis' />,
// // document.getElementById('react-element'));
// ReactDOM.render(
//   element,
//   document.getElementById('react-element')
// );
