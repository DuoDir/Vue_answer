//在这里调用mutations里的方法 来达到改变状态
export default {
  //页面选择答案之后 点击下一题进行的操作
  addNum(context, id) {
    console.log(id)
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    context.commit('REMBER_ANSWER', id);
    if (context.state.itemNum < context.state.itemDetail.length) {
      context.commit('ADD_ITEMNUM', 1);
    }
  },
  //记录答题总时间
  remember_time(context) {
    context.commit('REMBER_TIME')
  },
  //初始化信息
  initializeData(context) {
    context.commit('INITIALIZE_DATA');
  }
}
