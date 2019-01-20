import React, { Component, PropTypes } from 'react'
import './Gifloader.css' 
import 'bootstrap-css-only';
import './TitleComponent.css'

class TitleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            currentImage: '',
            isSearchEnabled: false
        }
    }


    render() {
        return (
            <div className="main">
                MEME DREAM
            </div>
        )
    }
}



export default TitleComponent
