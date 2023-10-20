import {SetStateAction} from "react";

interface InputProps {
  label: string,
  text: string,
  setText: React.Dispatch<SetStateAction<string>>,
  error: string,
  setError: React.Dispatch<SetStateAction<string>>,
}

const Input = (props: InputProps) => {
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.target.value);
    props.setError("");
  }

  return (
    <div className="input">
      <label>{props.label}</label>
      <input
        value={props.text}
        onChange={handleText}
      />
      <span style={{color: "red"}}>
        {props.error}
      </span>
    </div>
  )
}

export default Input;