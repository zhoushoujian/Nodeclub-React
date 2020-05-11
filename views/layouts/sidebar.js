import React, { Fragment } from 'react'
import UserCard from "../components/userCard"
import Ads from "../components/ads"
import config from "../../config"

const SideBar = (props) => {
	const { user, current_user, no_reply_topics, tops, csrf, author_other_topics, need_author_other_topic=false,  } = props

	return(
		<div id='sidebar'>
		<div className='panel'>
				{
					(typeof(user) !== 'undefined' || current_user)
					?	<Fragment>
							<div className='header'>
								<span className='col_fade'>个人信息</span>
							</div>
							<div className='inner'>
								<UserCard current_user={typeof(user) === 'undefined' ? current_user : user} csrf={csrf} as="user" />
							</div>
						</Fragment>
					:	<div className='inner'>
							<p>{config.description}</p>
							<div>
								您可以
								<a href='/signin'>登录</a>
								或
								<a href='/signup'>注册</a>
								, 也可以
								<a href="/auth/github">
									<span className="span-info">
										通过 GitHub 登录
									</span>
								</a>
							</div>
						</div>
				}
  		</div>
			{
				current_user && <div className="panel">
					<div className='inner'>
						<a href='/topic/create' id='create_topic_btn'>
							<span className='span-success'>发布话题</span>
						</a>
					</div>
				</div>
			}
			{ (!current_user || !current_user.isAdvanced) && <Ads /> }
			{
				need_author_other_topic && <div className="panel">
					<div className='header'>
      			<span className='col_fade'>作者其它话题</span>
    			</div>
    			<div className='inner'>
						{
							typeof(author_other_topics) !== 'undefined' && (author_other_topics.length > 0)
							?	<ul className='unstyled'>
									{
										author_other_topics.map(((topic, index) => (
											<li key={index}>
												<div><a className='dark topic_title' href={`/topic/${topic._id}`} title={`topic.title`}>{topic.title}</a>
												</div>
											</li>
										)))
									}
								</ul>
							:	<p>无</p>
						}
    			</div>
				</div>
			}
			{
				(typeof(no_reply_topics) !== 'undefined')
				?	 <div className='panel'>
						<div className='header'>
							<span className='col_fade'>无人回复的话题</span>
						</div>
						<div className='inner'>
							{
								(no_reply_topics.length > 0)
								?	<ul className="unstyled">
										{
											no_reply_topics.map((topic, index) => (
												<li key={index}>
												  <div>
														<a className='dark topic_title' href={`/topic/${topic._id}`} title={topic.title}>{topic.title}</a>
													</div>
												</li>
											))
										}
									</ul>
								:	<p>无</p>
							}
						</div>
					</div>
				:	null
			}
			{
				(typeof(tops) !== 'undefined')
				?	<div className='panel'>
						<div className='header'>
							<span className='col_fade'>积分榜</span>
							&nbsp;
							<a className='dark' href='/users/top100'>TOP 100 &gt;&gt;</a>
						</div>
						<div className='inner'>
							{ (tops.length > 0)
								? <ol>{
									tops.map((user, index) => (
										<li key={index}>
										  <span className='top_score'>{user.score}</span>
										  <span className="user_name"><a href={`/user/${user.loginname}`}>{user.loginname}</a></span>
										</li>
									))
								}</ol>
								: <p>无</p>
							}
						</div>
					</div>
				:	null
			}
		  <div className='panel'>
    		<div className='header'>
    		  <span className='col_fade'>友情社区</span>
    		</div>
    		<div className='inner'>
    		  <ol className="friendship-community">
    		    <li>
    		      <a href="https://ruby-china.org/" target="_blank">
    		        <img src="/public/images/ruby-china-20150529.png" />
    		      </a>
    		    </li>
    		    <div className="sep10"></div>
    		    <li>
    		      <a href="http://golangtc.com/" target="_blank">
    		        <img src='/public/images/golangtc-logo.png' />
    		      </a>
    		    </li>
    		    <div className="sep10"></div>
    		    <li>
    		      <a href="http://phphub.org/" target="_blank">
    		        <img src="/public/images/phphub-logo.png" />
    		      </a>
    		    </li>
    		  </ol>
    		</div>
  		</div>
		  <div className='panel'>
  		  <div className='header'>
  		    <span className='col_fade'>客户端二维码</span>
  		  </div>
  		  <div className='inner cnode-app-download'>
  		    <img width='200' src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" />
  		    <br />
  		    <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
  		  </div>
  		</div>
		</div>
	)
}

export default SideBar

