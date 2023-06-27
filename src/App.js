import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import NotFound from "./pages/Notfound";
import EditArticle from "./pages/EditArticle";
import CreateArticle from "./pages/CreateArticle";
import Article from "./pages/Article";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner />} />
        <Route path="/:ownerId/create" element={<CreateArticle />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles/:articleId/edit" element={<EditArticle />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>

  );
};

export default App;