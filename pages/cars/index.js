import Categories from "../../components/module/Categories";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";

function Details() {
  return (
    <div>
      <Categories/>
      <CarsPage carsData={carsData} />
    </div>
  );
}

export default Details;