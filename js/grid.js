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

$.ajax({
    url: url,
    success: onResponse
});

});
