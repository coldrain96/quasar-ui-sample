export default {
  state: {
    drawerLinksArr: [
      {
        name: 'Documents',
        link: '/documents',
        img: 'attach_file'
      },
      {
        name: 'Chat',
        link: '/chat',
        img: 'chat'
      },
      {
        name: 'User profile',
        link: '/profile',
        img: 'person'
      },
    ]
  },
  getters: {
    getAllDrawerLinks(state) {
      return state.drawerLinksArr
    }
  },
}
