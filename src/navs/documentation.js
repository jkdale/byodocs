import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [pages['welcome'], pages['introduction'], pages['faq']],
  Ecosystem: [
    pages['byopills'],
    pages['apostles'],
    pages['byoland'],
    pages['byokey'],
    pages['byovape'],
    pages['byocraft'],
    pages['tryp'],
    pages['byowear'],
  ],
  Partnership: [
    pages['wonderquest-and-decentraland'],
    pages['galaxy-fight-club'],
    pages['chibi-clash'],
    pages['the-red-village'],
    pages['legends-of-venari'],
    pages['sciart-lab'],
  ],
  'Community & Support': [
    pages['contributors'],
    pages['contribute'],
    pages['policies'],
    pages['support'],
  ],
}
