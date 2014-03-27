$(function() {

function onResponse(res) {
    var templateHtml = $('#template').html();
    var template = _.template(templateHtml);
    var html = template({
        users: res
    });
    $('.slides').html(html);
}

var urlRoot = 'https://reset-the-net-form-backend.herokuapp.com';
if (location.host === 'localhost:8080') {
    urlRoot = 'http://localhost:8000'
}
var url = urlRoot + '/users';


// Placeholder data.
var res = [
  {
    "_id": "5332f375026aef0800000001",
    "description": "is advising her team to add HTTPS to their new website, ASAP!! ;)",
    "image": "https://s3.amazonaws.com/resetthenet/7890.1395848052345.png",
    "name": "Stacy Harris",
    "url": "http://test.com"
  },
  {
    "_id": "5332fa0b2013990800000002",
    "description": "is going to start using OTR, all the time. Security, FTW.",
    "image": "https://s3.amazonaws.com/resetthenet/7226.1395849739553.jpeg",
    "name": "Jason James",
    "url": "https://example.com"
  },
  {
    "_id": "5332fd758958b30800000001",
    "description": "is making HTTPS the only option on their new application.",
    "image": "https://s3.amazonaws.com/resetthenet/6320.1395850613445.jpeg",
    "name": "Team Rockit",
    "url": "https://example.com"
  }
];

onResponse(res);

});
