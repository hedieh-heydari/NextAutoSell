import styles from "./Categories.module.css";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <div>
        <p>sedan</p>
        <Sedan />
      </div>
      <div>
        <p>suv</p>
        <Suv />
      </div>
      <div>
        <p>hatchback</p>
        <Hatchback />
      </div>
      <div>
        <p>sport</p>
        <Sport />
      </div>
    </div>
  );
}
export default Categories;
