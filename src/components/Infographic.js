import { Fragment } from 'react'
import { MapInteractionCSS } from 'react-map-interaction'
import clsx from 'clsx'

export function Infographic(props) {
  const { src, description, credit } = props

  return (
    <Fragment>
      <div className="transition duration-100 ease-out hover:ease-in border-solid border-2 border-gray-700 hover:border-orange-400">
        <MapInteractionCSS showControls="true" maxScale="5" minScale="1">
          <img alt={description} src={require(`../img${src}`).default} />
        </MapInteractionCSS>
      </div>
      {description && (
        <p className="flex justify-center text-sm text-gray-500 mt-2 mb-0">
          Description: {description}.
        </p>
      )}
      {credit && (
        <p className="flex justify-center text-sm text-gray-500 mt-2 mb-0">
          Credit:{' '}
          <a
            className="ml-2"
            href={`https://twitter.com/@` + credit}
            target="_blank"
            rel="noreferrer"
          >
            {credit}
          </a>
          .
        </p>
      )}
    </Fragment>
  )
}
