export function TeamGrid(props) {
  const { team, role } = props

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 m-0 p-0">
      {Object.keys(team).map((member, i) => {
        return team[member].roles.includes(role) ? (
          <li key={team[member].name} className="text-sm leading-6 list-none p-0">
            <figure className="relative flex bg-space-800 rounded-lg p-6 m-0">
              <figcaption className="flex items-center space-x-4 m-0 overflow-hidden">
                <img
                  src={team[member].profile_image_url}
                  alt=""
                  className="flex-none w-10 h-10 rounded-full object-cover m-0"
                  loading="lazy"
                />
                <div className="flex flex-col items-start not-italic">
                  <div className="text-base text-gray-100 font-semibold">
                    <a
                      href={`https://twitter.com/${team[member].username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="border-none"
                    >
                      <span className="absolute inset-0" />
                      {team[member].name}
                    </a>
                  </div>
                  <div className="mt-0.5 text-orange-400 text-sm">@{team[member].username}</div>
                </div>
              </figcaption>
            </figure>
          </li>
        ) : null
      })}
    </ul>
  )
}
