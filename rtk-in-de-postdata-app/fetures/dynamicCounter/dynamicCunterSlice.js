const { createSlice } = require("@reduxjs/toolkit");

// inital state
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState: initialState,
  reducers: {
    dIncrement: (state, action) => {
      state.count += action.payload;
    },
    dDecrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterAction = dynamicCounterSlice.actions;
