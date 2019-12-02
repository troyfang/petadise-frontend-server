import Vue from 'vue'
import Router from 'vue-router'
import GameMain from '@/components/GameMain'
import ItemPage from '@/components/ItemPage'
import PetCandidates from '@/components/PetCandidates'
import BlankForJump from '@/components/Function-BlankForJump'
import MatchRateReport from '@/components/MatchRateReport'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Questionnaire from '@/components/Questionnaire'
import PetInfo from '@/components/PetInfo'
import StyleGuide from '@/components/StyleGuide'
import PetArchive from '@/components/PetArchive'
import ShelterLocation from '@/components/ShelterLocation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/GameMain',
      name: 'GameMain',
      component: GameMain
    },
    {
      path: '/ItemPage',
      name: 'ItemPage',
      component: ItemPage
    },
    {
      path: '/BlankForJump',
      name: 'BlankForJump',
      component: BlankForJump
    },
    {
      path: '/MatchRateReport',
      name: 'MatchRateReport',
      component: MatchRateReport
    },
    {
      path: '/PetCandidates',
      name: 'PetCandidates',
      component: PetCandidates
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    },
    {
      path: '/PetInfo',
      name: 'PetInfo',
      component: PetInfo
    },
    {
      path: '/StyleGuide',
      name: 'StyleGuide',
      component: StyleGuide
    },
    {
      path: '/PetArchive',
      name: 'PetArchive',
      component: PetArchive
    },
    {
      path: '/ShelterLocation',
      name: 'ShelterLocation',
      component: ShelterLocation
    }
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // }
  ]
})
