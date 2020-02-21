const id = location.search.split('=')[1];
if (id == 0) {
  $('.login a span').text('管理');
  $('.login a').attr('href', '#');
}