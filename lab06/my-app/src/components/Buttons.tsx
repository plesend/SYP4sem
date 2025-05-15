import React, { useEffect, useState } from 'react';
import "../App.css";

interface ButtonProps
{
  title:string,
  onClick: ()=>void
}

function Button({title,onClick}:ButtonProps)
{
  return <button onClick={onClick}>{title}</button>
}

export default Button;