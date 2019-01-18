import React from 'react';

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
             <input
             className="ui input"
             placeholder="Caption meme"
             value={this.state.caption}
             onChange={this.onInputChange}
             />
            </div>
          </div>
        )
      }
   }


export default ImgSearch;
