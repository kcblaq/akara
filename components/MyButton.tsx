import React from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';


const Btn = styled('button')({
    color: 'white',
    background: 'linear-gradient(90deg, #fe6b8b 30%, #ff8e53 90%)',
    padding:10
  });
export default function MyButton(props: { width: any; text:string}) {
   

  return (
    <div>
        <Btn sx={{width:props.width}}>{props.text} </Btn>
    </div>
  )
}
