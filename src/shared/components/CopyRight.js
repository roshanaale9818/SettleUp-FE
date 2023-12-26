import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const CopyRight = (props)=>{
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="http://roshanaalemagar.com:3000/">
          Expense Share
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  
}

export {CopyRight};