$url = 'http://asoaso.xsrv.jp/blog_parts/a_parts/'
$(function() {
  $.ajax({
    url: $url,
    type: 'GET',
    success: function(data) {
      $contents = $("#contetnts",data.responseText);
      $('#content').append($contents);
      $('.powered_by, img, ul.button').remove();
    },
    error: function(xhr, status, err) {}
  });
});
