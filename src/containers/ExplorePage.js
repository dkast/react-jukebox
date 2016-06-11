import React, { PropTypes } from 'react'

class ExplorePage extends React.Component {
  render () {
    return(
      <div>
        <div className="ui big icon input">
          <input type="text" placeholder="Que quieres escuchar?"/>
          <i className="search icon"></i>
        </div>
        <h3 className="ui dividing header">
          Explora
        </h3>
      </div>
    );
  }
}

export default ExplorePage;
