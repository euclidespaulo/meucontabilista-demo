import { Link } from 'react-router-dom';
import { Box, Button, Typography} from "@mui/material";
import { AnimationText } from '../animation/AnimationText';
import IntroThemeProvider from '../../styles/homePage/introThemeProvider';


const HomeIntro = ({title, description, button, br}) => {
    return(
    <IntroThemeProvider>
      <Box sx={{ padding:'170px', background: '#f3f7fd', textAlign:'center'}}>
        <Typography variant="h1">
          {title && (
            <>
              {title} <AnimationText WordsToAnimate={br} />
            </>
          )}
        </Typography>
        <Typography variant="subtitle2" >
          {description}
        </Typography>
        <Box sx={{ marginTop: '32px' }}>
          <Link to='/Book'>
            <Button variant="contained" sx={{ color: '#fff', background: '#1d75dd', borderRadius: '6px' }}>
              {button}
            </Button>
          </Link>
        </Box>
     </Box>
    </IntroThemeProvider>
    );
};

export default HomeIntro;