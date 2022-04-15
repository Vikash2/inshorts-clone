import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import NavInshorts from "./components/NavInshorts";
import NewsContent from './newsContent/NewsContent';


function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  // const [loadmore, setLoadmore] = useState(20)

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    newsApi();
  }, [newsResults, category])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
