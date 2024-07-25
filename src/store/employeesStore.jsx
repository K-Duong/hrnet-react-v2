import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const employeeStore = (set) => ({
  // TODO: data for testing
  employeeList: [
    {
      _id: 1,
      firstName: "Khanh",
      lastName: "Trinh",
      startDate: "2014-06-17T22:00:00.000Z",
      department: "marketing",
      dateOfBirth: "1985-07-21T22:00:00.000Z",
      street: "79 rue Alexandre Boutin",
      city: "Villeurbanne",
      state: "idaho",
      zipCode: "69100",
    },
    {
      _id: 2,
      firstName: "Khanh",
      lastName: "Trinh",
      dateOfBirth: "1992-01-05T23:00:00.000Z",
      startDate: "2022-07-10T22:00:00.000Z",
      street: "79 rue Alexandre Boutin",
      city: "Villeurbanne",
      state: "hawaii",
      zipCode: "69100",
      department: "human resources",
    },
    {
      _id: 3,
      firstName: "John",
      lastName: "Doe",
      startDate: "2024-03-12T23:00:00.000Z",
      department: "marketing",
      dateOfBirth: "2006-06-24T22:00:00.000Z",
      street: "45 Cours Emile Zola",
      city: "Bordeaux",
      state: "georgia",
      zipCode: "4321",
    },
    {
      _id: 4,
      firstName: "Peter",
      lastName: "Parker",
      dateOfBirth: "1992-03-02T23:00:00.000Z",
      startDate: "2009-07-01T22:00:00.000Z",
      street: "4 rue du Bellecombe",
      city: "Lille",
      state: "california",
      zipCode: "6524",
      department: "engineering",
    },
    {
      _id: 5,
      firstName: "Lucie",
      lastName: "Tran",
      dateOfBirth: "2008-06-29T22:00:00.000Z",
      startDate: "2023-12-21T23:00:00.000Z",
      street: "90 rue Greuze",
      city: "Villeurbanne",
      state: "wyoming",
      zipCode: "43214",
      department: "engineering",
    },
    {
      _id: 6,
      firstName: "Anne",
      lastName: "Hathaway",
      startDate: "2017-07-10T22:00:00.000Z",
      department: "engineering",
      dateOfBirth: "1986-03-03T23:00:00.000Z",
      street: "90 cours Dr Long",
      city: "Lyon",
      state: "new york",
      zipCode: "43244",
    },
  ],
  addNewEmployee: (employee) => {
    set((state) => ({
      employeeList: [...state.employeeList, employee],
    }));
  },

  clearList: () => {
    set(() => ({
      employeeList: [],
    }));
  },

});

const useEmployeeStore = create(
  persist(employeeStore, {
    name: "employee-storage",
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      console.log("state has been rehydrated", state);
    },
  })
);
export default useEmployeeStore;
