import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [pages['welcome'], pages['faq']],
  'BYO Ecosystem': [
    pages['byopills'],
    pages['apostles'],
    pages['byoland'],
    pages['byocraft'],
    pages['byokey'],
    pages['byovape'],
    pages['tryp'],
  ],
  Partnership: [
    pages['galaxy-fight-club'],
    pages['chibi-clash'],
    pages['the-red-village'],
    pages['legends-of-venari'],
  ],
  'Community & Support': [pages['contributing'], pages['support'], pages['policies']],
}
