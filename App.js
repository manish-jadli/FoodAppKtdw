// In App.js in a new project

import * as React from 'react';
import Navigator from './app/route/route';



export class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
  return (
    <Navigator />
  );
  }
}

export default App;