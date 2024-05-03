import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps <'button'>{
    label: string;
}


export default function Button({label}:ButtonProps) {
  return (
    <>
        <button>
            {label}
        </button>
    </>
  )
}
