import React from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import TopicList from "../components/topicList"
import "../theme/less/index.less"

const Index = (props) => {
	const {data: { tabs=[], tab="all", topics, pages, current_page, no_reply_topics, tops }, locals: { current_user }, user} = props

	const base = "/"
	const base_url = base + (base.indexOf('?') < 0 ? '?' : '&') + 'tab=' + (typeof tab !== 'undefined' ? tab : '') + '&page='
	const page_start = current_page - 2 > 0 ? current_page - 2 : 1;
	const page_end = page_start + 4 >= pages ? pages : page_start + 4;
	const arr = []
	for(var i = page_start; i <= page_end; i++) {
		arr.push(i)
	}

	return(
		<div id="main">
			<Meta />
			<div id="content">
        <div className="panel">
          <div className="header">
            {
              [['all', '全部'], ['good', '精华']].concat(tabs).map((pair, index) => (
                <a key={index} href={`/?tab=${pair[0]}`} className={`topic-tab ${pair[0] === tab ? 'current-tab' : ''}`}>{pair[1]}</a>
              ))
            }
          </div>
          {
            typeof(topics) !== 'undefined' && topics.length > 0
            ? <div className="inner no-padding">
								{ topics.map((topic, index) => <TopicList key={index} tab={tab} topic={topic} />) }
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
							</div>
            : <div className="inner">
                <p>无话题</p>
              </div>
          }
        </div>
      </div>
			<SideBar user={user} current_user={current_user} no_reply_topics={no_reply_topics} tops={tops}  />
		</div>
	)
}

Index.getInitialProps = ({ req, res }) => {
	if (req) {
		return {
			data: res ? res.data : null,
			locals: res ? res.locals : null,
			user: req.user,
		};
	}
}

export default Index

