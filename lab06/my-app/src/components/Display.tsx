import React, { useEffect, useState } from 'react';
import "../App.css";

function Display({value}:{value:string|null})
{
  return <div className='display'>{value}</div> 
}

export default Display;