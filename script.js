
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return{
      <p>Hello World!</p>
    };
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
