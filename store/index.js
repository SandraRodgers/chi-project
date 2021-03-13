export const state = () => ({
  showMobileMenu: false,
  showAdoptDropdown: false
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
  }
}