$(function() {

function onResponse(res) {
    var templateHtml = $('#template').html();
    var template = _.template(templateHtml);
    var html = template({
        users: res
    });
    $('.slides').html(html);
}

$.ajax({
    url: 'https://reset-the-net-form-backend.herokuapp.com/users',
    success: onResponse
});

});
