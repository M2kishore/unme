const initState = {
  email: 'rotor blade',
  password: 'rotorblade@gmail.com'
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      console.log('increase');
      return state;
    default:
      return state
  }
};

export default authReducer;