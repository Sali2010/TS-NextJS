import React, { FC } from 'react'
import { Button } from '@mui/material';

interface Iprops {
    children :JSX.Element,
    href : string,
    mt : number
    

}

const Buttons2 : FC<Iprops> =({children,href,mt})=>{
    return (
        <Button
        href={href}
        sx={{ borderRadius: "8px", py: 1, px: 5, ml: 2, gap:'5px',mt:mt}}
        variant="outlined"
      >
        {children}
      </Button>
    )
}

export default Buttons2;