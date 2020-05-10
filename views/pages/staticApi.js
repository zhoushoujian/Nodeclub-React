import React from 'react'
import Meta from "./meta"
import "../theme/less/index.less"

const StaticApi = () => {

	return(
		<div id="main">
			<Meta />
			<div id="content">
			<div className="panel">
    		<div className="header">
    		  <ul className="breadcrumb">
    		    <li><a href="/">主页</a><span className="divider">/</span></li>
    		    <li className="active">API</li>
    		  </ul>
    		</div>
    		<div className="inner topic">
    		  <div className="topic_content">
    		    <div className="markdown-text">
							<p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1" target="_blank">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
							<p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
							<h3>主题</h3>
							<h4>get /topics 主题首页</h4>
							<p>接收 get 参数</p>
							<ul>
								<li>page <code>Number</code> 页数</li>
								<li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
								<li>limit <code>Number</code> 每一页的主题数量</li>
								<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
							</ul>
							<p>示例：<a href="/api/v1/topics" target="_blank">/api/v1/topics</a></p>
							<h4>get /topic/:id 主题详情</h4>
							<p>接收 get 参数</p>
							<ul>
								<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
								<li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
							</ul>
							<p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
							<h3>主题收藏</h3>
							<h4>post /topic_collect/collect 收藏主题</h4>
							<p>接收 post 参数</p>
							<ul>
								<li>accesstoken <code>String</code> 用户的 accessToken</li>
								<li>topic_id <code>String</code> 主题的id</li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js">
								<code>
									<span className="pun"></span><span className="str">"success"</span>
									<span className="pun">:</span><span className="pln"> </span>
									<span className="kwd">true</span><span className="pun"></span>
								</code>
							</pre>
							<h4>post /topic_collect/de_collect 取消主题</h4>
							<p>接收 post 参数</p>
							<ul>
								<li>accesstoken <code>String</code> 用户的 accessToken</li>
								<li>topic_id <code>String</code> 主题的id</li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js">
								<code>
									<span className="pun"></span><span className="pln">success</span><span className="pun">:</span>
									<span className="pln"> </span><span className="kwd">true</span><span className="pun"></span>
								</code>
							</pre>
							<h4>get /topic_collect/:loginname 用户所收藏的主题</h4>
							<p>示例：<a href="/api/v1/topic_collect/alsotang" target="_blank">/api/v1/topic_collect/alsotang</a></p>
							<h3>用户</h3>
							<h4>get /user/:loginname 用户详情</h4>
							<p>示例：<a href="/api/v1/user/alsotang" target="_blank">/api/v1/user/alsotang</a></p>
							<h4>post /accesstoken 验证 accessToken 的正确性</h4>
							<p>接收 post 参数</p>
							<ul>
							<li>accesstoken <code>String</code> 用户的 accessToken</li>
							</ul>
							<p>如果成功匹配上用户，返回成功信息。否则 403。</p>
							<p>返回值示例</p>
							<pre className="prettyprint language-js"><code><span className="pun"></span><span className="pln">success</span><span className="pun">:</span><span className="pln"> </span><span className="kwd">true</span><span className="pun">,</span><span className="pln"> loginname</span><span className="pun">:</span><span className="pln"> req</span><span className="pun">.</span><span className="pln">user</span><span className="pun">.</span><span className="pln">loginname</span><span className="pun">,</span><span className="pln"> id</span><span className="pun">:</span><span className="pln"> req</span><span className="pun">.</span><span className="pln">user</span><span className="pun">.</span><span className="pln">id</span><span className="pun">,</span><span className="pln"> avatar_url</span><span className="pun">:</span><span className="pln"> req</span><span className="pun">.</span><span className="pln">user</span><span className="pun">.</span><span className="pln">avatar_url</span><span className="pun"></span></code></pre><h3>消息通知</h3>
							<h4>get /message/count 获取未读消息数</h4>
							<p>接收 get 参数</p>
							<ul>
							<li>accesstoken <code>String</code></li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js"><code><span className="pun"></span><span className="pln"> data</span><span className="pun">:</span><span className="pln"> </span><span className="lit">3</span><span className="pln"> </span><span className="pun"></span></code></pre><h4>get /messages 获取已读和未读消息</h4>
							<p>接收 get 参数</p>
							<ul>
								<li>accesstoken <code>String</code></li>
								<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js">
								<code>
									<span className="pun"></span><span className="pln">data</span><span className="pun">:</span><span className="pln"> </span><span className="pun"></span>
									<span className="pln">has_read_messages</span><span className="pun">:</span><span className="pln"> </span><span className="pun">[],</span>
									<span className="pln">hasnot_read_messages</span><span className="pun">:</span><span className="pln"> </span><span className="pun">[</span>
									<span className="pln"></span><span className="pun"></span><span className="pln">id</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"543fb7abae523bbc80412b26"</span><span className="pun">,</span><span className="pln">type</span><span className="pun">:</span>
									<span className="pln"> </span><span className="str">"at"</span><span className="pun">,</span><span className="pln">has_read</span><span className="pun">:</span>
									<span className="pln"> </span><span className="kwd">false</span><span className="pun">,</span><span className="pln">author</span><span className="pun">:</span>
									<span className="pln"> </span><span className="pun"></span><span className="pln">loginname</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"alsotang"</span><span className="pun">,</span><span className="pln">avatar_url</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"https://avatars.githubusercontent.com/u/1147375?v=2"</span><span className="pln"></span><span className="pun">},</span><span className="pln">topic</span>
									<span className="pun">:</span><span className="pln"> </span><span className="pun"></span><span className="pln">id</span><span className="pun">:</span>
									<span className="pln"> </span><span className="str">"542d6ecb9ecb3db94b2b3d0f"</span><span className="pun">,</span><span className="pln">title</span><span className="pun">:</span>
									<span className="pln"> </span><span className="str">"adfadfadfasdf"</span><span className="pun">,</span><span className="pln">last_reply_at</span><span className="pun">:</span>
									<span className="pln"> </span><span className="str">"2014-10-18T07:47:22.563Z"</span><span className="pln"></span><span className="pun">,</span><span className="pln">reply</span>
									<span className="pun">:</span><span className="pln"> </span><span className="pun"></span><span className="pln">id</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"543fb7abae523bbc80412b24"</span><span className="pun">,</span><span className="pln">content</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"[@alsotang](/user/alsotang) 哈哈"</span><span className="pun">,</span><span className="pln">ups</span><span className="pun">:</span><span className="pln"> </span>
									<span className="pun">[</span><span className="pln"> </span><span className="pun">],</span><span className="pln">create_at</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">"2014-10-16T12:18:51.566Z"</span><span className="pln"></span><span className="pun"></span><span className="pln"></span><span className="pun">,</span>
									<span className="pln"></span><span className="pun">...</span><span className="pln"></span><span className="pun">]</span><span className="pln"></span><span className="pun"></span>
									<span className="pln"></span><span className="pun"></span>
								</code>
							</pre>
							<h4>post /message/mark_all 标记全部已读</h4>
							<p>接收 post 参数</p>
							<ul>
								<li>accesstoken <code>String</code></li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js">
								<code>
									<span className="pun"></span><span className="pln"> success</span><span className="pun">:</span><span className="pln"> </span><span className="kwd">true</span>
									<span className="pun">,</span><span className="pln">marked_msgs</span><span className="pun">:</span><span className="pln"> </span><span className="pun">[</span>
									<span className="pln"> </span><span className="pun"></span><span className="pln"> id</span><span className="pun">:</span><span className="pln"> </span>
									<span className="str">'544ce385aeaeb5931556c6f9'</span><span className="pln"> </span><span className="pun"></span><span className="pln"> </span>
									<span className="pun">]</span><span className="pln"> </span><span className="pun"></span>
								</code>
							</pre>
							<h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
							<p>请求示例：<a href="/message/mark_one/58ec7d39da8344a81eee0c14" target="_blank">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
							<p>接收 post 参数</p>
							<ul>
							<li>accesstoken <code>String</code></li>
							</ul>
							<p>返回值示例</p>
							<pre className="prettyprint language-js">
								<code>
									<span className="pun"></span><span className="pln">success</span><span className="pun">:</span>
									<span className="pln"> </span><span className="kwd">true</span><span className="pun">,</span><span className="pln">marked_msg_id</span>
									<span className="pun">:</span><span className="pln"> </span><span className="str">"58ec7d39da8344a81eee0c14"</span>
									<span className="pln"></span><span className="pun"></span>
								</code>
							</pre>
							<h3>知识点</h3>
							<ol>
								<li>
									如何获取 accessToken？
									用户登录后，在设置页面可以看到自己的 accessToken。
									建议各移动端应用使用手机扫码的形式登录，验证使用
									<code>/accesstoken</code> 接口，登录后长期保存 accessToken。
								</li>
							</ol>
						</div>
  			    </div>
  			  </div>
  			</div>
			</div>
		</div>
	)
}

StaticApi.getInitialProps = ({ req, res }) => {
	if (req) {
		return {
			data: res ? res.data : null,
			locals: res ? res.locals : null,
			user: req.user,
		};
	}
}

export default StaticApi

