import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MyRecipes} from "./Pages/MyRecipes/MyRecipes";
import {Main} from "./Pages/Main/Main"

import "./style/style.scss"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Main/>} />
          <Route path="Рецепты" element={<MyRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
