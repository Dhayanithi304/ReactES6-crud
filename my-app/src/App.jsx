import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllFruits from "./AllFruits";
import Layout from "./Layout";
import AddFruit from "./AddFruit";
import UpdateFruit from "./UpdateFruit";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllFruits />} />
          <Route path="/add-fruit" element={<AddFruit />} />
          <Route path="/update-fruit/:id" element={<UpdateFruit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
