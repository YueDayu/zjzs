/**
 * Created by Yue Dayu on 2015/12/16.
 */

var model = require('./models/models');

var TICKET_DB = model.tickets;
var USER_DB = model.students;
var ACTIVITY_DB = model.activities;
var db = model.db;

var num = 3000;
var current_num = 0;

function insert() {
  for (var i = 0; i < num; i++) {
    db[USER_DB].update({stu_id:i + "",status:1},
      {
        $set:{weixin_id:(i + "")}
      },{upsert:true},function()
      {
        current_num++;
        if (current_num >= num) {
          db[USER_DB].find({}, function(err, doc) {
            console.log("length: " + doc.length);
          });
          console.log("insert complete");
        }
      });
  }
}

insert();
