import { productsData } from "./data";
import WidgetWithTableAndFilter from "@/widgets/productWidget";

const Products = () => {
  return (
    <div className="container m-auto p-10">
      <WidgetWithTableAndFilter inputData={productsData} label="Products" />
    </div>
  );
};

export default Products;
