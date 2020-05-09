import React from 'react'

const Sponsors = () => {
	return(
		<div className='col_fade'>
  		<p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
  		<p>
				<span>服务器赞助商为 </span>
				<a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"
					target="_blank" className="sponsor_outlink" data-label="digitalocean">
      		<img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="digitalocean" alt="digitalocean" width="92px"/>
    		</a>
  			<span> ，存储赞助商为 </span>
    		<a href="http://www.qiniu.com/?ref=cnode" target="_blank" className="sponsor_outlink" data-label="qiniu_bottom">
      		<img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px"/>
    		</a>
				<span> ,&nbsp; 由 </span>
				<a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" className="sponsor_outlink" data-label="qiniu_bottom">
      		<img style={{width: "166px"}} src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="七牛云存储" alt="七牛云存储" width="115px"/>
    		</a>
				<span> 提供应用性能服务。</span>
  		</p>
  		<p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
		</div>
	)
}

export default Sponsors
