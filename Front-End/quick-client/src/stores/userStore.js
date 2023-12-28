import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      user: [],
    };
  },

  actions: {
    incrementUser(value) {
        this.user.push(value[0]);
    },
  },

  getters:{
    showUser(){
        return this.user
    }
  }
});
