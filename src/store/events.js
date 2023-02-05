import axios from "axios";
const Url = "https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io";

const state = {
  events: [],
  event: null,
  error: null,
  eventLoading: false,
};

const getters = {
  getEvents: (state) => state.events,
  getEvent: (state) => state.event,
  getEventLoading: (state) => state.eventLoading,
  getError: (state) => state.error,
};

const actions = {
  async getEvents({ commit }) {
    commit("setLoading", true);
    await axios
      .get(Url + "/events")
      .then((response) => {
        commit("setEvents", response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },

  /* async getEvents({ commit }) {
    commit("setLoading", true);
    try {
      const data = await axios.get(Url + "/events");
      commit("setEvents", data.data.data);
    } catch (error) {
      commit("setError", error);
      console.log(error);
      
    } finally {
      commit("setLoading", false);
    }
  }, */

  async getEventById({ commit }, id) {
    commit("setLoading", true);
    await axios
      .get(Url + "/events/" + id)
      .then((response) => {
        commit("setEvent", response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },

  async clearEvent({ commit }) {
    commit("setLoading", true);
    commit("setEvent", null);
    commit("setLoading", false);
  },
};

const mutations = {
  setEvents(state, events) {
    state.events = events;
    console.log("da", state.events);
  },
  setLoading(state, status) {
    state.eventLoading = status;
  },

  setEvent(state, event) {
    state.event = event;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
