import Home from './Components/Home';
import { Box, GlobalStyles } from '@mui/material';

function App() {
    
  return (
    <Box>
        <GlobalStyles styles={{body: {margin: '0px', backgroundColor: '#121212'}}}/>
        <Home />
    </Box>
  );
}

export default App;
