import React, { Component } from 'react'
import './CSS/index.css'
import videoClass from './video/uef.mp4'

import Button from '@material-ui/core/Button';


import {PostSignInAPI} from './module/action'
import {connect} from 'react-redux'

 class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                taiKhoan:"",
                matKhau:"",
            },
            listUser:[]
        }
    }

    HandleOnchange = e=>{
        const{name,value} = e.target
        this.setState({
            user:{...this.state.user, [name]:value}
        })
        console.log(name,value)
    }

    HandleOnSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
        this.props.PostSignIn(this.state.user, this.props.history)
        
    }

    ErrorSignIn = () =>{
        const userErr = this.props
        if(userErr){
            return(
                alert("Tài khoản hoặc mật khẩu sai!")
            )
        }
    }



// NOTE: ata-backdrop="false" is delete class modal-backdrop fade of bootstrap create when use modal to login
    render() {

        return (
            <div className="SignIn">
                
                <video src={videoClass} autoPlay loop muted />
                <div className="SignIn_container">
                    <button id="getStarted" data-toggle="modal" data-target="#exampleModal">GET STARTED</button>

                    {/* MODAL */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header ">
                        {/* <h5 className="modal-title " id="exampleModalLabel">Đăng nhập</h5> */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <h5 className="text-center my-2">Đăng nhập</h5>
                    <form onSubmit={this.HandleOnSubmit}>
                    <div className="modal-body row mx-auto">
                        

                        {/* userName */}
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                        </div>
                        <input type="taiKhoan" name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.HandleOnchange} className="form-control" placeholder="email"  />
                        </div>

                        {/* Password */}
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
                        </div>
                        <input type="password" name="matKhau" value={this.state.user.matKhau} onChange={this.HandleOnchange}  className="form-control" placeholder="Password"  />
                        </div>
                        
                        <Button className="mx-auto" type="submit" variant="contained" color="primary" >Sign In</Button>
                        {/* {this.ErrorSignIn} */}
                    </div>
                    </form>

                    </div>
                </div>
                </div>

                </div>
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return{
        userErr: state.userReducer.userErr
    }
}

const mapDispatchToProp = dispatch =>{
    return{
        PostSignIn: (user,history) =>{
            dispatch(PostSignInAPI(user,history))
        }
    }
}


export default connect(null,mapDispatchToProp)(SignIn )




