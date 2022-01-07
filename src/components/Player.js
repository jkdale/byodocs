import ReactPlayer from 'react-player'
import clsx from 'clsx'

export function Player(props) {
  const { src, addSpacing = false, external = false, className, muted = false } = props

  return (
    <div
      className={clsx('group flex justify-center', {
        'pb-8': external,
      })}
    >
      <div className={clsx('w-full', className)}>
        <ReactPlayer
          className={clsx({
            'my-4': addSpacing,
          })}
          loop
          controls
          url={external ? src : require(`@/video/${src}`).default}
          width="100%"
          height={external ? '423px' : 'auto'}
          volume={muted ? '0' : '0.3'}
        />
      </div>
    </div>
  )
}
