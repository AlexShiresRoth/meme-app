import React from 'react';
import axios from 'axios';
import ImgSearch from './ImgSearch';
import '../stylesheets/main.css'

class App extends React.Component {
    state = { term: '', caption: '' }

    url = 'https://api.imgflip.com/get_memes'

    componentDidMount(){
      this.onMemeSearch('Surprised Pikachu')
    }

    onMemeSearch = async () => {
        const res = await axios.get(this.url)
        let memesArr = res.data.data.memes[Math.floor(Math.random() * res.data.data.memes.length)];

        this.setState({
          memesUrl: memesArr.url,
          memeName: memesArr.name
        })
    }

  render() {
    return (
      <div className=" main-content">
        <div className="ui card">
        <div className="ui centered header"><h1>Origin: {this.state.memeName}</h1></div>
          <img className="ui medium image" src={this.state.memesUrl} />
          <ImgSearch onSubmit={this.onCaptionPost}/>
          <button className="ui button primary" onClick={this.onMemeSearch}>Get Meme</button>
        </div>
      </div>
    )
  }
}

export default App;
