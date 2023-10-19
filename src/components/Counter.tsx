import counterConnector, {PropsFromRedux} from "../store/Connectors/counterConnector.ts";

interface CounterProps extends PropsFromRedux {
  value: number
}

const Counter = (props: CounterProps) => {
  return (
    <div>
      {props.value}
      <button onClick={() => props.increment()}>+</button>
      <button onClick={() => props.decrement()}>-</button>
      <button onClick={() => props.incrementByAmount(10)}>-</button>
    </div>
  )
}

export default counterConnector(Counter);