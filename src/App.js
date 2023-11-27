import React, { useState } from 'react';
import ComicDisplay from './components/comicDisplay';
import ComicForm from './components/comicForm';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [comicPanels, setComicPanels] = useState();

  const handleGenerateComic = (panel) => {
    setComicPanels(panel);
  };

  return (
    <Box className='boxContainer' sx={{ 
      width:"98.82vw",
      height: "97.5vh",
      margin:"-10px", 
      backgroundColor: "black",
      padding: "10px"}}>
      <Grid container  >
        <Grid item xs={5} md={2.5} sx={{ padding: "10px" }}>
          <ComicForm onGenerateComic={handleGenerateComic} />
        </Grid>
        <Grid item className='displayContainer' xs={7} md={9.5} >
          <ComicDisplay comicPanels={comicPanels} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
