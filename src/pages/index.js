import { Testimonials } from '@/components/Testimonials'
import { SearchButton } from '@/components/Search'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'
import { NavItems, NavPopover } from '@/components/Header'

function Header() {
  return (
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bottom-10">
          <img
            src={require('@/img/beams/byopills-hero-opacity-20.png').default}
            alt=""
            className="absolute bottom-[-10rem] w-full"
          />
        </div>
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6">
          <Logo className="w-auto h-5" />
          <div className="flex items-center">
            <SearchButton className="text-gray-500 w-8 h-8 -my-1 flex items-center justify-center md:hidden">
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </SearchButton>
            <div className="-my-1 ml-2 -mr-1 md:hidden">
              <NavPopover />
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <NavItems />
              </ul>
            </nav>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-center">
            Everything about the BYOVERSE. <br />
            Powered by BYOCommunity.
          </h1>
          <p className="mt-6 text-lg text-gray-400 text-center max-w-3xl mx-auto">
            BYODocs aims to capture accurate confirmed knowledge about{' '}
            <span className="font-medium text-orange-500">BYOPills</span>
            {' by '}
            <span className="font-medium text-orange-500">BYO Studios</span>. The articles in the
            docs are kept up-to-date with the latest info from BYO Studios. Everyone can contribute
            to this documentation.
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <NextLink href="/docs/welcome">
              <a className="bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
                Get started
              </a>
            </NextLink>
            <SearchButton className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white/10 ring-1 ring-gray-900/10 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-gray-400">
              {({ actionKey }) => (
                <>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-none text-gray-300"
                    aria-hidden="true"
                  >
                    <path d="m19 19-3.5-3.5" />
                    <circle cx="11" cy="11" r="6" />
                  </svg>
                  <span className="flex-auto">Quick search...</span>
                  {actionKey && (
                    <kbd className="font-sans font-semibold">
                      <abbr title={actionKey[1]} className="no-underline text-gray-300">
                        {actionKey[0]}
                      </abbr>{' '}
                      K
                    </kbd>
                  )}
                </>
              )}
            </SearchButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="BYODocs - Everything you need to know about BYOPills."
        />
        <meta
          key="og:title"
          property="og:title"
          content="BYODocs - Everything you need to know about BYOPills."
        />
        <title>BYODocs - Everything you need to know about BYOPills.</title>
      </Head>
      <div className="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
        <Header />
        <section className="text-center px-8">
          <h2 className="text-4xl text-bold font-extrabold sm:text-5xl">
            The Vision{' '}
            <span role="img" aria-label="Eye emoji" className="font-normal">
              👁️
            </span>
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
                The Vision that we have as Pillagers, that BYOPills is something never seen before,
                a Team outperforming everything out there, in quality and pace. That The BYOVERSE
                will be the biggest Blockchain Game out there. HUNDREDS OF THOUSANDS of players. The
                Groundbreaking Vision. Pioneers. They will teach about BYOPILLS in schools when they
                cover history of gaming and P2E rise.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
              <img
                src={require('@/img/avatars/kebz.png').default}
                alt=""
                className="w-14 h-14 rounded-full"
                loading="lazy"
              />
              <div>
                <div className="text-gray-100 font-semibold dark:text-white">kEBZ.ΞTH</div>
                <div className="mt-0.5 text-sm text-orange-400 leading-6">@_kEBZ</div>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}
