import React, { useRef } from 'react'
import config from "../../config"

const Header = (props) => {
	const { locals: { current_user } } = props
	const inputSearchRef = useRef()

	const handleKeyDown = (e) => {
		if(e.keyCode === 13) {
			window.open(`https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org${inputSearchRef.current.value}`)
    }
	}

	return(
		<div className='navbar'>
			<div className='navbar-inner'>
    		<div className='container'>
      		<a className='brand' href='/'>
						{ config.site_logo ?  <img src={config.site_logo} /> : config.name }
      		</a>
        	<input type='text' ref={inputSearchRef} id='q' name='q' className='search-query span3' onKeyDown={handleKeyDown}/>
      		<ul className='nav pull-right'>
        		<li><a href='/'>首页</a></li>
						{
							current_user
							?	<li>
									<a href='/my/messages'>
										{ current_user.messages_count ? <span className='big messages_count'>{current_user.messages_count}</span> : "未读消息" }
									</a>
								</li>
							:	null
						}
        		<li><a href='/getstart'>新手入门</a></li>
        		<li><a href='/api'>API</a></li>
						{ (config.site_navs || []).map((nav, index) => <li key={index}><a href={nav[0]} target={nav[2]}>{nav[1]}</a></li>) }
						{
							current_user
							?	<>
									<li><a href='/setting'>设置</a></li>
									<li><a href='/signout' data-method="post" rel="nofollow">退出</a></li>
								</>
							:	<>
								<li><a href='/signup'>注册</a></li>
        				<li><a href='/signin'>登录</a></li>
								</>
						}
      		</ul>
		      <a className="btn btn-navbar" id="responsive-sidebar-trigger">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </a>
		    </div>
		  </div>
		</div>
	)
}

export default Header

