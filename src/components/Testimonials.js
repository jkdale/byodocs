import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

let testimonials = [
  // Column 1
  [
    {
      content:
        'The BYOPill community is way too strong - you guys are amazing ❤️ The land sale is a huge win for all of us as we look to continuously develop the vision. Holders will always be rewarded and the community will always be our number 1 priority.\nThat’s what makes web3 great.',
      url: 'https://twitter.com/P_etherH/status/1471678341354770436',
      author: {
        name: 'PΞTΞR',
        handle: '@P_etherH',
        avatar: require('@/img/avatars/petherh.jpg').default,
      },
    },
    {
      content: 'Don’t sleep on land in the metaverse especially #BYOland #byopills',
      url: 'https://twitter.com/GIBBSGRANT/status/1472610758974447619',
      author: {
        name: 'MrPERFECTDEFECT.eth',
        handle: '@GIBBSGRANT',
        avatar: require('@/img/avatars/mrperfectdefect.jpg').default,
      },
    },
  ],
  // Column 2
  [
    {
      content: 'Its safe to say @BYOPills is making moves 👀',
      url: 'https://twitter.com/thedropnft/status/1472331008762519552',
      author: {
        name: `The Drop`,
        handle: '@thedropnft',
        avatar: require('@/img/avatars/the-drop.jpg').default,
      },
    },
    {
      content:
        'The @BYOPill game landscape will be shaped by the pill tops used for minting each BYOLand. Similar tops will be found near each other. This infographic denotes possible grouping of terrains, as well as rarity (the size of each ingredient is proportional to the # of pills). Enjoy!',
      url: 'https://twitter.com/0xSeba/status/1472348072076320768',
      author: {
        name: '0xSeba.crypto',
        handle: '@0xSeba',
        avatar: require('@/img/avatars/0xseba.jpg').default,
      },
    },
  ],
  // Column 3
  [
    {
      content:
        "A montage/tiktok style video of this year's development at the @BYOPills project. What the team manages to pull off is insane, and they've said 'the best is yet to come!!'",
      url: 'https://twitter.com/f0xboss/status/1471882109581422594',
      author: {
        name: 'f0xboss',
        handle: '@f0xboss',
        avatar: require('@/img/avatars/f0xboss.jpg').default,
      },
    },
    {
      content: 'There’s only 284 @BYOPills BYOLands for sale in total out of 10k.',
      url: 'https://twitter.com/CryptoVonDoom/status/1472676831862001664',
      author: {
        name: 'VonDoom.eth',
        handle: '@CryptoVonDoom',
        avatar: require('@/img/avatars/vondoom.jpg').default,
      },
    },
    {
      content:
        'Not many projects out there like @BYOPills. I’ve been very impressed with their drops, utility and overall organization + follow-through. They deliver and the quality of their NFT is impressive.',
      url: 'https://twitter.com/OliverMaroney/status/1471695194990907393',
      author: {
        name: 'Oliver Maroney',
        handle: '@OliverMaroney',
        avatar: require('@/img/avatars/olivermaroney.jpg').default,
      },
    },
  ],
]

function Testimonial({ author, content, url, expanded }) {
  let [focusable, setFocusable] = useState(true)
  let ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  return (
    <li ref={ref} className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-space-800 rounded-lg p-6">
        <blockquote className="mt-6 text-gray-400">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img
            src={author.avatar}
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-auto">
            <div className="text-base text-gray-100 font-semibold">
              {url ? (
                <a
                  href={url}
                  tabIndex={focusable || expanded ? 0 : -1}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="absolute inset-0" />
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </div>
            <div className="mt-0.5 text-orange-400">{author.handle}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  )
}

export function Testimonials() {
  let ref = useRef()
  let [expanded, setExpanded] = useState(false)
  let [showCollapseButton, setShowCollapseButton] = useState(false)
  let [transition, setTransition] = useState(false)
  let { ref: inViewRef, inView } = useInView({ threshold: 0 })
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  useEffect(() => {
    if (!expanded || !inView) return
    function onScroll() {
      let bodyRect = document.body.getBoundingClientRect()
      let rect = ref.current.getBoundingClientRect()
      let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
      let isHalfWay = window.scrollY > middle
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false)
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [expanded, showCollapseButton, inView])

  return (
    <section
      ref={ref}
      tabIndex="-1"
      className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
    >
      <h2 className="sr-only">Testimonials</h2>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3',
          !expanded && 'max-h-[33rem] overflow-hidden'
        )}
      >
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx(
              'space-y-8',
              i === 1 && 'hidden sm:block',
              i === 2 && 'hidden lg:block'
            )}
          >
            {column.map((testimonial) => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-space-900 pt-32 pb-8 pointer-events-none',
          expanded ? 'sticky -mt-52' : 'absolute',
          transition && 'transition-opacity duration-300',
          expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0')
        )}
      >
        <button
          type="button"
          className={clsx(
            'relative bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center',
            transition && 'transition-transform',
            expanded && !showCollapseButton && 'translate-y-4',
            (!expanded || showCollapseButton) && 'pointer-events-auto'
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Okay, I get the point' : 'Show more...'}
        </button>
      </div>
    </section>
  )
}
