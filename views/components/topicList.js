import React, { useEffect } from 'react';
import TopAbstract from './topAbstract'

const TopicList = (props) => {
	const { current_page, base, pages, topic, tab } = props

	useEffect(() => {
		$(document).ready(function () {
			const $nav = $('.pagination');
			const current_page = $nav.attr('current_page');
			if (current_page) {
				$nav.find('li').each(function () {
					const $li = $(this);
					const $a = $li.find('a');
					if ($a.html() == current_page) {
						$li.addClass('active');
						$a.removeAttr('href');
					}
				});
			}
		});
	}, [])

	return (
		<div id="topic_list">
			<TopAbstract topic={topic} tab={tab} />
		</div>
	);
};

export default TopicList
