import React from 'react';
import axios from 'axios';
import ImgDisplay from './ImgDisplay';

class App extends React.Component {
    state = { term: '' }

    url = 'https://api.imgflip.com/get_memes'

    onButtonClick = async () => {
        const res = await axios.get(this.url)
        let memesArr = res.data.data.memes[Math.floor(Math.random() * res.data.data.memes.length)];

        this.setState({
          memesUrl: memesArr.url,
          memeName: memesArr.name
        })
    }

  render() {
    return (
      <div className="ui container main-content">
        <div className="ui card">
          <div className="ui header">{this.state.memeName}</div>
          <img className="ui medium image" src={this.state.memesUrl} />
          <button className="ui button primary" onClick={this.onButtonClick}>Get Meme</button>
        </div>
      </div>
    )
  }
}

export default App;
