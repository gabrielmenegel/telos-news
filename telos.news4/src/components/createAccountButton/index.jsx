import React from "react";
import { PrimaryButton } from "../primaryButton";
import { Login } from "@mui/icons-material";

export default function CreateAccountButton(){
  return(
    <PrimaryButton
     text="Entrar"
     icon = {<Login/>}
    />
  )
}