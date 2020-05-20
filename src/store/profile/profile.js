export default {
  state: {
    userData: {
      name: 'Margaret',
      position: 'Frontend-developer',
      portraitUrl: 'https://cdn.quasar.dev/img/avatar2.jpg',
      skillsArr: {
        hardSkills: [
          'JavaScript',
          'ES6-ES9 syntax knowledge',
          'Algorithms and data structures',
          'OO programming understandings',
          'Design patterns',
          'UI principles understandings',
          'HTML/CSS',
          'SCSS',
          'Git',
          '*nix command line basics'
        ],
        softSkills: [
          'Good communication skills',
          'Native english, fluent russian',
          'Problem solving skills',
          'Focusing on teamwork',
          'Emotional intelligence',
          'Adaptability',
          'Work ethic',
        ]
      },
    }
  },
  getters: {
    getUserData(state) {
      return state.userData
    }
  },
}
