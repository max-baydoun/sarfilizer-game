import { useState } from "react";
import Home from "./Components/Home";
import { Box, GlobalStyles } from "@mui/material";
import { green } from "@mui/material/colors";

function App() {
    const [userCorrect, setUserCorrect] = useState([false, false, false]);
    return (
        <Box>
            <GlobalStyles
                styles={{
                    body: { margin: "0px", backgroundColor: userCorrect.every((answer) => answer === true) ? green[800] : "#121212", transition: "background-color 0.5s ease" },
                }}
            />
            <Home setUserCorrect={setUserCorrect} />
        </Box>
    );
}

export default App;
