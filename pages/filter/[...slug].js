import { useRouter } from "next/router";
import carsData from "../../data/CarsData";
import CarsList from "../../components/templates/CarList";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filterredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if(!filterredData.length) return <h3>Not Found</h3>

 
   return <CarsList data={filterredData} />;
 
}

export default FilteredCars;
