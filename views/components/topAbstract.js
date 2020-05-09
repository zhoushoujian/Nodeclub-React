import React, { Fragment } from 'react';
import TopGood from './topGood'

const TopAbstract = (props) => {
	const { topic={}, tab } = props
  return (
		<div className='cell'>
  		<a className="user_avatar pull-left" href={`/user/${topic.author.loginname}`}>
    		<img src={topic.author.avatar} title={topic.author.loginname} />
  		</a>
  		<span className="reply_count pull-left">
  		  <span className="count_of_replies" title="回复数">{topic.reply_count}</span>
  		  <span className="count_seperator">/</span>
  		  <span className="count_of_visits" title='点击数'>{topic.visit_count}</span>
  		</span>
			{(topic.reply && topic.reply.author) && <Fragment>
				<a className='last_time pull-right' href={`/topic/${topic._id}#${topic.reply._id}`}>
  			  <img className="user_small_avatar" src={topic.reply.author.avatar} />
  			  <span className="last_active_time">{topic.reply.last_reply_at}</span>
  			</a>
			</Fragment>}
			{ (!topic.reply) && <span className='last_time pull-right'><span className="last_active_time">{topic.create_at}</span></span> }
  		<div className="topic_title_wrapper">
				<TopGood topic={topic} tab={tab} />
    		<a className='topic_title' href={"/topic/"+topic._id} title={topic.title} >{topic.title}</a>
  		</div>
		</div>
  );
};

export default TopAbstract
