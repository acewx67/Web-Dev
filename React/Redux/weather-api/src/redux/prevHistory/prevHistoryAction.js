const prevHistory = (data=null) => {
  // console.log('in action creator')
  return {
    type: "PREV_HISTORY",
    payload : data,
  };
};

export default prevHistory;
