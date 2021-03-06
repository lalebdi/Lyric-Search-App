import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';

class Search extends Component {
    state = {
        trackTitle: " "
    };

    findTrack = (dispatch, e) =>{
        e.preventDefault();
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            this.setState({trackTitle: " "}) // to clear the search bar
    })
        .catch(err => console.log(err))
    }

    onChange = (e)=>{
        // below it will look for the name field and assign it to the title. This way you don't need to create multiple onChnage functions for other inputs.
        this.setState({[e.target.name]: e.target.value})

    }

    render() {
        return (
            <Consumer>
                {value =>{
                    // console.log(value)
                    const { dispatch } = value; // this coming from the global state and I'm pulling the dispatch value and pass it into the form find track function
                    return <div className="card card-body mb-4 p-4" >
                        <h1 className="display-4 text-center">
                            <i className="fas fa-music" ></i> Search For A Song
                        </h1>
                        <p className="lead text-center" >Get the lyrics for your song</p>
                        <form onSubmit={this.findTrack.bind(this, dispatch)}>
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