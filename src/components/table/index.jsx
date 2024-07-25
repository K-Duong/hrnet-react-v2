import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { dateFormater } from "../../utils/dateFormater";

import useEmployeeStore from "../../store/employeesStore";
import "./style.css"

function TableList() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const employeeList = useEmployeeStore((state) => state.employeeList);
  const dataColumns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      headerClassName: "data-header",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      headerClassName: "data-header",
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 150,
      headerClassName: "data-header",
      valueGetter: (value) => dateFormater(value),
    },
    {
      field: "department",
      headerName: "Department",
      width: 150,
      headerClassName: "data-header",
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 150,
      valueGetter: (value) => dateFormater(value),
      headerClassName: "data-header",
    },
    {
      field: "street",
      headerName: "Street",
      width: 200,
      headerClassName: "data-header",
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
      headerClassName: "data-header",
    },
    {
      field: "state",
      headerName: "State",
      width: 100,
      headerClassName: "data-header",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 150,
      headerClassName: "data-header",
    },
  ];

  return (
    <Box
      sx={{
        // TODO: media query for heigh
        maxHeight:450,
        width: "100%",
        // height: 600,
        "& .data-header": {
          backgroundColor: "#B4BF8Fff",
          fontSize: "16px",
          color: "black"
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ textAlign: "center", fontSize: "36px", mt: "16px", mb: "16px" }}
      >
        Currents Employees
      </Typography>
      <DataGrid
      disableColumnFilter={true}
      disableDensitySelector={true}
      disableColumnSelector={true}
        sx={{backgroundColor: "white"}}
        columns={dataColumns}
        rows={employeeList}
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10]}
        paginationModel={paginationModel}
        onPaginationModelChange={(newPageSize) =>
          setPaginationModel(newPageSize)
        }
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [],
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
      ></DataGrid>
    </Box>
  );
}

export default TableList;
