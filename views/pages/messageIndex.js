import React from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import MessageMessage from "../components/messageMessage"
import "../theme/less/index.less"

const messageIndex = (props) => {
	console.log("messageIndex props", props)
	const { data: { hasnot_read_messages, has_read_messages }, locals: { current_user } } = props

	return (
		<div id="main">
			<Meta />
			<div id='content'>
				<div className='panel'>
					<div className='header'>
						<ul className='breadcrumb'>
							<li><a href='/'>主页</a><span className='divider'>/</span></li>
							<li className='active'>新消息</li>
						</ul>
					</div>
					{
						(typeof (hasnot_read_messages) !== 'undefined' && hasnot_read_messages.length > 0)
							? hasnot_read_messages.map((message, index) => <MessageMessage message={message} key={index} />)
							: <div className='inner'><p>无消息</p> </div>
					}
				</div>
				<div className='panel'>
					<div className='header'>
						<span className='col_fade'>过往信息</span>
					</div>
					{
						(typeof (has_read_messages) !== 'undefined' && has_read_messages.length > 0)
							? has_read_messages.map((message, index) => <MessageMessage message={message} key={index} />)
							: <div className='inner'><p>无消息</p></div>
					}
				</div>
			</div>
			<SideBar current_user={current_user} />
		</div>
	)
}

messageIndex.getInitialProps = ({ req, res }) => {
	if (req) {
		return {
			data: res ? res.data : {},
			locals: res ? res.locals : {},
			user: req.user,
		};
	}
}

export default messageIndex

