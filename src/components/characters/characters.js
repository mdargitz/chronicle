import React from 'react';
import{connect} from 'react-redux';
import {getStories, getCharacters} from '../../actions/stories';
import Banner from '../banner';
import DetailList from '../detail-list';
import AddNewDetail from '../new-detail';

export class Characters extends React.Component {
  
  componentWillMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getCharacters(this.props.match.params.storyId));
  }

  render(){
    if (this.props.storyData){
      return (
        <div>
          <h1>Characters </h1>
          <Banner />
          <AddNewDetail type='character' storyId={this.props.match.params.storyId}/>
          <DetailList type='characters' storyId={this.props.match.params.storyId}/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    storyData : state.content.stories[props.match.params.storyId]
  };
};

export default connect(mapStateToProps)(Characters);