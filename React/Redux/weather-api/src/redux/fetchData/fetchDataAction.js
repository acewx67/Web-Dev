import { DATA } from "./fetchDataTypes";

const fetchData1 = (data="empty data") => {
  // console.log('in action creator')
  return {
    type: DATA,
    payload : data,

  };
};

export default fetchData1;
