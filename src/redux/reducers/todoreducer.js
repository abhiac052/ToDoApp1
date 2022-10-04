const initialData = {
    list : []
}

const todoreducer = (state=initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id,data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list, //data already present will be displayed
                    {
                        id:id,   //new data to be added
                        data:data
                }]
            }

            case "DELETE_TODO":
                const newList = state.list.filter((comp)=> comp.id !== action.id) //updated data will be stored after comparing the ids
            return {
                ...state,
                list: newList
            }

            case "REMOVE_TODO":
                return {
                    ...state,
                    list: []
                }
            
        default:
            return state;
    }
}

export default todoreducer;