export const initialState = {
  transactions: []
};

export const getBalance = transactions =>
transactions.reduce((balance, transaction) => balance + parseFloat(transaction.amount), 0).toFixed(2);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        )
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
