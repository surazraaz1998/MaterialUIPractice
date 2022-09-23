import { useState } from "react";
import MaterialTable from "@material-table/core";
import { Container } from "@mui/material";

const Hero = () => {
  const [tableData, setTableData] = useState([
    {
      stock: "MRF",
      tradePrice: 85166.23,
      marketCap: 17007,
      lowerCircuit: 75853.5,
      upperCircuit: 92709.8
    },
    {
      stock: "NIFTY BEES",
      tradePrice: 193.76,
      marketCap: 1636057,
      lowerCircuit: 155.63,
      upperCircuit: 233.43
    },
    {
      stock: "JETAIRWAYS",
      tradePrice: 100.73,
      marketCap: 29810,
      lowerCircuit: 94.75,
      upperCircuit: 104.65
    },
    {
      stock: "NEWGEN",
      tradePrice: 371.31,
      marketCap: 372597,
      lowerCircuit: 294.1,
      upperCircuit: 441.1
    },
    {
      stock: "ADANIGREEN",
      tradePrice: 2367.0,
      marketCap: 2727517,
      lowerCircuit: 1890.25,
      upperCircuit: 2835.35
    }
  ]);

  var columns = [
    { title: "STOCK", field: "stock" },
    { title: "TRADE PRICE", field: "tradePrice", align: "left" },
    { title: "MARKET CAP", field: "marketCap", align: "left" },
    { title: "LOWER CIRCUIT", field: "lowerCircuit", align: "left" },
    { title: "UPPER CIRCUIT", field: "upperCircuit", align: "left" }
  ];

  return (
    <Container fixed sx={{ p: 1 }}>
      <MaterialTable
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const updatedTableData = [...tableData];
                updatedTableData.push(newRow);
                setTableData(updatedTableData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const updatedTableData = [...tableData];
                const index = updatedTableData.indexOf(oldRow);
                updatedTableData[index] = newRow;
                setTableData(updatedTableData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const updatedTableData = [...tableData];
                const index = updatedTableData.indexOf(oldRow);
                updatedTableData.splice(index, 1);
                setTableData(updatedTableData);
                resolve();
              }, 1000);
            })
        }}
        columns={columns}
        data={tableData}
        title=""
        options={{ search: false, paging: false, actionsColumnIndex: 5 }}
      />
    </Container>
  );
};
export default Hero;
