import { users } from '@/users'
import { filterValue } from '@/utils/filterValue'

export function Author(props) {
  const { author } = props

  const authorObj = filterValue(users, 'name', author)

  return (
    <figure className="relative flex justify-center border-t-2 border-b-2 border-space-800 p-3 m-0">
      <figcaption className="flex items-center mt-0 not-italic space-x-2">
        <span className="text-gray-200">Community Author: </span>
        <div className="text-base">
          <a
            href={`https://twitter.com/${authorObj.username}`}
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 border-none"
          >
            <span className="absolute inset-0" />@{authorObj.username}
          </a>
        </div>
      </figcaption>
    </figure>
  )
}
