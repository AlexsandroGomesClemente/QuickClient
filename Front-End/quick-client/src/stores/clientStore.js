import { defineStore } from "pinia";

export const useClientsStore = defineStore("clients", {
  state() {
    return {
      client: [],
    };
  },

  actions: {
    incrementClient(value) {
        this.client.push(value[0]);
    },
  },

  getters:{
    showClient(){
        return this.client
    }
  }
});
