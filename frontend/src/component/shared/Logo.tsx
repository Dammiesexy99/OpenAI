import React from 'react'
import {Link} from 'react-router-dom'
import  Typography  from '@mui/material/Typography';

const Logo = () => {
  return (
    <div style={{
      display:'flex',
       marginRight:"auto",
       alignItems:'center',
       gap:"8px",
      }}
      >
        
        <Link to={'/'}>
           <img src="AI-image.jpeg" alt="image" 
           width={'60px'}
            height={'50px'}
            className='image-inverted'
            /> 
        </Link>
        <Typography sx={{display:{md:"block",sm:"none",xs:"none"},
            mr:"auto",
            fontWeight:"800",
            textShadow:"2px 2px 2px #000"
             }} 
             > 
             <span style={{fontSize: "20px"}}>UNlock Problems</span>-AI
             </Typography>
      </div>
  )
};

export default Logo