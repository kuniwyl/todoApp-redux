import counterConnector, {PropsFromRedux} from "../store/Connectors/counterConnector.ts";

interface CounterProps extends PropsFromRedux {
  value: number
}

const Counter = (props: CounterProps) => {
  return (
    <div className="counter">
      <div>
        {props.value}
      </div>
      <div>
        <button onClick={() => props.increment()}>+</button>
        <button onClick={() => props.decrement()}>-</button>
        <button onClick={() => props.incrementByAmount(10)}>+10</button>
        <button onClick={() => props.decrementByAmount(10)}>-10</button>
      </div>
    </div>
  )
}

export default counterConnector(Counter);