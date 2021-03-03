export const state = () => ({
    showMobileMenu: false
  })
  
  export const mutations = {
    toggle(state) {
      state.showMobileMenu = !state.showMobileMenu;
      console.log(state.showMobileMenu)
    }
  }