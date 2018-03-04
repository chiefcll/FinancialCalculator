export const USER = 'navigation/USER';

const initialState = {
  navigation: [
    {
      title: 'Home',
      route: '/'
    },
    {
      title: 'About Us',
      route: '/about-us'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        navigation: [
          {
            title: 'Dashboard',
            route: '/'
          },
          {
            title: 'Projekte',
            route: '/'
          },
          {
            title: 'Einstellungen',
            route: '/about-us'
          }
        ]
      };
    default:
      return state;
  }
};

export const user = () => dispatch => {
  dispatch({
    type: USER
  });
};
