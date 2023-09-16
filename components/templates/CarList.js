import Card from "../module/Card";
import styles from "./CarList.module.css";
import Back from "../icons/Back";
import { useRouter } from "next/router";

function CarList({ data }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.back} onClick={() => router.back()}>
          <Back />
          <p>back</p>
        </div>
        <div className={styles.cards}>
          {data.map((car) => {
            return <Card key={car.id} {...car} />;
          })}
        </div>
      </div>
    </>
  );
}
export default CarList;
