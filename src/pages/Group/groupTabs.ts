import { GroupTabs } from 'interfaces'

import HomeTab from './components/HomeTab'
import ScrumsTab from './components/ScrumsTab'

const groupTabs: GroupTabs = {
  home: {
    key: 'home',
    label: 'Home',
    component: HomeTab
  },
  scrums: {
    key: 'scrums',
    label: 'Scrums',
    component: ScrumsTab
  }
}

export default groupTabs
