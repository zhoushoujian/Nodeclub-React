import React from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import "../theme/less/index.less"

const StaticFaq = (props) => {
  const { locals: { current_user } } = props

  return (
    <div id="main">
      <Meta />
      <div id="content">
        <div className="panel">
          <div className="header">
            <ul className="breadcrumb">
              <li><a href="/">主页</a><span className="divider">/</span></li>
              <li className="active">FAQ</li>
            </ul>
          </div>
          <div className="inner topic">
            <h3>FAQ</h3>
            <hr />
            <div className="topic_content">
              <p>A：CNode 社区和 Node Club 是什么关系？</p>
              <p>Q：Node Club 是一个用 Node.js 和 MongoDB 开发的开源社区软件，CNode 是基于 Node Club 的 Node.js 中文技术社区。</p>
            </div>
          </div>
        </div>
      </div>
      <SideBar current_user={current_user} />
    </div>
  )
}

StaticFaq.getInitialProps = ({ req, res }) => {
  if (req) {
    return {
      data: res ? res.data : null,
      locals: res ? res.locals : null,
      user: req.user,
    };
  }
}

export default StaticFaq

