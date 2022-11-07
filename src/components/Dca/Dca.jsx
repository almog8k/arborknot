import "./Dca.css";
import { Heading } from "@arborknot/design-system-v2";
import DcaTable from "./DcaTable/DcaTable";
import React from "react";
import DcaSort from "./DcaSort/DcaSort";

const Dca = () => {
  return (
    <div className="dca-container">
      <Heading label="Dca's"></Heading>
      <DcaSort></DcaSort>
      <DcaTable></DcaTable>
    </div>
  );
};

export default Dca;
