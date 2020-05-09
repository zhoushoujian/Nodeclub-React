var TopicCollect = require('../models').TopicCollect;
var _ = require('lodash')
var tools = require('../common/tools');

exports.getTopicCollect = function (userId, topicId, callback) {
  TopicCollect.findOne({user_id: userId, topic_id: topicId}, (err, results) => {
		results = tools.formatMongooseObject(results)
		return callback(err, results)
	});
};

exports.getTopicCollectsByUserId = function (userId, opt, callback) {
  var defaultOpt = {sort: '-create_at'};
  opt = _.assign(defaultOpt, opt)
  TopicCollect.find({user_id: userId}, '', opt, (err, results) => {
		results = tools.formatMongooseObject(results)
		return callback(err, results)
	});
};

exports.newAndSave = function (userId, topicId, callback) {
  var topic_collect      = new TopicCollect();
  topic_collect.user_id  = userId;
  topic_collect.topic_id = topicId;
  topic_collect.save(callback);
};

exports.remove = function (userId, topicId, callback) {
  TopicCollect.deleteOne({user_id: userId, topic_id: topicId}, callback);
};

