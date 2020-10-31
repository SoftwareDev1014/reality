import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    site_setting: {
      broad_cast_title: '워싱턴 지역의 유일한 한인부동산 포탈하이크입니다.',
      top_banner_links: [
        {
          label: 'English',
          icon: '',
          link: '',
          diver: true
        },
        {
          label: '부동한 학교',
          icon: 'fas fa-home',
          link: '/test',
          diver: true
        },
        {
          label: '화사소개',
          icon: 'fas fa-phone',
          link: '',
          diver: true
        },
        {
          label: '고객문의',
          icon: '',
          link: '',
          diver: true
        },
        {
          label: '에이전트 로그인',
          icon: '',
          link: '',
          diver: false
        }
      ],
      logo: {
        image: '',
        alt_text: 'GIANT'
      },
      contact_list: [
        {
          icon: 'fas fa-phone',
          title: 'Phone Number',
          description: '+1 234234234234',
          link: false,
          diver: true
        },
        {
          icon: 'fas fa-map-marker-alt',
          title: 'Fairfax Office',
          description: '12321 asdfsadf sdf',
          link: false,
          diver: true
        },
        {
          icon: 'fas fa-envelope-open',
          title: 'Email Address',
          description: 'asdf@gasdf.com',
          link: true
        }
      ],
      menu: [
        {
          name: 'Home',
          isDrop: false,
          to: '/home'
        },
        {
          name: 'For Sale',
          isDrop: true,
          children: [
            {
              name: '신규 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '독점 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '워싱턴 DC 부동산 매매',
              isDrop: false,
              to: '/home'
            }
          ]
        },
        {
          name: 'For Rent',
          isDrop: true,
          children: [
            {
              name: '신규 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '독점 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '워싱턴 DC 부동산 매매',
              isDrop: false,
              to: '/home'
            }
          ]
        },
        {
          name: '비지니스',
          isDrop: false,
          to: '/home'
        },
        {
          name: '커머셜',
          isDrop: false,
          to: '/home'
        },
        {
          name: '커뮤니티',
          isDrop: true,
          children: [
            {
              name: '신규 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '독점 리스팅',
              isDrop: false,
              to: '/home'
            },
            {
              name: '워싱턴 DC 부동산 매매',
              isDrop: false,
              to: '/home'
            }
          ]
        },
        {
          name: '에이젼트',
          isDrop: false,
          to: '/home'
        },
      ],
      social_links: [
        {
          icon: 'fab fa-facebook-f',
          link: 'https://facebook.com'
        },
        {
          icon: 'fab fa-twitter',
          link: ''
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
