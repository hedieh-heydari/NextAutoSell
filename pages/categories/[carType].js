import { useRouter } from 'next/router';
import CarList from '../../components/templates/CarList';
import carsData from '../../data/CarsData';

function Hatchback() {
  const router = useRouter()
  const carType = router.query.carType;
  console.log(carType)
  const filteredCars = carsData.filter(car => car.category === carType)

  return <>
  <CarList data={filteredCars}/>
  </>;
  }
  
  export default Hatchback;
  