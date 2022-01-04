import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

let testimonials = [
  // Column 1
  [
    {
      content:
        "I'm going to let you all in on a little secret...🤫🤫 @BYOPills is the most slept on project in the entire space. Team with grand plans that has followed through 100% AND outperformed every step. Check the app & avatar. This team will be comparable to @BoredApeYC.",
      url: 'https://twitter.com/linuscaldwell5/status/1434924746827837444?s=21',
      author: {
        name: 'Mr. Linus Caldwell',
        handle: '@LinusCaldwell5',
        avatar: require('@/img/avatars/linus.jpg').default,
      },
    },
    {
      content: 'Still my favorite promo video.',
      url: 'https://twitter.com/JeffKCollins/status/1474134353684807688',
      author: {
        name: 'Jeff Collins',
        handle: '@JeffKCollins',
        avatar: require('@/img/avatars/jeff-collins.jpg').default,
      },
    },
    {
      content:
        'The BYOPill community is way too strong - you guys are amazing ❤️ The land sale is a huge win for all of us as we look to continuously develop the vision. Holders will always be rewarded and the community will always be our number 1 priority.\nThat’s what makes web3 great.',
      url: 'https://twitter.com/P_etherH/status/1471678341354770436',
      author: {
        name: 'PΞTΞR (BYO Founder)',
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
    {
      content:
        'Bought a few rows of lands in @BYOPills. I spoke to the team a few months ago & just watched from the sidelines. All I see them do is build. Would be dumb to not go hard on this.',
      url: 'https://twitter.com/cagyjan1/status/1473025241110781955',
      author: {
        name: 'CAGY',
        handle: '@cagyjan1',
        avatar: require('@/img/avatars/cagy.jpg').default,
      },
    },
    {
      content: 'Community 🤝 Building 🤝 Team',
      url: 'https://twitter.com/_kEBZ/status/1472348982441558019',
      author: {
        name: 'kEBZ.ΞTH',
        handle: '@_kEBZ',
        avatar: require('@/img/avatars/kebz.png').default,
      },
    },
    {
      content:
        'How to install the right mindset to understand the @BYOPills project. Everything you need to know about the project before going into 2022. A thread.',
      url: 'https://twitter.com/f0xboss/status/1475617344449925121',
      author: {
        name: 'f0xboss',
        handle: '@f0xboss',
        avatar: require('@/img/avatars/f0xboss.jpg').default,
      },
    },
  ],
  // Column 2
  [
    {
      content:
        '@BYOPills is up 27% with the pills sitting at 0.42, not to mention the other 800 parts of their universe that all have non-insignificant floor prices. The pill that keeps on giving.',
      url: 'https://twitter.com/Zeneca_33/status/1472726812824412160',
      author: {
        name: `Zeneca_33`,
        handle: '@Zeneca_33',
        avatar: require('@/img/avatars/zeneca-33.jpg').default,
      },
    },
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
    {
      content:
        'The 2022 and 2023 main new crypto will be $TRYP! Not launched yet, but soon! Prepare yourselves for @BYOPills’ in game currency!',
      url: 'https://twitter.com/SKYCRYPTOBOOMER/status/1472572627826925572',
      author: {
        name: 'cryptoboomer.eth',
        handle: '@SKYCRYPTOBOOMER',
        avatar: require('@/img/avatars/cryptoboomer.jpg').default,
      },
    },
    {
      content:
        'Today we made our first purchases for our early access vault. The Wizards are proud new land owners in the BYO Metaverse from @BYOPills.  Wizards will now reap the rewards for years to come from the future harvesting of our 10 land plots. LFG WIZARDS!',
      url: 'https://twitter.com/WTCnft/status/1471800142105698304',
      author: {
        name: 'Wizard Treasure Collective',
        handle: '@WTCnft',
        avatar: require('@/img/avatars/wtc.jpg').default,
      },
    },
    {
      content:
        'Bullish on @BYOPills, has got to be one of the least talked about and underrated projects in all of NFT’s',
      url: 'https://twitter.com/UAhorny/status/1475262671683407873',
      author: {
        name: 'defididdy.eth',
        handle: '@UAhorny',
        avatar: require('@/img/avatars/defididdy.jpg').default,
      },
    },
    {
      content:
        'Ok I just treated myself to a little Christmas gift and got another @BYOPills #BYOLAND At .3ish I feel like this has a lot of potential to grow. I really think these easily go over 1 ETH so I am gonna most likely grab a few more soon.',
      url: 'https://twitter.com/TheeHustleHouse/status/1474825690121785344',
      author: {
        name: 'BaronVonHustle.eth',
        handle: '@TheeHustleHouse',
        avatar: require('@/img/avatars/baronvonhustle.jpg').default,
      },
    },
  ],
  // Column 3
  [
    {
      content:
        'Well @joerogan just learned about @BYOPills #Metaverse is about to take off. Give it a few more months and you will see!',
      url: 'https://twitter.com/cagyjan1/status/1475164597627854848',
      author: {
        name: 'CAGY',
        handle: '@cagyjan1',
        avatar: require('@/img/avatars/cagy.jpg').default,
      },
    },
    {
      content:
        "@BYOPills BYOLAND 💊🌋. IMO this will be one of the metaverses with most valuable land. Each facet of the BYOVERSE works with one another. The land produces resources to be utilized in the metaverse 💰. Don't sleep on this 🧠",
      url: 'https://twitter.com/chirocrypto/status/1474087694057754625',
      author: {
        name: 'chirocrypto',
        handle: '@chirocrypto',
        avatar: require('@/img/avatars/chirocrypto.jpg').default,
      },
    },
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
    {
      content: 'Congrats to the @BYOPills team for selling out their BYOLand sale!!!',
      url: 'https://twitter.com/flipdrago/status/1471654121207832578',
      author: {
        name: 'f//pdrago.eth',
        handle: '@flipdrago',
        avatar: require('@/img/avatars/flipdrago.jpg').default,
      },
    },
    {
      content:
        'When you get your @BYOPills #BYOVERSE meta drop on Xmas Eve with these zones... Amazonia, Astroverse, Bone Valley and Radioactive Swamp',
      url: 'https://twitter.com/jbuckb/status/1474401992449699840',
      author: {
        name: 'Jbuckb.eth',
        handle: '@jbuckb',
        avatar: require('@/img/avatars/jbuckb.jpg').default,
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
            src={author.profile_image_url}
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
          {expanded ? 'Okay, I get the message' : 'Show more...'}
        </button>
      </div>
    </section>
  )
}
