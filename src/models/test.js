export default {
  namespace: 'test',
  state: { name: 'test' },
  /**
   * 副作用effect，用于异步调用
   */
  effects: {},

  /**
   * reduces,用于常规调用，更新state
   * 必须是纯函数
   */
  reducers: {
    setName: (state, { payload }) => {
      return { ...state, ...payload };
    }
  }
};
