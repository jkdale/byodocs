export function Badge({ text }) {
  return (
    <span className="flex items-center">
      <dl className="ml-3 align-top inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-900 tracking-tight">
        <dt className="sr-only">{text}</dt>
        <dd>{text.toUpperCase()}</dd>
      </dl>
    </span>
  )
}
