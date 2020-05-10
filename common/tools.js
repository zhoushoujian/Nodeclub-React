var bcrypt = require('bcryptjs');
var moment = require('moment');
var logger = require('./logger');

moment.locale('zh-cn'); // 使用中文

// 格式化时间
exports.formatDate = function (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};

exports.validateId = function (str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
};

exports.bhash = function (str, callback) {
  bcrypt.hash(str, 10, callback);
};

exports.bcompare = function (str, hash, callback) {
  bcrypt.compare(str, hash, callback);
};

exports.formatMongooseObject = (param) => {
	try{
		if(Array.isArray(param)){
			param = param.map(item => item.toObject ? item.toObject() : item)
		} else if(param) {
			param = param.toObject ? param.toObject() : param
		}
		return param
	} catch(err){
		logger.error("formatMongooseObject param", param, 'err', err)
		return param
	}
}

exports.renderAndSend = async (req, res, pagePath, queryParams) => {
		try {
			logger.info("data script size: ", res.data ? JSON.stringify(res.data).length : 0)
			const time = Date.now();
			logger.info('======> Generating View with Next');
			const html = await res.client.render(req, res, pagePath, queryParams);
			logger.info('======> Time Taken by Next: ', Date.now() - time);
			return res.send(html);
		} catch (e) {
			logger.error('======> renderToHTML Error', e.stack || e.toString());
			res.send("error happened")
		}
}
