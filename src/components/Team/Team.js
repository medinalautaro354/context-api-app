import React from 'react'
import {TheLeagueContext} from '../TheLeagueProvider/TheLeagueProvider';

const Team = () =>{
    return(
       <TheLeagueContext.Consumer>
           {(value) => {
            return Object.keys(value.teams).map(i =>{
                return(
                    <li className='list-group-item d-flex justify-content-between align-item-center' key={i}>
                        <p className='m-0'>
                            {value.teams[i].name}
                        <span className='ml-4 badge badge-danger'>
                            {value.teams[i].titles}
                        </span>
                        </p>
                        <button className='btn btn-primary' type='button' onClick={() => {
                            value.isAChampion(i)
                        }}>
                            Es Campeon
                        </button>
                    </li>
                )
            })
           }}
       </TheLeagueContext.Consumer>

    )
}

export default Team;