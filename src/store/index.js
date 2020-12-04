import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    site_setting: {
      broad_cast_title: '워싱턴 지역의 유일한 한인부동산 포탈사이트 입니다.',
      top_banner_links: [
        {
          label: 'English',
          icon: '',
          link: '',
          diver: true
        },
        {
          label: '부동산학교',
          icon: 'fas fa-graduation-cap',
          link: '/test',
          diver: true
        },
        {
          label: '회사소개',
          icon: 'fas fa-home',
          link: '',
          diver: true
        },
        {
          label: '고객문의',
          icon: 'fas fa-user-friends',
          link: '',
          diver: true
        },
        {
          label: '에이전트 로그인',
          icon: 'fas fa-sign-in-alt',
          link: '',
          diver: false
        }
      ],
      logo: {
        image: '~@/assets/img/logo.png',
        alt_text: 'GIANT'
      },
      contact_list: [
        {
          icon: 'fas fa-phone',
          title: 'Phone Number',
          description: '+1 758 456 4669',
          link: false,
          diver: true
        },
        {
          icon: 'fas fa-map-marker-alt',
          title: 'Fairfax Office',
          description: '2458 Prosperity Ave. $580',
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
          to: '/sale',
          isDrop: true,
          children: [
            {
              name: '신규 리스팅',
              isDrop: false,
              to: '/sale/property'
            },
            {
              name: '독점 리스팅',
              isDrop: false,
              to: '/sale/giantrealty'
            },
            {
              name: '워싱턴 DC 부동산 매매',
              isDrop: false,
              to: '/sale/washingtonDC'
            },
            {
              name: '오픈하우스',
              isDrop: false,
              to: '/sale/openhouse'
            },
            {
              name: '학군검색',
              isDrop: false,
              to: '/sale/school-search'
            }
          ]
        },
        {
          name: 'For Rent',
          to: '/rent/property',
          isDrop: true,
          children: [
            {
              name: '신규 리스팅',
              isDrop: false,
              to: '/rent/property'
            },
            {
              name: '독점 리스팅',
              isDrop: false,
              to: '/rent/giantrealty'
            },
            {
              name: '워싱턴 DC 부동산 매매',
              isDrop: false,
              to: '/rent/washingtonDC'
            },
            {
              name: '학군검색',
              isDrop: false,
              to: '/rent/school-search'
            }
          ]
        },
        {
          name: '비지니스',
          isDrop: false,
          to: '/bossiness'
        },
        {
          name: '커머셜',
          isDrop: false,
          to: '/commercial'
        },
        {
          name: '커뮤니티',
          isDrop: true,
          children: [
            {
              name: '부동산 컬럼',
              isDrop: false,
              to: '/community/1'
            },
            {
              name: '부동산 경제뉴스',
              isDrop: false,
              to: '/community/2'
            },
            {
              name: '자이언트 부동산 소식',
              isDrop: false,
              to: '/community/3'
            },
            {
              name: '부동산 학교',
              isDrop: false,
              to: '/community/4'
            },
            {
              name: '부동산 매매 상담',
              isDrop: false,
              to: '/community/5'
            }
          ]
        },
        {
          name: '에이젼트',
          isDrop: false,
          to: '/agent'
        }
      ],
      social_links: [
        {
          icon: 'fab fa-facebook-f',
          link: 'https://facebook.com'
        },
        {
          icon: 'fab fa-twitter',
          link: 'https://twitter.com'
        }
      ],
      footer_intro:[
        {
          icon:  'fas fa-graduation-cap',
          text:  '부동산학교 및 온라인 강좌 안내',
          link:  ''
        },
        {
          icon:  'fas fa-home',
          text:  '일등 뉴스타 부동산 회사 소개',
          link:  ''
        },
        {
          icon:  'fas fa-home',
          text:  '일등 뉴스타 부동산 지사 안내',
          link:  ''
        },
        {
          icon:  'fas fa-user-friends',
          text:  '일등 뉴스타 부동산 고객 문의',
          link:  ''
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
