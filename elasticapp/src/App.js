import "./App.css";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "64px auto",
          gridTemplateAreas: `"header" 
          "content"`,
        }}
      >
        <Header />

        <HomeContent />
      </Box>
    </div>
  );
}

export default App;
