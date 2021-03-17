export const state = () => ({
  showMobileMenu: false,
  showAdoptDropdown: false,
  logo: {}
})

export const mutations = {
  toggle(state) {
    state.showMobileMenu = !state.showMobileMenu;
  },
  show (state) {
    state.showAdoptDropdown = true;
  },
  hide (state) {
    state.showAdoptDropdown = false;
  },
  setLogo(state, logo) {
    state.logo = logo
  }
}

export const getters = {
  getLogo: (state) => state.logo
}

export const actions = {

}