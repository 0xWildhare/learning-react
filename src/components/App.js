import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      /* className="ui container" puts the little gap on the far left and far right of the search bar */
      <div className="ui container"><SearchBar /></div>
    );
  }
}

export default App;
