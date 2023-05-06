import React from "react";
import { Login } from "@mui/icons-material";
import { SecondaryButton } from "../secondaryButton";

export default function CreateNoticiaButton(){
  return(
    <SecondaryButton
    text="Entrar"
     icon = {<Login/>}
    />
  )
}