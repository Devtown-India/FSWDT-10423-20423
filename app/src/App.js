import { useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const appId = "f98d4788";
const appKey = "0105810e95442a333725e749c4a4c913";

const App = () => {

  const [recipes,setRecipes] = useState([])
  const [loader,setLoader] = useState(false)

  const handleSearch = async (query) => {
    try {
      setLoader(true);
      setRecipes([]);
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoader(false);
    }
  };
  return (
    <div>
      <h1>Recipe application</h1>
      <Header loader={loader} handleSearch={handleSearch}/>
      {
        recipes.map(({recipe},index) => <Recipe recipe={recipe} />)
      }
    </div>
  );
};

export default App;
