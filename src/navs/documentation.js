import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [pages['welcome'], pages['faq']],
  Ecosystem: [
    pages['byopills'],
    pages['apostles'],
    pages['byoland'],
    pages['byokey'],
    pages['byovape'],
    pages['byocraft'],
    pages['tryp'],
  ],
  Partnership: [
    pages['wonderquest-and-decentraland'],
    pages['galaxy-fight-club'],
    pages['chibi-legends'],
    pages['the-red-village'],
    pages['legends-of-venari'],
  ],
  'Community & Support': [pages['contribute'], pages['policies'], pages['support']],
}
