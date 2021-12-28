export function TeamGrid(props) {
  const { team } = props

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 m-0 p-0">
      {team.map((member) => (
        <li className="text-sm leading-6 list-none p-0">
          <figure className="relative flex bg-space-800 rounded-lg p-6 m-0">
            <figcaption className="flex items-center space-x-4 m-0">
              <img
                src={member.avatar}
                alt=""
                className="flex-none w-10 h-10 rounded-full object-cover m-0"
                loading="lazy"
              />
              <div className="flex flex-col items-start not-italic">
                <div className="text-base text-gray-100 font-semibold">
                  <a
                    href={`https://twitter.com/${member.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                    className="border-none"
                  >
                    <span className="absolute inset-0" />
                    {member.name}
                  </a>
                </div>
                <div className="mt-0.5 text-orange-400 text-sm">@{member.twitter}</div>
              </div>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
