import React from "react";

interface buttonProps {
  text: string | React.ReactNode;
  className?: string
  onClick?: () => void;
  color?: '' | 'yellow' | 'darkYellow'
}

const BaseButton = (props: buttonProps) => {
  let btnColor = 'bg-slate-300 dark:bg-slate-700'

  switch (props.color) {
    case 'yellow': btnColor = 'bg-yellow-500 text-white'; break;
    case 'darkYellow': btnColor = 'bg-yellow-700 text-white'; break;
    default: break;
  }

  return (
    <button onClick={props.onClick} className={`${props.className} flex justify-center items-center w-full h-full`}>
      <div className={`${btnColor} h-14 w-full rounded-xl flex justify-center items-center text-lg font-medium hover:bg-opacity-75 duration-300 active:w-10/12 active:h-12 active:text-base`}>
        {props.text}
      </div>
    </button>
  )
}

export default BaseButton
