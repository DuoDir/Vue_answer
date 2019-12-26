//在这里修改state的状态 直接修改 用mutations 异步修改用actions
export default {

  //mutations可以有两个参数 一个是state 另一个是传参用的 可以是对象 叫做 载荷(payload)

  //点击进入下一题
  ADD_ITEMNUM(state, num) {
    state.itemNum += num
  },
  //记录答案
  REMBER_ANSWER(state, id) {
    state.answerid.push(id);
  },
  //记录做题时间
  REMBER_TIME(state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000)
  },
  // 初始化信息
  INITIALIZE_DATA(state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  },
}
