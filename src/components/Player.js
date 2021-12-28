import ReactPlayer from 'react-player'
import clsx from 'clsx'

export function Player(props) {
  const { src, noSpacing = false, external = false, className, muted = false } = props

  return (
    <div
      className={clsx('group flex justify-center', {
        'pb-8': external,
      })}
    >
      <div className={clsx(className)}>
        <ReactPlayer
          className={clsx('', {
            'mt-[-2rem]': noSpacing,
          })}
          loop
          controls
          url={external ? src : require(`@/video/${src}`).default}
          width="100%"
          height={external ? '423px' : '100%'}
          volume={muted ? '0' : '0.3'}
        />
      </div>
    </div>
  )
}
