import React, { Fragment } from 'react';
import { tabName } from "../../common/render_helper"

const TopGood = (props) => {
	const { topic, tab } = props

  return (
		<Fragment>
			{
				(topic.top)
				?	<span className='put_top'>置顶</span>
				:	(topic.good)
				?	<span className='put_good'>精华</span>
				:	(typeof(tab) !== 'undefined' && tab === 'all' && tabName(topic.tab))
				?	<span className="topiclist-tab">{tabName(topic.tab)}</span>
				:	null
			}
		</Fragment>
  );
};

export default TopGood
