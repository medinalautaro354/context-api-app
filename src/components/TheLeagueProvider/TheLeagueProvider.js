import React, { Component } from 'react'

const TheLeagueContext = React.createContext();
export {TheLeagueContext};

class TheLeagueProvider extends Component{
    state = {
        teams: [
          {
            name: "Real Madrid",
            titles: 35
          },
          {
            name: "Barcelona",
            titles: 25
          },
          {
            name: "Atletico Madrid",
            titles: 10
          }
        ]
      };
    
    
    render(){
        return(
            <TheLeagueContext.Provider value={{
                teams: this.state.teams,
                isAChampion: (id) =>{
                    let teams = [... this.state.teams];
                    
                    teams[id].titles += 1;

                    this.setState({
                        teams
                    })
                }
            }}>
            {this.props.children}

            </TheLeagueContext.Provider>
        );
    }
}

export default TheLeagueProvider;