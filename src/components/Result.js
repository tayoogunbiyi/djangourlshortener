import React, { Component } from 'react';
import '../styles/App.css';

class Result extends Component{
    componentWillMount(){
        this.props.onNewResult();
    }
    render() {
        return (
        <div className='container'>
            <div id='shorturl' className='result'>
                <div>{this.props.url}</div>
            </div>
            <br/>
            <button className="btn copy-btn" data-clipboard-target="#shorturl">
                Copy Link
            </button>
            {/* Trigger a modal to indicate success of copying modal */}
        </div>
    );
  }
}

export default Result;
