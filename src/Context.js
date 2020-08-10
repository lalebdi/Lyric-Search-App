import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [
            { track: {tracks_name:'abc'} },
            { track: {tracks_name:'123'} }
        ],
        heading: "Top 10 Tracks"
    }
    
    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}
// the consumer is what we import into our component to access the state
export const Consumer = Context.Consumer;
