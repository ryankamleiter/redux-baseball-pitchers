const initialState = {
    pitcherList: ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],
    catcherList: ['Roy Campanella', 'Elston Howard', 'Kenji Jojima']
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PITCHER':
        return {
          ...state,
          pitcherList: [...state.pitcherList, action.payload]
        };
      case 'ADD_CATCHER':
        return {
          ...state,
          catcherList: [...state.catcherList, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;