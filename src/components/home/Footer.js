import Link from 'next/link'
import { documentationNav } from '@/navs/documentation'
import { Logo } from '@/components/Logo'

const footerNav = [
  {
    'Getting Started': documentationNav['Getting Started'],
    Ecosystem: documentationNav['Ecosystem'],
  },
  {
    'Community & Support': documentationNav['Community & Support'],
    Community: [
      { title: 'GitHub', href: 'https://github.com/0xdevelopereth/byodocs' },
      { title: 'Discord', href: 'https://discord.gg/dbMUkR8dY2' },
      { title: 'Twitter', href: 'https://twitter.com/BYOPills' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-16 text-sm leading-6">
      <div className="max-w-7xl mx-auto divide-y divide-gray-500/30 px-4 sm:px-6 md:px-8">
        <div className="flex">
          {footerNav.map((sections) => (
            <div
              key={Object.keys(sections).join(',')}
              className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"
            >
              {Object.entries(sections).map(([title, items]) => (
                <div key={title} className="lg:flex-none lg:w-1/2">
                  <h2 className="font-semibold text-orange-400">{title}</h2>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <a className="text-gray-400 hover:text-gray-100">{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-16 pt-10">
          <Logo className="w-auto h-6" />
        </div>
      </div>
    </footer>
  )
}
