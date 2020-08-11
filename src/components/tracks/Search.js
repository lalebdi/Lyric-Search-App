import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';

class Search extends Component {
    state = {
        trackTitle: " "
    };

    onChange = (e)=>{
        // below it will look for the name field and assign it to the title. This way you don't need to create multiple onChnage functions for other inputs.
        this.setState({[e.target.name]: e.target.value})

    }

    render() {
        return (
            <Consumer>
                {value =>{
                    return <div className="card card-body mb-4 p-4" >
                        <h1 className="display-4 text-center">
                            <i className="fas fa-music" ></i> Search For A Song
                        </h1>
                        <p className="lead text-center" >Get the lyrics for your song</p>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="song title..." name="trackTitle" value={this.state.trackTitle} onChange={this.onChange} />
                            </div>
                        </form>
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Search</button>
                    </div>
                }}
            </Consumer>
        )
    }
}


export default Search;