import axios from "axios";

const baseUrl = "https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io";

const state = {
  payment: null,
  seats: [],
  selectedSeat: null,
  paymentLoading: false,
  error: null,
};

const getters = {};

const actions = {
  async postPayment({ commit }, data) {
    commit("setLoading", true);
    await axios
      .post(`${baseUrl}/payment`, data)
      .then((response) => {
        if (response.data.code === 201) {
          commit("setPayment", response.data);
        } else {
          commit("setError", response.data.message);
        }
      })
      .catch((err) => {
        commit("setError", err);
      });
    commit("setLoading", false);
  },

  async getSeats({ commit }, { ticket, category }) {
    commit("setLoading", true);
    await axios
      .get(`${baseUrl}/seat-plans/${ticket}/${category}`)
      .then((response) => {
        commit("setSeats", response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      });
    commit("setLoading", false);
  },

  async getEventById({ commit }, id) {
    commit("setLoading", true);
    await axios
      .get(baseUrl + "/events/" + id)
      .then((response) => {
        commit("setEvent", response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      });
    commit("setLoading", false);
  },

  async assignSelectedSeat({ commit }, data) {
    commit("setLoading", true);
    commit("setSelectedSeat", data);
    commit("setLoading", false);
  },

  async clearAll({ commit }) {
    commit("setLoading", true);
    commit("setPayment", null);
    commit("setSeats", []);
    commit("setSelectedSeat", null);
    commit("setError", null);
    commit("setLoading", false);
  },
};

const mutations = {
  setLoading(state, status) {
    state.paymentLoading = status;
  },

  setPayment(state, resp) {
    state.payment = resp;
  },

  setSeats(state, seats) {
    state.seats = seats;
  },

  setSelectedSeat(state, seats) {
    state.selectedSeat = seats;
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
