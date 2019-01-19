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
        console.log(this.search.value)
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
                        </div>
            </div>
        )
    }
}



export default Gifloader
