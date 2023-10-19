import {SetStateAction} from "react";

interface InputProps {
  label: string,
  text: string,
  setText: React.Dispatch<SetStateAction<string>>,
  error: string,
}

const Input = (props: InputProps) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <span style={{color: "red"}}>
        {props.error}
      </span>
    </>
  )
}

export default Input;