import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Result from './Result'
import Toast from './Toast';

const PORT = 8000;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button_text:'Generate URL',
            loading:false,
            short_url:'',
            toast_data:false,
            
        }
    }
    configureURL(url){
        //Sets url into proper format before making requests
        if (!(url.includes('https://'))){
            url = 'https://' + url;
        }

        return url
    }
    handleNewURL(e){
        e.preventDefault();
        let url = this.refs.url.value;
        if (url === ""){
            var toast_data = {'msg':'You passed an invalid URL','type':'err'};
            this.setState({toast_data:toast_data});
            return;
        }
        url = this.configureURL(url);
        this.refs.url.value = "";
        this.setState({
            loading:true,
            button_text:'Please Wait ...'
        })
        
        var that = this;
        
        var post_url = `http://${window.location.hostname}:${PORT}/api/urls/`;
        axios.post(post_url,{
            original_url: url
        })
        .then(function (response) {
            //configure this to the domain name which application is deployed on
            var short_url =  `${window.location.hostname}:${PORT}/${response.data[1]}`
            that.setState({
                short_url:short_url,
                loading:false,
                toast_data:false
            })
        })
        .catch(function (error) {
            //show error as a toast
            var toast_data = {'msg':error.message,'type':'err'};
            that.setState({
                toast_data:toast_data,
                loading:false,
                button_text:'Generate URL'
            })
        });
        
    }
    handleNewResult(){
        this.setState({
            button_text:'Generate URL'
        })
    }
    renderToastOrNot(){
        const {toast_data} = this.state;
        if(!toast_data){
            return;
        }
        return <Toast toast_data={toast_data}/>
    }
    renderLoadingOrResult(){
        const {loading,short_url} = this.state;
        if(loading){
            return(
                <div id="load">
                    <div>G</div>
                    <div>N</div>
                    <div>I</div>
                    <div>D</div>
                    <div>A</div>
                    <div>O</div>
                    <div>L</div>
                </div>
            ) 
        }
        else if(!short_url)
        {
            return;
        }
        
        return <Result onNewResult={this.handleNewResult.bind(this)} url={short_url} />
    }
    render() {
    return (
    <div>
    <form onSubmit={this.handleNewURL.bind(this)}>
        <div className='search container'>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">https://</span>
                </div>
                <input type="text" ref='url' className="form-control" placeholder="www.google.com" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
        <div className='container'>
            <input className='btn btn-block'type='submit' value={this.state.button_text}/>
        </div>
    </form>
    {this.renderLoadingOrResult()}
    {this.renderToastOrNot()}
    </div>
    );
  }
}

export default Search;
