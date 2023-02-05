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

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
