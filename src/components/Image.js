import { Fragment } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import clsx from 'clsx'

import { users } from '@/users'
import { filterValue } from '@/utils/filterValue'

export function Image(props) {
  const { src, description, credit, addSpacing = false } = props

  const creditUser = filterValue(users, 'name', credit)

  return (
    <div
      className={clsx({
        'my-4': addSpacing,
      })}
    >
      <Zoom overlayBgColorStart="rgba(23, 22, 27, 0)" overlayBgColorEnd="rgba(23, 22, 27, 0.95)">
        <img alt={description} src={require(`../img${src}`).default} className="my-0" />
      </Zoom>
      {description && (
        <p className="flex justify-center text-sm text-gray-500 mt-2 mb-0">
          Description: {description}.
        </p>
      )}
      {creditUser && (
        <p className="flex justify-center text-sm text-gray-500 mt-2 mb-0">
          Credit:{' '}
          <a
            className="ml-2"
            href={`https://twitter.com/` + creditUser.username}
            target="_blank"
            rel="noreferrer"
          >
            {creditUser.name}
          </a>
          .
        </p>
      )}
    </div>
  )
}
