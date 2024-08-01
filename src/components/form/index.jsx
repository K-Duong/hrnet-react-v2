import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import Button from "../button";
import SelectItem from "../selectItem";
import DateSelector from "../date";
import ModalSucessMessage from "../modal";

import useEmployeeStore from "../../store/employeesStore";

import "./style.css";

function Form({ dataOfStates, dataOfDepartments }) {
  const [openedModal, setOpenedModal] = useState(false);
  const { register, handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      _id: null,
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      dateOfBirth: "",
      street: "",
      city: "",
      state: "",
      zipCode: 0,
    },
  });

  const addNewEmployee = useEmployeeStore((state) => state.addNewEmployee);

  const { errors, isValid, isSubmitted, isSubmitSuccessful } = formState;

  const handleCloseModal = () => setOpenedModal(false);

  useEffect(() => {
    const initForm = () => {
      //TODO: fix bug modal ouvert après avoir saisi tous les inputs --> rajouter isSubmitSuccessful dans la condition
      if (isValid && isSubmitted && isSubmitSuccessful) {
        console.log("is Submitted :", isSubmitted);
        console.log("init form");
        reset();
        setOpenedModal(true);
      }
    };
    initForm();
    console.log("is Submitted :", isSubmitted);
  }, [isSubmitted, reset, isSubmitSuccessful, isValid]);

  const onSubmit = (data) => {
    addNewEmployee({ ...data, _id: Date.now() });
    return;
  };
  return (
    <>
      <form
        className="form-add-employee flex flex-col border rounded-md p-5 gap-3 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="employee-info flex flex-col  w-full gap-5">
          <div className="inputs-fullName flex flex-row justify-between w-full">
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input
                className="p-2"
                type="text"
                id="firstName"
                placeholder="Steven"
                {...register("firstName", {
                  required: { value: true, message: "Enter your first name" },
                })}
              />
              {errors.firstName && (
                <span className="message-error">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName" className="self-start">
                Last Name
              </label>
              <input
                className="p-2"
                type="text"
                id="lastName"
                placeholder="King"
                {...register("lastName", {
                  required: { value: true, message: "Enter your last name" },
                })}
              />
              {errors.lastName && (
                <span className="message-error">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="select-dates flex flex-row justify-between w-full">
            <div className="select-wrapper">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: { value: true, message: "Select a date" } }}
                render={({ field: { onChange, value, name } }) => (
                  <DateSelector
                    id={name}
                    selected={value}
                    handleChange={onChange}
                  />
                )}
              />
              {errors.dateOfBirth && (
                <span className="message-error">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="select-wrapper">
              <label htmlFor="startDate">Start date</label>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: { value: true, message: "Select a date" } }}
                render={({ field: { onChange, value, name } }) => (
                  <DateSelector
                    id={name}
                    selected={value}
                    handleChange={onChange}
                  />
                )}
              />
              {errors.startDate && (
                <span className="message-error">
                  {errors.startDate.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <fieldset className="employee-adress flex flex-col justify-center items-center self-center border border-gray-400 ">
          <legend className="text-left">Address</legend>
          <div className="employee-adress-content flex flex-col justify-center items-center p-2 gap-y-2 w-full">
            <div className="input-wrapper">
              <label htmlFor="street">Street</label>
              <input
                className="p-2"
                type="text"
                id="street"
                {...register("street", {
                  required: {
                    value: true,
                    message: "Input should not be empty",
                  },
                })}
              />
              {errors.street && (
                <span className="message-error">{errors.street.message}</span>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <input
                className="p-2"
                type="text"
                id="city"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Input should not be empty",
                  },
                })}
              />
              {errors.city && (
                <span className="message-error">{errors.city.message}</span>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                className="p-2"
                type="number"
                id="zipCode"
                {...register(
                  "zipCode",
                  {
                    // validation for navigator doesn't support type=number
                    validate: (v) => {
                      const newValue = Number(v);
                      return (
                        (newValue > 0 && Number.isInteger(newValue)) ||
                        "Zip code should be an integer number"
                      );
                    },
                  },
                  { required: true }
                )}
              />
              {errors.zipCode && (
                <span className="message-error">{errors.zipCode.message}</span>
              )}
            </div>
            <div className="input-wrapper">
              <Controller
                control={control}
                name="state"
                rules={{
                  required: { value: true, message: "Select an option" },
                }}
                render={({ field: { onChange, value, name } }) => (
                  <SelectItem
                    className={"select-state"}
                    label={"States"}
                    value={value}
                    handleSelect={onChange}
                    name={name}
                    options={dataOfStates}
                  />
                )}
              />
              {errors.state && (
                <span className="message-error">{errors.state.message}</span>
              )}
            </div>
          </div>
        </fieldset>
        <div className="employee-department input-wrapper">
          <Controller
            control={control}
            name="department"
            rules={{ required: { value: true, message: "Select an option" } }}
            render={({ field: { onChange, value, name } }) => (
              <SelectItem
                className={"select-department"}
                label={"Department"}
                value={value}
                handleSelect={onChange}
                name={name}
                options={dataOfDepartments}
              />
            )}
          />
          {errors.department && (
            <span className="message-error">{errors.department.message}</span>
          )}
        </div>

        <Button
          type={"submit"}
          className={"btn-submit"}
          handleClick={handleSubmit(onSubmit)}
          // disabled={!isValid}
        >
          Save
        </Button>
      </form>
      {openedModal && <ModalSucessMessage handleClose={handleCloseModal} />}
    </>
  );
}

export default Form;
