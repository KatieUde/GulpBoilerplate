var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Dispensary = React.createClass({
  render: function(){
    return (
      <article class="dispensary-item">
      <h1>{this.props.name}</h1>
        <ul>
          <li>City: {this.props.city}</li>
          <li>Phone Number: {this.props.phone}</li>
        </ul>
      </article>
    );
  }
});

// <Dispensary />

var DispensaryList = React.createClass({
  // let's get ready and set the state of our component
  getInitialState: function(){
    return { data: [] }
  },
  // what happens once the render component is on the DOM
  componentDidMount: function(){
    // upon rendering to the DOM, let's get data
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, error){
        console.log('error');
        console.log(status);
        console.log(err);
      }.bind(this)
    });
  },
  render: function() {
    console.log(this.props);
    console.log(this.state.data);
      var dispensaryNodes = this.state.data.map(function(disp) {
        return (
          <Dispensary key={disp.id} name={disp.name} city={disp.city} phone={disp.phone} />
    );
  });
  return (
    <section>{dispensaryNodes}</section>
  )
  }
});

ReactDOM.render(
  <DispensaryList url="http://illinoisdispensaries.space/api-v1" />,
  document.getElementById('list')
);
