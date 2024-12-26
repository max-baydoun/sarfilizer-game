import Home from './Components/Home';
import { Box, GlobalStyles } from '@mui/material';

function App() {
    
  return (
    <Box>
        <GlobalStyles styles={{body: {margin: '0px', backgroundColor: 'rgb(208, 208, 208)'}}}/>
        <Home />
    </Box>
  );
}

export default App;
