window.onload = function () {
  var blocks = document.getElementById('wrap').children
  function changeColor (doms) {
    // 如果有doms，则还原颜色（第一次执行的时候doms = []，见最后一行）
    var i, j
    var domsLen = doms.length
    if (domsLen) {
      for (i = 0; i < domsLen; i++) {
        doms[i].style.backgroundColor = '#eee'  // 底色，自己改
      }
    }
    
    // 获取随机dom改变颜色，更新doms
    for (j = 0; j < 3; j++) {
      doms[j] = blocks[getRandom(blocks.length)]
      doms[j].style.backgroundColor = '#' + (Math.random() * 0xffffff << 0).toString(16)
    }
    
    // 递归                                |-> 传递了本次保存的doms，对于下一次调用来说一开始的doms就是before
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
