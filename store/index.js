export const state = () => ({
  showMobileMenu: false,
  showAdoptDropdown: false
})

export const mutations = {
  toggle(state) {
    state.showMobileMenu = !state.showMobileMenu;
    console.log(state.showMobileMenu)
  },
  show (state) {
    state.showAdoptDropdown = true;
    console.log('show dropdown',state.showAdoptDropdown)
  },
  hide (state) {
    state.showAdoptDropdown = false;
    console.log('show dropdown',state.showAdoptDropdown)
  }
}