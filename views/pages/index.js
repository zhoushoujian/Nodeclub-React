import React from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import TopicList from "../components/topicList"
import "../theme/less/index.less"

const Index = (props) => {
	const {data: { tabs=[], tab="all", topics, pages, current_page, no_reply_topics, tops }, locals: { current_user }, user} = props
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
								{ topics.map((topic, index) => <TopicList key={index} tab={tab} topic={topic} pages={pages} current_page={current_page} base="/" />) }
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

