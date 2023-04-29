import React from "react";
import "./styles.css"

export function SecondaryButton({icon, text}){
  return(
    <button className="secondaryButton">
      {icon}
      {text}
     </button>
  )
}