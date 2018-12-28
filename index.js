var allButtons = $('.button button')
var size = allButtons.length
var n = 0
activeButton($(allButtons).eq(n))

for (let i = 0; i < size; i++) {
  $(allButtons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()   //jquery 中的index()方法
    var p = index * -500
    $('.images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    activeButton($(allButtons).eq(n))
  })
}


function activeButton ($node) {
  $node.addClass('red').siblings('.red').removeClass('red')
}

var timer = setTimer()

function setTimer () {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 3000)
}

$('.window').on('mouseleave', function () {
  timer = setTimer()
})

$('.window').on('mouseenter', function () {
  window.clearInterval(timer)
})
