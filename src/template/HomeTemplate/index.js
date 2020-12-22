import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Navbar from '../../component/NavBar'
import MenuCanvas from '../../component/MenuCanVas'
import SlideBar from "../../component/SlideBar"
function HomeLayout(props){
    return(
        <div>
            {/* <Navbar /> 
            <MenuCanvas /> */}
            <SlideBar />
            {props.children}
        </div>
    )
}

export default function HomeTemplate({Component,...props}) {
    
       return (
        <Route {...props}
            render= {(propsComponent)=>{
                if(document.cookie && localStorage.getItem("user")){
                    return(
                        <HomeLayout>
                            <Component {...propsComponent} />
                        </HomeLayout>
                    )
                }
                return <Redirect to="/sign-in" />
            }}
         />
    )
        }