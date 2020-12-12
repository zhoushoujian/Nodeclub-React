import React, { Fragment } from 'react';
import config from "../../config"

function tabName(tab) {
	var pair = _.find(config.tabs, function (pair) {
		return pair[0] === tab;
	});
	if (pair) {
		return pair[1];
	}
}

const TopGood = (props) => {
	const { topic, tab } = props
	return (
		<Fragment>
			{
				(topic.top)
					? <span className='put_top'>置顶</span>
					: (topic.good)
						? <span className='put_good'>精华</span>
						: (typeof (tab) !== 'undefined' && tab === 'all' && tabName(topic.tab))
							? <span className="topiclist-tab">{tabName(topic.tab)}</span>
							: null
			}
		</Fragment>
	);
};

export default TopGood
