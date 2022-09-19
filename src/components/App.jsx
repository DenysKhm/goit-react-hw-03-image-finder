import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

import Loader from './Loader/Loader';

export default class App extends React.Component {



  queryImage = () => {
    console.log(123);
  };

  onBtnClick = () => {
    console.log(321);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.queryImage} />
        <Button onBtnClick={this.onBtnClick} />
        <Loader />
      </>
    );
  }
}
