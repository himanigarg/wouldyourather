import React, { Component } from 'react';
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  render() {
      console.log(this.props)
    return (
      <div>
          <h3 className='center'> Start the Game </h3>
          <ul className='dashboard-list'>
            {this.props.questionIds.map((id)=>(
                <li key={id}>
                    <div>
                        <Question id={id}/>
                    </div>
                </li>
            ))}
          </ul>
      </div>
    );
  }
}

function mapStateToProps({questions}){
    return {
        questionIds: Object.keys(questions)
        .sort((a,b)=> questions[b].timestamp- questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);
