export default (state = [], action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "DELETE_ITEM":
            // Filtra os items com id diferente do estado
            return state.filter(item => item.id != action.payload )
        case "CHANGE_ITEM":
            return state.map(item => {
                if (item.id == action.payload){
                    //Recebe o inverso
                    item.done = !item.done
                }
                return item
            })
            
    }
}