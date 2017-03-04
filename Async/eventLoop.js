// 'event loop' 像队列式的 array (先进先出)
var eventLoop = [];
var event;

// 保持一直执行
while (true) {
  // 执行一个时间片
  if (eventLoop.length > 0) {
    // 获取队列中的一下一个事件
    event = eventLoop.shift();

    // 现在，执行下一个事件
    try {
      event();
    } catch (err) {
      reportError(err);
    }
  }
}
