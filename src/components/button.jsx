import React from "react";
export function Button({ type, children, className, onClick }) {

  let classes = "font-bold px-2 py-1 rounded-lg transition border-4 border-neutral-900 "
  let outline = " hover:bg-neutral-800 hover:text-neutral-100 "
  let primary = " bg-neutral-900 text-neutral-100 hover:brightness-90 "

  classes += type === "primary" ? primary : outline

  return <button className={classes + className} onClick={onClick}>
    {children}
  </button>;
}
