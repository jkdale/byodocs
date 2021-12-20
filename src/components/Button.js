import clsx from 'clsx'
import Link from 'next/link'

let colors = {
  gray: [
    'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:ring-gray-500',
    'text-gray-300 group-hover:text-gray-400',
  ],
}

export function Button({
  color = 'gray',
  href,
  children,
  className = '',
  reverse = false,
  ...props
}) {
  let colorClasses = typeof color === 'string' ? colors[color] : color

  return (
    <Link href={href}>
      <a
        className={clsx(
          'group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2',
          colorClasses[0],
          className,
          reverse && 'flex-row-reverse'
        )}
        {...props}
      >
        {children}
        <svg
          className={clsx('overflow-visible', reverse ? 'mr-3' : 'ml-3', colorClasses[1])}
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={reverse ? 'M3 0L0 3L3 6' : 'M0 0L3 3L0 6'} />
        </svg>
      </a>
    </Link>
  )
}
