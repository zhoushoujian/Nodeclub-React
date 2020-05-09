import React from 'react';

const ReplyReply = (props) => {
	console.log("ReplyReply props", props)
	const { reply, topic, indexInCollection, current_user, csrf="" } = props

	const isUped = (user, reply) => {
    if (!reply.ups) return false
    return reply.ups.indexOf(user._id) !== -1;
  }

  return (
		<div
			className={`cell reply_area reply_item ${reply.ups && reply.ups.length >= topic.reply_up_threshold ? 'reply_highlight' : ''}`}
    	reply_id={reply._id} reply_to_id={reply.reply_id || ''} id={reply._id}
		>
  		<div className='author_content'>
    		<a href={`/user/${reply.author.loginname}`} className="user_avatar">
      		<img src={reply.author.avatar_url} title={reply.author.loginname} />
				</a>
    		<div className='user_info'>
      		<a className='dark reply_author' href={`/user/${reply.author.loginname}`}>{reply.author.loginname}</a>
      		<a className="reply_time" href={reply._id }>{`${indexInCollection + 1}楼 • ${reply.create_at}`}</a>
					{ reply.author.loginname == topic.author.loginname && <span className="reply_by_author">作者</span> }
    		</div>
    		<div className='user_action'>
					<span>
        		<i className={`fa up_btn ${(current_user && isUped(current_user, reply)) ? 'fa-thumbs-up uped' : 'fa-thumbs-o-up'} ${(!reply.ups || !reply.ups.length) ? 'invisible' : ''}`} title="喜欢"></i>
        		<span className="up-count">{reply.ups && reply.ups.length ? reply.ups.length : ''}</span>
      		</span>
					{
						(current_user && current_user.is_admin || (current_user && current_user._id.toString() == reply.author._id.toString()))
						?	<Fragment>
								<a href={`/reply/${reply._id}/edit`} className='edit_reply_btn'>
      					  <i className="fa fa-pencil-square-o" title='编辑'></i>
      					</a>
      					<a href='javascript:void(0);' className='delete_reply_btn'>
      					  <i className="fa fa-trash" title='删除'></i>
      					</a>
							</Fragment>
						:	null
					}
      		<span>{ current_user &&  <i className="fa fa-reply reply2_btn" title="回复"></i> }</span>
				</div>
  		</div>
  		<div className={`reply_content from-${reply.author.loginname}`} dangerouslySetInnerHTML={{__html: reply.content}}></div>
  		<div className='clearfix'>
    		<div className='reply2_area'>
					{
						current_user
						?	<form className='reply2_form' action={`/${topic._id}/reply`} method='post'>
								<input type='hidden' name='_csrf' value={csrf} />
								<input type='hidden' name='reply_id' value={reply._id} />
								<div className='markdown_editor in_editor'>
									<div className='markdown_in_editor'>
										<textarea className='span8 editor reply_editor' id={`reply2_editor_${reply._id}`} name='r_content' rows='4'></textarea>
										<div className='editor_buttons'>
											<input className='span-primary reply2_submit_btn submit_btn' type="submit" data-id={`reply._id`} data-loading-text="回复中.." value="回复" />
										</div>
									</div>
								</div>
							</form>
						:	null
					}
    		</div>
  		</div>
		</div>
  );
};

export default ReplyReply
