var wrap = $('#wrap')
    ,wrapOWidth = 300
    , div1 = $('#div1')
    ,div1OWidth=100
    , div2 = $('#div2')
    ,div2OWidth=100
    , div3 = $('#div3')
    ,div3OWidth=100
    , show = $('#show');


window.onresize = function () {
  var wrapGrowWidth = wrap.width() - wrapOWidth;
  var div1GrowWidth = div1.width() - div1OWidth;
  var div2GrowWidth = div2.width() - div2OWidth;
  var div3GrowWidth = div3.width() - div3OWidth;

  //var str = 'wrapGrowWidth:'+wrapGrowWidth+'div1GrowWidth:'+div1GrowWidth+'div2GrowWidth:'+div2GrowWidth+'div3GrowWidth:'+div3GrowWidth;

  show.html(wrapGrowWidth);
  div1.html(div1GrowWidth);
  div2.html(div2GrowWidth);
  div3.html(div3GrowWidth);

};