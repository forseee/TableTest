import { pagesData } from "./data";

import WidgetWithTableAndFilter from "@/widgets/productWidget";

const PricePlans = () => {
  return (
    <div className="container m-auto p-10">
      <WidgetWithTableAndFilter inputData={pagesData} label="Pages" />
    </div>
  );
};

export default PricePlans;
