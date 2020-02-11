window.onload = function () {
  //去掉默认的contextmenu事件，否则会和右键事件同时出现。
  document.oncontextmenu = function (e) {
    e.preventDefault();
  };
  //开关思想
  let flag = true;
  //鼠标按下事件
  document.onmousedown = function (e) {
    if (flag) {
      //按下右键
      if (e.button == 2) {
        $('.beijing').css('display', 'block');

      }
    } else {
      if (e.button == 2) {
        $('.beijing').css('display', 'none');
      }
    }
    flag = !flag;
  }
  //背景中的移动事件
  $('.beijing').on('mousemove', function (e) {
    let X = e.clientX - 75;
    let Y = e.clientY - 75;
    $('.circle').css('left', X + 'px');
    $('.circle').css('top', Y + 'px');
    $('.circle').css('background-position-x', -X + 'px');
    $('.circle').css('background-position-y', -Y + 'px');
  })
  //document对象
  //获取元素
  let lis = document.querySelectorAll('.nav>ul li');
  let pic = document.querySelector('.bigPic');
  let imgs = document.querySelectorAll('.bigPic>img');
  //给每一个li标签注册鼠标移入事件
  lis.forEach((item, index) => {
    item.onmouseenter = function () {
      let offsetTop = this.offsetTop;
      pic.style.display = 'block';
      pic.style.top = offsetTop + 'px';
      pic.style.left = this.clientWidth + 'px';
      imgs.forEach(item2 => {
        item2.classList.remove('show');
      })
      imgs[index].classList.add('show');
    }
    //给每一个li标签注册鼠标移出事件
    item.onmouseleave = function () {
      pic.style.display = 'none';
    }
  })
  //JQ对象
  //左边导航栏的a标签鼠标移入事件
  $('.header .login>a').on('mouseenter', function () {
    $(this).css('backgroundColor', 'blue');
  })
  //左边导航栏的a标签鼠标移出事件
  $('.header .login>a').on('mouseleave', function () {
    $(this).css('backgroundColor', '#09b1b9');
  })
  //上面头部的登录和开心按钮的移入事件
  $('.header .admin>a').on('mouseenter', function () {
    $(this).css('backgroundColor', 'blue');
  })
  //上面头部的登录和开心按钮的移出事件
  $('.header .admin>a').on('mouseleave', function () {
    $(this).css('backgroundColor', '#e14d43');
  })
  //上面头部的开心按钮的点击事件
  $('.header .admin>a').on('click', function () {
    alert('你在想屁吃');
  })
  //第一个广告的移入事件
  $('.poster_1').on('mouseenter', function () {
    $(this).children('img').css('display', 'block');
    $('.poster_1').on('mousemove', function (e) {
      let X = e.clientX - 155 - 50;
      let Y = e.clientY - 80 - 60;
      if (X < 0) {
        X = 0;
      }
      if (X > 470) {
        X = 470;
      }
      if (Y < -17) {
        Y = -17;
      }
      if (Y > 12) {
        Y = 12;
      }
      $('.poster_1>img').css('left', X + 'px');
      $('.poster_1>img').css('top', Y + 'px');
    })
  })
  //第一个广告的移出事件
  $('.poster_1').on('mouseleave', function () {
    $(this).children('img').css('display', 'none');
  })
  //第二个广告的移入事件
  $('.poster_2').on('mouseenter', function () {
    $(this).children('img').css('display', 'block');
    $('.poster_2').on('mousemove', function (e) {
      let X = e.clientX - 155 - 523.19 - 43 - 88;
      let Y = e.clientY - 80 - 50;
      if (X < 0) {
        X = 0;
      }
      if (X > 478) {
        X = 478;
      }
      if (Y < -17) {
        Y = -17;
      }
      if (Y > 12) {
        Y = 12;
      }
      $('.poster_2>img').css('left', X + 'px');
      $('.poster_2>img').css('top', Y + 'px');
    })
  })
  //第二个广告的移出事件
  $('.poster_2').on('mouseleave', function () {
    $(this).children('img').css('display', 'none');
  })
  //轮播图的右键
  $('.swiper_title>div')[0].style.display = 'block';
  let keycode = 0;
  $('.swiper .next').on('click', function () {
    if (keycode == 4) {
      keycode = 0;
    } else {
      keycode++;
    }
    $('.swiper ul').css('left', keycode * -707 + 'px');
    $('.swiper_title>div').each((index, item) => {
      $(item).css('display', 'none');
    })
    $('.swiper_title>div')[keycode].style.display = 'block';
  })
  //轮播图的左键
  $('.swiper .previous').on('click', function () {
    if (keycode == 0) {
      keycode = 4;
    } else {
      keycode--;
    }
    $('.swiper ul').css('left', keycode * -707 + 'px');
    $('.swiper_title>div').each((index, item) => {
      $(item).css('display', 'none');
    })
    $('.swiper_title>div')[keycode].style.display = 'block';
  })
  //人物的淡入淡出
  //JQ写法
  $(window).scroll(function () {
    let tp = $(this).scrollTop();
    if (tp > 200) {
      $('.renwu').fadeIn(1000);
    }
  })
  //原生写法
  // window.onscroll = function () {
  //   let tp = document.documentElement.scrollTop;
  // }
}