var multiline = require('multiline');
var { renderAndSend } = require("../common/tools")
// static page
// About
exports.about = function (req, res, next) {
	res.data = { pageTitle: '关于我们' }
	return renderAndSend(req, res, '/staticAbout', req.query)
};

// FAQ
exports.faq = function (req, res, next) {
	return renderAndSend(req, res, '/staticFaq', req.query)
};

exports.getstart = function (req, res) {
	res.data = {
		pageTitle: 'Node.js 新手入门'
	}
	return renderAndSend(req, res, '/staticGetStart', req.query)
};


exports.robots = function (req, res, next) {
  res.type('text/plain');
  res.send(multiline(function () {;
/*
# See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#
# To ban all spiders from the entire site uncomment the next two lines:
# User-Agent: *
# Disallow: /
*/
  }));
};

exports.api = function (req, res, next) {
	return renderAndSend(req, res, '/staticApi', req.query)
};
