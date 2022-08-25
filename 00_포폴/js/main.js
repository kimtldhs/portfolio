//원 그래프
$(function () {
  //첫번째 그래프
  var perNum = 80;
  $('.first.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //두번째 그래프
  var perNum = 70;
  $('.second.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //세번째 그래프
  var perNum = 85;
  $('.third.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //네번째 그래프
  var perNum = 75;
  $('.fourth.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //다섯번째 그래프
  var perNum = 75;
  $('.fifth.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //여섯번째 그래프
  var perNum = 65;
  $('.sixth.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });

  //일곱번째 그래프
  var perNum = 65;
  $('.seventh.circle').circleProgress({
    value: perNum / 100,
    startAngle: 300,
    size: 150,
    fill: {
      gradient: ["#81AED9"],
      gradientAngle: Math.PI / 2
    },
    animation: {
      duration: 4000,
      easing: "swing"
    },
    lineCap: "butt",
    reverse: true

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
  });



  //메뉴 모달창 띄우기고 닫기
  const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
  }

  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  }

  document.querySelector(".opened").addEventListener("click", open);
  document.querySelector(".closed").addEventListener("click", close);
  document.querySelector(".bg").addEventListener("click", close);
  document.querySelector(".mBt1").addEventListener("click", close);
  document.querySelector(".mBt2").addEventListener("click", close);
  document.querySelector(".mBt3").addEventListener("click", close);
  document.querySelector(".mBt4").addEventListener("click", close);

});



//start버튼 누르면 화면이동

$(document).ready(function () {
  $('.start_bt').click(function () {
    var offset = $('#About')
      .offset();
    $('html').animate({
      scrollTop: offset.top
    }, 0);
  });
});



//프로젝트 박스들
console.clear();

const images = document.querySelectorAll(".image-drag");

images.forEach(image => {
  let isDown = false;
  let innerImage = image.children[0];
  image.addEventListener("mousedown", e => {
    isDown = true;
    image.style.cursor = "grabbing";
    scaleImageBackground(innerImage, isDown);
    scaleImage(innerImage, isDown);
    mousedown(e, image);
  });

  image.addEventListener("mouseup", () => {
    isDown = false;
    image.style.cursor = "grab";
    scaleImageBackground(innerImage, isDown);
    scaleImage(innerImage, isDown);
  });
});

function mousedown(e, image) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  e.target.parentElement.style.zIndex = 10;
  images.forEach(i => {
    if (i != e.target.parentElement) {
      i.style.zIndex = 1;
    }
  });

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    moveImage(image, {
      x: newX,
      y: newY
    });
    prevX = e.clientX;
    prevY = e.clientY;
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

function scaleImageBackground(image, mouseDownState) {
  let duration = 0.45;
  if (mouseDownState) {
    gsap.to(image, duration, {
      backgroundSize: "150%",
      ease: "power3.out",
    });
  } else {
    gsap.to(image, duration, {
      backgroundSize: "120%",
      ease: "power3.out",
    });
  }
}

function scaleImage(image, mouseDownState) {
  let duration = 0.45;
  if (mouseDownState) {
    gsap.to(image, duration, {
      scale: 0.85,
      ease: "power3.out",
    });
  } else {
    gsap.to(image, duration, {
      scale: 1,
      ease: "power3.out",
    });
  }
}

function moveImage(image, mousePosition) {
  let imageBounds = image.getBoundingClientRect();
  let newPosition = {
    left: imageBounds.left - mousePosition.x,
    top: imageBounds.top - mousePosition.y,
  };

  gsap.to(image, 0, {
    top: `${newPosition.top}px`,
    left: `${newPosition.left}px`,
    ease: "power3.out",
  });
}


// 버블 텍스트
jQuery(document).ready(function ($) {

  var bArray = [];
  var sArray = [4, 6, 8, 10];

  for (var i = 0; i < $('.bubbles').width(); i++) {
    bArray.push(i);
  }

  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setInterval(function () {

    var size = randomValue(sArray);
    $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

    $('.individual-bubble').animate({
      'bottom': '100%',
      'opacity': '-=0.7'
    }, 3000, function () {
      $(this).remove()
    });


  }, 350);

});


//프로젝트 컴퓨터 화면 스크롤 
$(function () {

  //모니터 화면 hover했을 때 자동 스크롤
  $('.css_img .main_page').hover(function () {
    var ah = $(this).find('a').innerHeight(); // innerHeight 안쪽높이, a요소의 높이+ 패딩포함
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight(); // img요소의 높이+ 패딩포함

    img.stop().animate({
      top: ah - imgh
    }, 5000); /* 이미지 호버했을때 내려가게 */

  }, function () {
    /* 이미지 호버안했을때 위로올라가게 */
    var img = $(this).find('img');
    img.stop().animate({
      top: 0
    }, 5000);
  });

});

//
