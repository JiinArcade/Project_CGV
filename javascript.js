// menu-box-list 에 마우스를 올리면 sub-menu를 dispaly block으로 바꿔준다
// menu-box-list 에서 마우스가 떠나면  sub-menu를 dispaly none으로 바꿔준다

$(function () {
  var $menuBoxList = $(".menu-box-list");
  var $subMenu = $(".sub-menu");

  $menuBoxList.mouseover(function () {
    $subMenu.slideDown();
  });

  $menuBoxList.mouseout(function () {
    $subMenu.slideUp();
  });
});
