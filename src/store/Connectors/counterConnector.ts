import {decrement, increment, incrementByAmount} from "../Reducers/counterReducer.ts";
import {RootState} from "../index.ts";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => ({
  value: state.counter.value
});

const mapDispatch = {
  increment,
  decrement,
  incrementByAmount
}

const connector = connect(mapState, mapDispatch);

export default connector;
export type PropsFromRedux = ConnectedProps<typeof connector>;