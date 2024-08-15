import { Link } from "react-router-dom";

import Form from "../../components/form";

import departments from "../../data/departments";
import states from "../../data/states";

import "./style.css";

function HomePage() {
  // convert format of states and departements {label, value}
  const dataStates = [
    {
      label: "Select a state...",
      value: "DEFAULT",
      disabled: true,
    },
    ...states.map((state) => {
      return {
        label: state.name,
        value: state.abbreviation,
      };
    }),
  ];

  const dataDepartments = [
    {
      label: "Select a department...",
      value: "DEFAULT",
      disabled: true,
    },
    ...departments.map((department) => {
      return { 
        label: department, 
        value: department.toLowerCase(), 
      };
    }),
  ];

  return (
    <div className="home-container p-default flex flex-col gap-y-4">
      <header className="flex flex-col gap-y-4 items-center p-default">
        <h1 className="font-bold text-3xl">HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
        <h2 className="font-bold text-2xl">Create Employee</h2>
      </header>
      <Form dataOfStates={dataStates} dataOfDepartments={dataDepartments} />
    </div>
  );
}

export default HomePage;
