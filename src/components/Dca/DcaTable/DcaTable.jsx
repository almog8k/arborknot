import { Table } from "@arborknot/design-system-v2";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OTE0YTc2Ni04NDI5LTQ3YjAtOTQxNi01ZTM0MTVhYjA5NTkiLCJpYXQiOjE2Njc4MjgxODQsImV4cCI6MTY3MTQyODE4NH0.gY3pEovJfpu9ZB6L2HfPZKiL99wJl96tY1PPFZ0etF4";

const DcaTable = () => {
  const [dcaState, setDcaState] = useState([]);
  const [filteredDcaState, setFilteredDcaState] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    axios
      .get("https://console-api-v2.dev.arborknot.io/dcas", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDcaState(res.data);
        setFilteredDcaState(res.data);
        setLoadingState(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterByName = (searchTerm) => {
    let copyDcaState = [...dcaState];
    if (searchTerm) {
      copyDcaState = copyDcaState.filter((cda) =>
        cda.name.includes(searchTerm)
      );
    }
    setFilteredDcaState(copyDcaState);
  };
  return (
    <div className="table-container">
      <Table
        loading={loadingState}
        ActionsComponent={() => {}}
        columns={[
          {
            columnKey: "id",
            label: "ID",
          },
          {
            columnKey: "name",
            label: "Name",
          },
          {
            columnKey: "buId",
            label: "Bu ID",
          },
          {
            columnKey: "countryCode",
            label: "Country Code",
          },
          {
            columnKey: "status",
            label: "Status",
          },
          {
            columnKey: "externalKey",
            label: "External Key",
          },
          {
            columnKey: "parentDcaId",
            label: "Parent Code ID",
          },
        ]}
        data={filteredDcaState}
        search={{
          placeholder: "Search...",
          onChange: filterByName,
        }}
      ></Table>
    </div>
  );
};

export default DcaTable;
