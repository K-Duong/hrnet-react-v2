import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const employeeStore = (set, get) => ({
  // TODO: to 
  employeeList: [
    {
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

  ascendingList: (element) => {
    const copiedEmployeeList = [...get().employeeList];
    const sortedList = copiedEmployeeList.sort((obj1, obj2) => {
      if (element === "dateOfBirth" || element === "startDate") {
        return new Date(obj1[element]) - new Date(obj2[element]);
      } else if (element === "state") {
        return obj1.stateAbbreviation.localeCompare(obj2.stateAbbreviation);
      } else {
        return obj1[element].localeCompare(obj2[element]);
      }
    });
    return sortedList;
  },

  descendingList: (element) => {
    const copiedEmployeeList = [...get().employeeList];
    const sortedList = copiedEmployeeList.sort((obj1, obj2) => {
      if (element === "dateOfBirth" || element === "startDate") {
        return new Date(obj2[element]) - new Date(obj1[element]);
      } else if (element === "state") {
        return obj2.stateAbbreviation.localeCompare(obj1.stateAbbreviation);
      } else {
        return obj2[element].localeCompare(obj1[element]);
      }
    });
    return sortedList;
  },

  filterEmployee: (str, sortedList = []) => {
    // TODO: revoir l'algo pour filter, pas simplement include mais si string contient les sympboles
    let filteredList;
    if(sortedList.length === 0) {
      console.log("no sorted list")
      filteredList = [...get().employeeList]
    } else {
      console.log("filter from sorted list")
      filteredList = [...sortedList]
    }
    if (str.length > 0) {
      filteredList = filteredList.filter((employee) =>
        Object.values(employee).some((value) =>
          value.toLowerCase().includes(str)
        )
      );
    } else {
      filteredList = [];
    }
    console.log(filteredList);
    return filteredList ;
  },

  clearFilter: () => {
    set((state) => {
      return (state.filteredList = []);
    });
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
