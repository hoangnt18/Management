import React from 'react'
import {Link, withRouter,NavLink} from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
import imgAdmin from './img/admin.png'
import './CSS/index.css'

function MenuCanvas({location}) {
    return (
      <div className="row container-fluid Menu_Container">
        <div className="col-md-2">
            <OffcanvasMenu  className="Menu_Canvas"
			Link={Link} 
			location={location} 
			config={{
				width: 200, 
                push: true, 
                
			}}
                
			menu={[
				{text: 'Home', link: '/'}, 
				{text: 'Cá nhân', link: '/page', submenu: [ 
					// {text:'Đơn chấm công', link:'/'},
                    {text:'Đơn chấm công', link:'/'},
                    {text:'Bảng chấm công', link:'/'},
                    {text:'Đề xuất', link:'/'},
                    {text:'KPI', link:'/'},
                    {text:'Bảng lương cá nhân', link:'/'},
                ]},

                {text: 'Quản lí', link: '/page', submenu: [ 
					{text:'Duyệt đơn chấm công', link:'/'},
                    {text:'Duyệt đề xuất', link:'/'},,
                    {text:'Giám sát chấm công', link:'/'},
                    {text:'Giám sát vị trí chấm công', link:'/'}

                ]},

            ]}
            
 
			header={
				<Header />
			}
			// footer={<Footer />} 
		/>
        </div>
            <div className="Menu_content col-md-10 ">
                <div className="Menu_item">
                    <NavLink  to='/focus' activeClassName="main-nav-active"><i className="fa fa-star"></i> Tiêu điểm</NavLink>
                </div>
                <div className="Menu_item">
                    <NavLink to='/calendar' activeClassName="main-nav-active"><i className="fa fa-calendar-alt"></i> Lịch biểu</NavLink>
                </div>
                <div className="Menu_item">
                    <NavLink to='/chat' activeClassName="main-nav-active"><i className="fa fa-comments"></i> Trao đổi</NavLink>
                </div>
                <div className="Menu_item">
                    <NavLink to='/notification' activeClassName="main-nav-active"><i className="fa fa-bullhorn"></i> Thông báo</NavLink>
                </div>
            </div>
        </div>
            

    )
}

const Header = () =>{
    return (
        <div>
        <div className="row MenuCanvas_Admin">
            <div className="MenuCanvasAdmin_img col-md-4">
                <img src={imgAdmin} width="60" height="60" alt="admin"/>
            </div>
            <div className="MenuCanvasAdmin_img col-md-8">
                <p>Lãnh Dạo</p>
                <p>Chưa chấm công</p>
            </div>
        </div>
          
        </div>
    )
}

// const Footer = () => {
// 	return(
// 		<div className="social-wrap">
// 			<h4>Socia Networks Footer</h4>
// 			<ul className="social">
// 				<li>
// 					<a href="facebook">Facebook</a>
// 				</li>
// 				<li>
// 					<a href="twitter">Twitter</a>
// 				</li>
// 			</ul>
// 		</div>
// 	)
// }

export default withRouter(MenuCanvas)
