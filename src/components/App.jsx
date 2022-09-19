import React from "react";
import Searchbar from './Searchbar/Searchbar'
import Button from "./Button/Button";

import Loader from "./Loader/Loader";
 


export default class App extends React.Component {

  queryImage = (e) => {
    console.log(e.target);
  }

  render(){
    return (
      <>
      <Searchbar onSubmit={this.queryImage}/>
      <Button/>
      <Loader/>
      </>
    );
  }
};
