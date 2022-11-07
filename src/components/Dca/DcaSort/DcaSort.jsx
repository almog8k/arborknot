import React from "react";
import { Button, Label, SortIcon } from "@arborknot/design-system-v2";
import "./DcaSort.css";
const DcaSort = () => {
  return (
    <div className="sort-container">
      <Label>Sort:</Label>
      <Button
        IconComponent={<SortIcon />}
        className="btn-size"
        controlType="iconRight"
        onPress={() => {}}
        size="small"
        text="By Name"
        textAlign="left"
        type="secondary"
      />
      <Button
        IconComponent={<SortIcon />}
        className="btn-size"
        controlType="iconRight"
        onPress={() => {}}
        size="small"
        text="By Country"
        textAlign="left"
        type="secondary"
      />
      <Button
        IconComponent={<SortIcon />}
        className="btn-size"
        controlType="iconRight"
        onPress={() => {}}
        size="small"
        text="By ID"
        textAlign="left"
        type="secondary"
      />
    </div>
  );
};
export default DcaSort;
