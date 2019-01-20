import React, { Component, PropTypes } from 'react'
import './Gifloader.css'
import 'bootstrap-css-only';
import Delay from 'react-delay'

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
}

class Gifloader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            currentImage: '',
            isPlay: false,
            gifs: [],
            searches: [],
            index: -500,
            title: ''
        }
    }

    handleTitleClick = () => {
        let curr = performance.now()
        this.setState({
            isSearchEnabled: true
        })

    }

    componentDidMount() {
        var that = this
        this.timerID = setInterval(
            () => that.uptick(),
            9000
        );
    }

    uptick = () => {
        this.setState({
            index: this.state.index + 1
        })
    }

    handleTitleChange = () => {
        this.setState({
            title: this.search.value
        })
    }

    setTitleClick = () => {
        this.setState({
            title: this.search.value
        })
    }


    handleGoClick = () => {
        var that = this;

        var terms = this.state.query.split(",");
        this.setState({
            searches: terms
        })
        let urls = []
        for (var i = 0; i < terms.length; i++) {
            urls.push("https://api.giphy.com/v1/gifs/search?api_key=LqcVgpq7nA0GD15wRZezjPYezf3O00Te&q=" + terms[i]) 
        }
        var promises = urls.map(url => fetch(url).then(y => y.json()));
        Promise.all(promises).then(result => {
            console.log(result[0])
            for(var i = 0; i < that.state.searches.length; i++){
                that.setState({
                    gifs: [...that.state.gifs, result[i].data[0].embed_url]
                })
            }
            // do something with results.
        });
    }                
    

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    handlePlayClick = () => {
        this.state.searches[0] = ''
        this.setState({
            index: 0,
            isPlay: true
        })
        // let curr = performance.now()
        // for (var i = 0; i < this.state.gifs.length; i++) {
        //     console.log(this.state.index)
        //     this.setState({
        //         index: this.state.index + 1
        //     })
        //     console.log(this.state.index)
        //     while (performance.now() - curr < 2000) {

        //     }
        //     curr = performance.now()
        // }
    }




    render() {

        let index = this.state.index;

        return (
            <div>
                <div className='container'>
                    <input className="search"
                        placeholder="Enter the title of your movie"
                        ref={input => this.search = input}
                        onChange={this.handleTitleChange}
                    />
                </div>
                {!this.state.isPlay ? <div className='container'>
                    <input className="search"
                        placeholder="Enter narrative cues seperated by commas"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <button className="btn btn-outline-warning col-lg-2" onClick={this.handleGoClick}>
                        Generate Movie
                        </button>
                </div> : null }
                <br></br>
                {!this.state.isPlay ? <div>
                <button className="btn btn-outline-warning col-lg-2 playB" onClick={this.handlePlayClick}>
                    PLAY MOVIE
                        </button>
                </div> : null }

                <div>
                    <iframe src={this.state.gifs[this.state.index]} className="frame" />
                </div>
                <div className = "SearchT">
                <p className="searchTerms">{this.state.searches[this.state.index]}</p>
                </div>
            </div>
        )
    }
}



export default Gifloader
