import React from "react";
import GeoDot from "../../svg-component/geoDot";

const AdminMapData = (color1, color2, color3) => {
  return {
    colorData: [
      {
        mode: "Active Customers",
        dot: <GeoDot color={color1} />,
      },
      {
        mode: "Dormant Customers",
        dot: <GeoDot color={color2} />,
      },
      {
        mode: "Inactive Customers",
        dot: <GeoDot color={color3} />,
      },
    ],
  };
};

export default AdminMapData;
