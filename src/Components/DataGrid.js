/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../StyleSheets/grid.css";
import axios from "axios";

export default function DataGridData(props) {
  const [orders, setOrders] = useState([]); //State of table data
  const filtered = props.filtered;
  const sorted = props.sorted;
  const expanded = props.expanded;
  const searchValue = props.searchValue;

  const [supplierFiltered, setSupplierFiltered] = useState("");
  const [statusFiltered, setStatusFiltered] = useState("");

  const [sortCol, setSortCol] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  if (supplierFiltered) console.log("supplierFiltered");
  if (statusFiltered) console.log("statusFiltered");

  //Columns of table with their properties
  const columns = [
    {
      field: "id",
      headerName: "ID number",
      sortable: false,
      type: "number",
      width: 140,
    },
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      type: "string",
      width: 165,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      type: "string",
      width: "17vw",
    },
    {
      field: "supplier",
      headerName: "Supplier",
      type: "string",
      sortable: false,
      width: "12vw",
    },
    {
      field: "date",
      headerName: "Date",
      type: "dateTime",
      sortable: false,
      width: "25vw",
    },
  ];

  //Rows of data will be populated
  const [rows, setRows] = useState([]);

  useEffect(() => {
    //Called Everytime the filter changes
    if (sorted === "Name A-Z") {
      setSortCol("name");
      setSortOrder("asc");
    } else if (sorted === "Status A-Z") {
      setSortCol("status");
      setSortOrder("asc");
    } else if (sorted === "Supplier A-Z") {
      setSortCol("supplier");
      setSortOrder("asc");
    } else {
      setSortCol("date");
      setSortOrder("desc");
    }
  }, [sorted]);

  useEffect(() => {
    //Called Everytime the filter changes
    if (filtered === "No Filter") {
      setSupplierFiltered("");
    } else if (filtered === "Supplier: Amazon") {
      setSupplierFiltered("Amazon");
    } else if (filtered === "Supplier: Ebay") {
      setSupplierFiltered("Ebay");
    } else if (filtered === "Supplier: Macy's") {
      setSupplierFiltered("Macy's");
    } else if (filtered === "Supplier: Craiglist") {
      setSupplierFiltered("Craiglist");
    }
  }, [filtered]);

  useEffect(() => {
    //Called Everytime the sidebar changes
    console.log(expanded);
    if (expanded === "pendingRequests") {
      setStatusFiltered("Pending Confirmation");
    } else if (expanded === "confirmedRequests") {
      setStatusFiltered("Confirmed");
    } else {
      setStatusFiltered("");
    }
  }, [expanded]);

  useEffect(() => {
    //Axios Call fetch data once page is rendered or Filter on Status or SupplierChanged
    let newRows = [];
    axios({
      method: "get",
      url: `https://o53hpo7bf9.execute-api.us-west-2.amazonaws.com/dev/orders`,
    })
      .then((res) => {
        setOrders(res.data.orders);

        res.data.orders.map((order, index) => {
          let data = {
            id: "#" + order.id,
            name: order.customer.fname + " " + order.customer.lname,
            status:
              order.status === "confirmed"
                ? "Confirmed"
                : "Pending Confirmation",
            supplier: order.supplier,
            date: new Date(order.created_at),
          };

          newRows.push(data);
        });
        setRows(newRows);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //Axios Call fetch data once page is rendered or Filter on Status or SupplierChanged
    let newRows = [];
    orders.map((order, index) => {
      let data = {
        id: "#" + order.id,
        name: order.customer.fname + " " + order.customer.lname,
        status:
          order.status === "confirmed" ? "Confirmed" : "Pending Confirmation",
        supplier: order.supplier,
        date: new Date(order.created_at),
      };
      if (!supplierFiltered || supplierFiltered === data.supplier) {
        if (!statusFiltered || statusFiltered === data.status) {
          newRows.push(data);
        }
      }
    });
    setRows(newRows);
  }, [supplierFiltered, statusFiltered, orders]);

  console.log(rows);
  return (
    <div>
      {/*width and height of table */}
      <div
        style={{
          height: 530,
          width: "75vw",
        }}
        className="whiteBackground"
      >
        {/* DataGrid -> 
        sortModel: sorting field and order
        filterModel: filter field and property
        pageSize: pagination
        */}
        <DataGrid
          className="adminfont"
          sortModel={[
            {
              field: sortCol,
              sort: sortOrder,
            },
          ]}
          filterModel={{
            items: [
              {
                columnField: "name",
                operatorValue: "contains",
                value: searchValue,
              },
            ],
          }}
          rows={rows}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableExtendRowFullWidth={false}
        />
      </div>
    </div>
  );
}
