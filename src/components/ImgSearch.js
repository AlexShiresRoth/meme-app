import React from 'react';
import '../stylesheets/main.css';

class ImgSearch extends React.Component {

    state = { caption: '' }


    onAddInput = event => {
      event.prventDefault()

        this.props.onSubmit(this.state.caption)
      }

      onInputChange = event => {
        this.setState({
          caption: event.target.value
        })
      }



      render() {
        return (

          <div className="ui form" onSubmit={this.onAddInput}>
            <div className="ui content">
              <div className="ui content caption"><h2>{this.state.caption}</h2></div>
                <div className="ui large transparent left icon input">
                  <div className="icon-box">
                    <i className="edit outline icon"></i>
                    </div>
                    <input
                       className="ui input"
                       placeholder="Caption meme"
                       value={this.state.caption}
                       onChange={this.onInputChange}
                    />
                    </div>
                </div>
            </div>
        )
      }
   }


export default ImgSearch;
