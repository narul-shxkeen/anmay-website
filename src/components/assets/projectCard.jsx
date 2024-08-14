import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

export default function ActionAreaCard(props) {
  return (
    <Link to={props.link} className='group'> 
    <Card sx={{ maxWidth: 300 }} className='w-[300px] h-[300px]'>
      <CardActionArea>
        <CardMedia className='h-[200px] w-full object-cover group-hover:hidden'
          component="img"
          image={props.image}
          alt={props.alt}
        />
        <CardContent className='group-hover:bg-[#80a8bd] group-hover:text-white transition duration-300 relative group-hover:w-[300px] group-hover:h-[300px] group-hover:flex group-hover:flex-col group-hover:justify-center'>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
