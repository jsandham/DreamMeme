import React, { Component, PropTypes } from 'react'
import './Gifloader.css' 

class Gifloader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            currentImage: ''
        }
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
                        <div className='row'>
                        <input 
                            placeholder="What do you feel"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                        <button className="btn btn-outline-warning col-lg-4" onClick={this.handleGoClick}>
                        Search
                        </button>
                        </div>
                        <div className = "imageHolder">
                        <iframe src={this.state.currentImage} className ="frame"/>
                        </div>
                        </div>
            </div>
        )
    }
}



export default Gifloader
