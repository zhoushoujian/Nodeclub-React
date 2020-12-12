import React, { useEffect, Fragment } from 'react';
import Sponsors from '../components/sponsors'
import config from "../../config"

const Footer = () => {

	useEffect(() => {
		if (config.google_tracker_id) {
			// google analytics
			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date(); a = s.createElement(o),
					m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js'), 'ga';
			ga('create', config.google_tracker_id, 'auto');
			ga('send', 'pageview');
		}
		var windowHeight = $(window).height();
		var $backtotop = $('#backtotop');
		var top = windowHeight - $backtotop.height() - 200;
		function moveBacktotop() {
			$backtotop.css({ top: top, right: 0 });
		}
		function footerFixBottom() {
			if ($(document.body).height() < windowHeight) {
				$("#footer").addClass('fix-bottom');
			} else {
				$("#footer").removeClass('fix-bottom');
			}
		}
		$backtotop.click(function () {
			$('html,body').animate({ scrollTop: 0 });
			return false;
		});
		$(window).scroll(function () {
			var windowHeight = $(window).scrollTop();
			if (windowHeight > 200) {
				$backtotop.fadeIn();
			} else {
				$backtotop.fadeOut();
			}
		});
		moveBacktotop();
		footerFixBottom();
		$(window).resize(moveBacktotop);
		$(window).resize(footerFixBottom);
	}, [])

	return (
		<Fragment>
			<div id='backtotop'>回到顶部</div>
			<div id='footer'>
				<div id='footer_main'>
					<div className="links">
						<a className='dark' href='/rss'>RSS</a>
						{` | `}
						<a className='dark' href='https://github.com/zhoushoujian/Nodeclub-React'>源码地址</a>
						{` | `}
						<a className='dark' href='https://github.com/cnodejs/nodeclub/'>原项目地址</a>
					</div>
					<Sponsors />
				</div>
			</div>
			<div id="sidebar-mask"></div>
		</Fragment>
	);
};

export default Footer
