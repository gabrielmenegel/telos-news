import React from "react";
import "./styles.css"

export function PrimaryButton({icon, text}){
  return(
    <button className="primaryButton">
      {icon}
      {text}
     </button>
  )
}