import { Stack } from "@mui/material";
import HomeIntro from "../Components/common/homeIntro";
import Section from '../Components/common/section'
import sectionText from '../data/english/home/sectionText.json'
import introText from '../data/english/home/introText.json'


const Home = () => {
  
  return (
    <Stack direction='column'>
      {
        introText.map((introItem, index) => (
            <HomeIntro key={index} {...introItem} />
          ))
      }

      {
        sectionText.map((sectionItem, index) => (
            <Section key={index} {...sectionItem}/>
          ))
      }
      
    </Stack>
  );
};

export default Home;
