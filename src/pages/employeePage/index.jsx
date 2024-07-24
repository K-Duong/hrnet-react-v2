import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// import TableLayout from "../../layout/table";
// import useEmployeeStore from "../../store/employeesStore";
// import { convertCamelCase } from "../../utils/convertString";
// import SearchBox from "../../components/searchBox";

// function EmployeesPage() {
//   const [data, setData] = useState(null);
//   const [isSorted, setIsSorted] = useState(false);
//   const [sortedList, setSortedList] = useState([])
//   const [searchedString, setSearchedString] =useState("")
//   const {employeeList, ascendingList, descendingList, filterEmployee} = useEmployeeStore()
//   const defaultHeaderRows = [
//     "First Name",
//     "Last Name",
//     "Start Date",
//     "Department",
//     "Date of Birth",
//     "Street",
//     "City",
//     "State",
//     "Zip Code",
//   ];
//   useEffect(() => {
//     if (employeeList.length === 0) {
//       console.log("empty list");
//       setData(null)
//     } else if (employeeList.length > 0 && !isSorted) {
//       console.log("render original list: ", employeeList);
//       setData(employeeList)
//     } 
//     else if (isSorted) {
//       console.log("render sorted list:", data)
//       setData(sortedList)
//     }
//   },[sortedList])
//   const headersCamelCase = defaultHeaderRows.map((h) => convertCamelCase(h));

//   const handleSortAscending = (e) => {
//     setIsSorted(true)
//     console.log("sort list by: ",e.target.getAttribute("data-id"));
//     const dataId = e.target.getAttribute("data-id");
//     setSortedList(ascendingList(dataId))
//   };

//   const handleSortDescending = (e) => {
//     setIsSorted(true)
//     console.log("sort list by: ",e.target.getAttribute("data-id"));
//     const dataId = e.target.getAttribute("data-id");
//     setSortedList(descendingList(dataId))
//   };
//   const handleSearchEmployee = (e) =>{
//     const value = e.target.value;      
//     setSearchedString(value);
//     if(value.length > 0) {
//         setData(filterEmployee(value, sortedList));
//       } else {
//         setData(employeeList)
//       }
//   }
  
//   return (
//     <>
//       <header>
//         <h1>Current Employees</h1>
//         <Link to="/">Home</Link>
//       </header>
//       <SearchBox placeholder={"type something here..."}
//       handleSearch={handleSearchEmployee} />
//       <section className="w-full grow">
//         <TableLayout
//           dataHeader={defaultHeaderRows}
//           headers={headersCamelCase}
//           dataContent={data}
//           handleSortAscendingOrder={handleSortAscending}
//           handleSortDescendingOrder={handleSortDescending}
//         />
//       </section>
//     </>
//   );
// }
// export default EmployeesPage;

function ListOfEmployeePage() {
  return (
    <header>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </header>
  )
}
export default ListOfEmployeePage
