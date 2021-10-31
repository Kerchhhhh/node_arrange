var db = require('./dbhelpers');
var fs = require('fs');
var querystring = require('querystring');

function Patent() {
	this.author;
	this.patent;
	this.patnumber;
}

module.exports = Patent;

// 保存专利信息 -- 后台使用方法
Patent.prototype.save = function() {
	var sql = "";
}

// 根据专利号查找专利
Patent.prototype.findByNum = function(title, callback) {
	var sql = "SELECT author, patent, patnumber FROM patent WHERE title LIKE '%" + title + "%';";
}
