import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import CarsPage from "../components/templates/CarsPage";
import carsData from '../data/CarsData'
import AllButton from "../components/module/AllButton";

function Home() {
  const cars = carsData.slice(0,3)
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <AllButton/>
      <CarsPage carsData={cars} />
    </div>
  );
}

export default Home;