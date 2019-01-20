import React, { Component, PropTypes } from 'react'
import './Gifloader.css' 
import 'bootstrap-css-only';

class Gifloader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            currentImage: '',
            isSearchEnabled: false
        }
    }

    handleTitleClick = () => {
        this.setState({
            isSearchEnabled: true
        })
    }
    
    handleGoClick = () => {
        fetch("https://api.giphy.com/v1/gifs/search?api_key=LqcVgpq7nA0GD15wRZezjPYezf3O00Te&q=" + this.state.query)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    currentImage: result.data[0].embed_url
                })
            } 
        )
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }


    render() {
        return (
            <div>
                <div className='container'>
                            <input className ="search"
                            placeholder="Enter the title of your movie"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                        <button className="btn btn-outline-warning col-lg-2" onClick={this.handleTitleClick}>
                        Go
                        </button>
                        </div>

                    <div className='container'>
                    
                        <input className ="search"
                            placeholder="Enter narrative cues seperated by commas"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                        <button className="btn btn-outline-warning col-lg-2" onClick={this.handleGoClick} disabled={!this.state.isSearchEnabled}>
                        Generate Movie
                        </button>
                        <div className = "imageHolder">
                        <iframe src={this.state.currentImage} className ="frame"/>
                        </div>
                        </div>


            </div>
        )
    }
}



export default Gifloader
