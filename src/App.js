import React from "react";
import Teams from "./components/Teams/Teams";
import TheLeagueProvider from './components/TheLeagueProvider/TheLeagueProvider';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
      <TheLeagueProvider>
        <Teams />

      </TheLeagueProvider>
      </div>
    );
  }
}

export default App;
