import React, { Fragment, useEffect } from 'react';
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

	const base_url = base + (base.indexOf('?') < 0 ? '?' : '&') + 'tab=' + (typeof tab !== 'undefined' ? tab : '') + '&page='
	const page_start = current_page - 2 > 0 ? current_page - 2 : 1;
	const page_end = page_start + 4 >= pages ? pages : page_start + 4;
	const arr = []
	for(var i = page_start; i <= page_end; i++) {
		arr.push(i)
	}
  return (
		<Fragment>
			<div id="topic_list">
				<TopAbstract topic={topic} tab={tab} />
			</div>
			<div className='pagination' current_page={current_page}>
				<ul>
					{ current_page == 1 ?  <li className='disabled'><a>«</a></li> : <li><a href={base_url}>«</a></li> }
					{ (page_start > 1) && <li><a>...</a></li> }
					{
						arr.map((item, index) => {
							if (item === current_page){
								return (<li key={index} className='disabled'><a>{item}</a></li>)
							} else {
								return (<li key={index}><a href={base_url + item}>{item}</a></li>)
							}
						})
					}
					{ (page_end < pages ) &&  <li><a>...</a></li> }
					{ (current_page == pages) ? <li className='disabled'><a>»</a></li> : <li><a href={base_url + pages}>»</a></li> }
  			</ul>
			</div>
		</Fragment>
  );
};

export default TopicList
