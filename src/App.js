import React, { useState } from 'react';
import ComicDisplay from './components/comicDisplay';
import ComicForm from './components/comicForm';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './components/header';
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const matches = useMediaQuery('(min-width:1200px)');
  const [comicPanels, setComicPanels] = useState();

  const handleGenerateComic = (panel) => {
    setComicPanels(panel);
  };

  return (
    <Box sx={{height:"100vh"}}>
    <Header/>
    <Box className='boxContainer' sx={{ 
      margin:"-10px", 
      backgroundColor: "#313131",
      padding: "10px",
      }}>

      <Grid container  >
        <Grid item className='displayContainer' xs={12} md={matches?2.5:12}
         sx={{ padding: "10px",height:matches?"none":"100%"}}>
          <ComicForm onGenerateComic={handleGenerateComic} />
        </Grid>
        <Grid item className='displayContainer' xs={12} md={matches?9.5:12} >
          <ComicDisplay comicPanels={comicPanels} />
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default App;
