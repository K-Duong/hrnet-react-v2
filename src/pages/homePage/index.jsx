import { Link } from "react-router-dom";

import Form from "../../components/form";

import { getStatesName } from "../../utils/getStates";
import departments from "../../data/departments";
import states from "../../data/states";

import "./style.css"

function HomePage() {
  const statesList = getStatesName(states);
  
  return (
    <div className="home-container p-default flex flex-col gap-y-4">
      <header className="flex flex-col gap-y-4 items-center p-default">
        <h1 className="font-bold text-3xl">HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
        <h2 className="font-bold text-2xl">Create Employee</h2>
      </header>
      <Form dataOfStates={statesList} dataOfDepartments={departments}/>
    </div>
  );
}

export default HomePage
