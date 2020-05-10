import React, { Fragment } from 'react'

const MessageMessage = (props) => {
	console.log("MessageMessage props", props)
	const { message } = props

	return(
		<Fragment>
			{
				(message.has_read)
				?	<div className='cell' message_id={message._id}></div>
				:	<div className='cell message' message_id={message._id}>
						{
							(message.type == 'reply')
							&&	<span>
										<a href={`/user/${message.author.loginname}`} target='_blank'>{message.author.loginname}</a>
										回复了你的话题
										<a href={`/topic/${message.topic._id + (message.reply ? '#' + message.reply._id : '')}`} target='_blank'>{message.topic.title}</a>
									</span>
						}
						{
							(message.type == 'reply2')
								&& <span>
								<a href={`/user/${message.author.loginname}`} target='_blank'>{message.author.loginname}</a>
								在话题
								<a href={`/topic/${message.topic._id + (message.reply ? '#' + message.reply._id : '')}`} target='_blank'>{message.topic.title}</a>
								中回复了你的回复
							</span>
						}
						{ (message.type == 'follow') &&	<span><a href={`/user/${message.author.loginname}`} target='_blank'>{message.author.loginname}</a>关注了你</span> }
						{
							(message.type == 'at')
							&&	<span>
										<a href={`/user/${message.author.loginname}`} target='_blank'>{message.author.loginname}</a>
										在话题
										<a href={`/topic/${message.topic._id + (message.reply ? '#' + message.reply._id : '')}`} target='_blank'>{message.topic.title}</a>
										中@了你
									</span>
						}
					</div>
			}
		</Fragment>
	)
}

export default MessageMessage
