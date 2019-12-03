import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


const Adres = "https://uinames.com/api/?amount=25";

const store = () =>
  new Vuex.Store({
    state: {
      posts: {},
      loading: true
    },
    actions: {
      async nuxtServerInit({ commit }) {
        const response = await axios.get(Adres);
        commit("updatePosts", response.data);
        commit("changeLoadingState", false);
      }
    },

    mutations: {
      updatePosts(state, posts) {
        state.posts = posts;
      },
      changeLoadingState(state, loading) {
        state.loading = loading;
      }
    }
  });

export default store;
