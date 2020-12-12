import React from 'react'
import Meta from "./meta"
import SideBar from "../layouts/sidebar"
import "../theme/less/index.less"

const StaticGetStart = (props) => {
  console.log("StaticGetStart props", props)
  const { data: { pageTitle }, locals: { current_user } } = props

  return (
    <div id="main">
      <Meta pageTitle={pageTitle} />
      <div id="content">
        <div className="panel">
          <div className="header">
            <ul className="breadcrumb">
              <li><a href="/">主页</a><span className="divider">/</span></li>
              <li className="active">{pageTitle}</li>
            </ul>
          </div>
          <div className="inner topic">
            <div className="topic_content">
              <div className="markdown-text">
                <h2>Node.js 入门</h2>
                <p>《<strong>汇智网 Node.js 课程</strong>》</p>
                <p><a href="http://www.hubwiz.com/course/?type=nodes" target="_blank">http://www.hubwiz.com/course/?type=nodes</a></p>
                <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
                <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                <p>《<strong>Node.js 包教不包会</strong>》</p>
                <p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
                <p>《<strong>ECMAScript 6入门</strong>》</p>
                <p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
                <p>《<strong>七天学会NodeJS</strong>》</p>
                <p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
                <p>《<strong>Node入门-<em>一本全面的Node.js教程</em></strong>》</p>
                <p><a href="http://www.nodebeginner.org/index-zh-cn.html" target="_blank">http://www.nodebeginner.org/index-zh-cn.html</a></p>
                <h2>Node.js 资源</h2>
                <p>《<strong>node weekly</strong>》</p>
                <p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
                <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
                <p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
                <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
                <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
                <p>《<strong>Node.js Books</strong>》</p>
                <p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
                <h2>Node.js 名人</h2>
                <p>《<strong>名人堂</strong>》</p>
                <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
                <h2>Node.js 服务器</h2>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar current_user={current_user} />
    </div>
  )
}

StaticGetStart.getInitialProps = ({ req, res }) => {
  if (req) {
    return {
      data: res ? res.data : null,
      locals: res ? res.locals : null,
      user: req.user,
    };
  }
}

export default StaticGetStart

