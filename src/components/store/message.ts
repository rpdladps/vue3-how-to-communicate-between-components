import { defineStore } from 'pinia'

export const useMessageStore = defineStore({
  id: 'message',
  state: () => ({
    message: 'This is default message.'
  }),
  getters: {
    getInfo: (state) => "message is \'" + state.message + "\'."
  },
  actions: {
    updateMessage(text) {
      this.message = text
    }
  }
})
