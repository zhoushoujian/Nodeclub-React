import React, { useEffect } from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import "../theme/less/index.less"

const UserSetting = (props) => {
	console.log("UserSetting props", props)
	const { data: { user={} }, locals: { current_user } } = props
	const { accessToken, error, success, loginname, email, url, location, weibo, signature, csrf, } = user

	useEffect(() => {
		$(function() {
			// qrcode generate
			var accessToken = accessToken;
			var qrcode = new QRCode(document.getElementById("access-token-qrcode"), {
				text: accessToken,
				width: 200,
				height: 200,
			});
			// END qrcode generate
			generateCode(qrcode)

			// refreshToken
			$(".refreshToken").on("click", function() {
				generateCode(qrcode)
			})
		});
	}, [])

	const generateCode = (qrcode) => {
		$.post("/user/refresh_token", function(result) {
			if (result.status === 'success') {
				$("#accessToken").text(result.accessToken);
				qrcode.makeCode(result.accessToken)
			} else {
				alert(result.message);
			}
		})
	}

	return(
		<div id="main">
			<Meta />
			<div id='content'>
  			<div className='panel'>
  			  <div className='header'>
  			    <ul className='breadcrumb'>
  			      <li><a href='/'>主页</a><span className='divider'>/</span></li>
  			      <li className='active'>设置</li>
  			    </ul>
  			  </div>
  			  <div className='inner'>
						{
							(typeof(error) !== 'undefined' && error)
							&&	<div className="alert alert-error">
										<a className="close" data-dismiss="alert" href="#">&times;</a>
										<strong>{error}</strong>
									</div>
						}
						{
							(typeof(success) !== 'undefined' && success)
							&&	<div className="alert alert-success">
										<strong>{success}</strong>
									</div>
						}
  			    <form id='setting_form' className='form-horizontal' action='/setting' method='post'>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='name'>用户名</label>
  			        <div className='controls'>
  			          <input className='input-xlarge readonly' id='name' name='name' size='30' type='text' readOnly={true} value={loginname} />
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='email'>电子邮件</label>
  			        <div className='controls'>
  			          <input className='input-xlarge readonly' id='email' name='email' size='30' type='text' readOnly={true} value={email}/>
  			          <p>同时决定了 Gravatar 头像</p>
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='url'>个人网站</label>
  			        <div className='controls'>
  			          <input className='input-xlarge' id='url' name='url' size='30' type='text' defaultValue={typeof(url) !== 'undefined' ? url : ''} />
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='location'>所在地点</label>
  			        <div className='controls'>
									<input className='input-xlarge' id='location' name='location' size='30' type='text'
										defaultValue={typeof(location) !== 'undefined' ? location : ''} />
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='weibo'>微博</label>
  			        <div className='controls'>
									<input className='input-xlarge' id='weibo' name='weibo' size='30' type='text'
										defaultValue={typeof(weibo) !== 'undefined' ? weibo : ''} placeholder="e.g. http://weibo.com/cnodejs"/>
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='github'>GitHub</label>
  			        <div className='controls'>
									<input className='input-xlarge' id='github' name='github' size='30' type='text'
										defaultValue={typeof(githubUsername) !== 'undefined' ? '@' + githubUsername : ''} placeholder="@username" readOnly={true} />
  			          <p>请通过 GitHub 登陆 CNode 来修改此处</p>
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='signature'>个性签名</label>
  			        <div className='controls'>
								<textarea className='input-xlarge' id='signature' name='signature' size='30' defaultValue={typeof(signature) !== 'undefined' ? signature : ""}></textarea>
  			        </div>
  			      </div>
  			      <input type='hidden' id='action' name='action' value='change_setting'/>
  			      <input type='hidden' name='_csrf' value={csrf}/>
  			      <div className='form-actions'>
  			        <input type='submit' className='span-primary submit_btn' data-loading-text="保存中.." value='保存设置'/>
  			      </div>
  			    </form>
  			  </div>
  			</div>

  			<div className='panel'>
  			  <div className='header'>
  			    <span className='col_fade'>更改密码</span>
  			  </div>
  			  <div className='inner'>
  			    <form id='change_pass_form' className='form-horizontal' action='/setting' method='post'>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='old_pass'>当前密码</label>
  			        <div className='controls'>
  			          <input className='input-xlarge' type='password' id='old_pass' name='old_pass' size='30'/>
  			        </div>
  			      </div>
  			      <div className='control-group'>
  			        <label className='control-label' htmlFor='new_pass'>新密码</label>
  			        <div className='controls'>
  			          <input className='input-xlarge' type='password' id='new_pass' name='new_pass' size='30'/>
  			        </div>
  			      </div>
  			      <input type='hidden' id='action' name='action' value='change_password'/>
  			      <input type='hidden' name='_csrf' value={csrf} />
  			      <div className='form-actions'>
  			        <input type='submit' className='span-primary submit_btn' data-loading-text="更改中.." value='更改密码'/>
  			      </div>
  			    </form>
  			  </div>
  			</div>

  			<div className='panel'>
  			  <div className='header'>
  			    <span className='col_fade'>Access Token</span>
  			  </div>
  			  <div className='inner'>
  			    <div>
  			      <input type='button' className='span-primary refreshToken' value='刷新Token'/>
  			    </div>
  			    <div>
  			      <span>字符串：</span>
							<span id="accessToken">{accessToken}</span>
  			    </div>
  			    <div>
  			      <span>二维码：</span>
  			      <span id="access-token-qrcode"></span>
  			    </div>
  			  </div>
  			</div>
			</div>

			<SideBar current_user={current_user} />
		</div>
	)
}

UserSetting.getInitialProps = ({ req, res }) => {
	if (req) {
		return {
			data: res ? res.data : {},
			locals: res ? res.locals : {},
			user: req.user,
		};
	}
}

export default UserSetting

