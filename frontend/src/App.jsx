import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage  from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Box minH={"100vh"} background={"#24252c"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}
export default App;
