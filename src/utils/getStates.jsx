export const getStatesName = (statesList) => {
  return statesList.map(state => state.name)
}

export const getStateAb = (statesList, stateName) => {
  return statesList.filter(state => {
    if(state.name.toLowerCase() === stateName.toLowerCase()) return state.abbreviation
  })
}