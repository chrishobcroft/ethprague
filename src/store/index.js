import Vuex from 'vuex'

const DEBUG = process.env.NODE_ENV === 'development'

export default Vuex.createStore({
  modules: {

  },
  strict: DEBUG
});
