import styles from "./Categories.module.css";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";
import Link from "next/link";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href={`/categories/sedan`}>
        <div>
          <p>sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href={"categories/suv"}>
        <div>
          <p>suv</p>
          <Suv />
        </div>
      </Link>
      <Link href="categories/hatchback">
        <div>
          <p>hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="categories/sport">
        <div>
          <p>sport</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}
export default Categories;
