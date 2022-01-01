import React, { Component } from 'react'
import { listShows, getShows } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayShows extends Component {

    componentDidMount = async () => {
        this.getShows()
    } 
//ok so  it's becoming clear that i didn't connect it to the right API
    getShows = async () =>{
        const result = await API.graphql(graphqlOperation(listShows))
    }
    render() {
        return (
            <div>Hello world!</div>
        )
    }
}

export default DisplayShows;