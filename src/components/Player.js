import ReactPlayer from 'react-player'
import clsx from 'clsx'

export function Player(props) {
  const { src, resetStyles = false, external = false } = props

  return (
    <div
      className={clsx('group flex justify-center', {
        'pb-8': external,
      })}
    >
      <ReactPlayer
        className={clsx('', {
          'mt-[-2rem]': resetStyles,
        })}
        loop
        controls
        url={external ? src : require(`@/video/${src}`).default}
        width="100%"
        height={external ? '423px' : '100%'}
        volume={0.3}
      />
    </div>
  )
}
