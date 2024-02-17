import React from 'react';
import { Stack } from '@mui/material';
import HomeIntro from '../Components/common/homeIntro';
import Section from '../Components/common/section';
import { useTranslation } from 'react-i18next';
import introTextEN from '../data/locales/en/introText.json';
import introTextPT from '../data/locales/pt/introText.json';
import sectionTextEN from '../data/locales/en/sectionText.json';
import sectionTextPT from '../data/locales/pt/sectionText.json';

const Home = () => {
  const { t, i18n } = useTranslation();

  const introText = i18n.language === 'pt' ? introTextPT : introTextEN;
  const sectionText = i18n.language === 'pt' ? sectionTextPT : sectionTextEN;

  // Convert the "br" object values into an array
  const brList = introText.br ? Object.values(introText.br) : [];  // Set brList to an empty array if introText.br is undefined

  const renderSection = (section) => {
    // Render logic specific to sectionText structure
    return (
      <Section
        title={t(section.title)}
        description={t(section.description)}
        imageSrc={t(section.imageSrc)}
        details={Object.values(section.details).map((detail) => t(detail))}
        reverse={section.reverse}
      />
    );
  };

  return (
    <Stack direction='column'>
      <HomeIntro
        title={t(introText.title)}
        br={brList.map((brItem, index) => (
          <span key={index}>{t(brItem)}</span>
        ))}
        description={t(introText.description)}
        button={t(introText.button)}
      />
      
      {sectionText['1'] && renderSection(sectionText['1'])}
      {sectionText['2'] && renderSection(sectionText['2'])}
    </Stack>
  );
};

export default Home;
