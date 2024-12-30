import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
function App() {
  return (
    <Box minH={"100vh"} _dark={{ bg: "#171922" }}>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}
export default App;
