module.exports.seiga = function(args, content) {
  var id = args[0];
  return '<div><iframe width="312" height="176" src="http://ext.seiga.nicovideo.jp/thumb/' + id + '" scrolling="no" style="border:solid 1px #888;" frameborder="0"><a href="http://seiga.nicovideo.jp/seiga/' + id + '"></a></iframe></div>';
};

module.exports.douga = function (args, content) {
  var id = args[0],
      thumb = args[1] === 'thumb' ? true : false;
  if (thumb) {
    return '<div><iframe width="312" height="176" src="http://ext.nicovideo.jp/thumb/' + id + '" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></div>';
  }
  return '<div><script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/' + id + '"></script></div>';
}

module.exports.nama = function(args, content) {
  var id = args[0];
  return '<div><iframe width="312" height="176" src="http://live.nicovideo.jp/embed/' + id + '" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"><a href="http://live.nicovideo.jp/watch/' + id + '"></a></iframe></div>';
};
