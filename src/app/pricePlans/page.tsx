import { pricePlansData } from "./data";

import WidgetWithTableAndFilter from "@/widgets/productWidget";

const PricePlans = () => {
  return (
    <div className="container m-auto p-10">
      <WidgetWithTableAndFilter
        inputData={pricePlansData}
        label="Price Plans"
      />
    </div>
  );
};

export default PricePlans;
