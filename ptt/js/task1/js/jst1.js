window.onload = function () {
  var blocks = document.getElementById('wrap').children
  function changeColor (doms) {
    // 还原颜色
    var i, j
    var domsLen = doms.length
    if (domsLen) {
      for (i = 0; i < domsLen; i++) {
        doms[i].style.backgroundColor = '#ffff00'
      }
    }
    
    // 获取3个随机dom元素，更新doms
    for (j = 0; j < 3; j++) {
      doms[j] = blocks[getRandom(blocks.length)]
      doms[j].style.backgroundColor = '#' + (Math.random() * 0xffffff << 0)
    }
    
    setTimeout(function () { changeColor(doms) }, 1000)
  }
  function getRandom (base) {
    var random = Math.random
    // 防止random等于1（说过为什么了）
    if (random === 1) random = .9
    return Math.floor(Math.random() * base)
  }
  
  setTimeout(function () { changeColor([]) }, 1000)
}
