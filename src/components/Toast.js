import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class Toast extends Component {
    componentWillReceiveProps(){
        var toast_data = this.props.toast_data;     
        this.notify(toast_data.msg,toast_data.type);
    }
    componentWillMount(){
        var toast_data = this.props.toast_data;     
        this.notify(toast_data.msg,toast_data.type);
    }
    
    notify(msg,type){
        if(type === "err"){
            return (
            toast.error(msg, {
                position: toast.POSITION.TOP_CENTER
            })
        );
    }
    else{
        toast.success(msg, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    }
    render(){
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default Toast;