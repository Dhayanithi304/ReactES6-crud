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
          <Route to="/" element={<AllFruits />} />
          <Route to="/add-fruit" element={<AddFruit />} />
          <Route to="/update-fruit/:id" element={<UpdateFruit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
