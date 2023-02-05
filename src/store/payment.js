import axios from "axios";

const Url = "https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io";

const state = {
  payment: null,
  seats: [],
  selectedSeat: null,
  paymentLoading: false,
  error: null,
};

const getters = {};

const actions = {
  async getPayment({ commit }, id) {
    commit("setLoading", true);
    await axios
      .get(Url + "/payments/" + id)
      .then((response) => {
        commit("setPayment", response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
  async postPayment({ commit }, payment) {
    commit("setLoading", true);
    await axios
      .post(Url + "/payments", payment)
      .then((response) => {
        commit("setPayment", response.data.data);
      })
      .catch((err) => {
        commit("setError", err);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
};

const mutations = {
  setPayment(state, payment) {
    state.payment = payment;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
