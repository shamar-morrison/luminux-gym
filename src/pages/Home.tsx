import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from 'src/components/HeroBanner';
import SearchExercises from 'src/components/SearchExercises';
import Exercises from 'src/components/Exercises';

const Home = () => {
  const [state, setstate] = useState(null);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
