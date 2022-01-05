import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

export function TrypCalculator() {
  const [address, setAddress] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setAddress(e.target.value)
  }

  /**
   * API Credit: Oconio
   */
  const fetchTokenomicsSummary = async () => {
    await axios
      .get(`https://nftbagcheck.com/api/byo-tokenomics/${address}`)
      .then(function (response) {
        if (response.data) {
          setError(false)
          setData(response.data)
          console.log(data)
        }
      })
      .catch(function (error) {
        console.log(error)
        setError(true)
      })
  }

  const handleSearch = (event) => {
    event.preventDefault()

    fetchTokenomicsSummary()
  }

  const handleReset = (event) => {
    event.preventDefault()

    setData(null)
    setError(false)
    setAddress('')
  }

  const GridTitle = ({ title }) => {
    return (
      <div className="first-of-type:mt-0 mt-4 font-bold text-orange-400">
        <span className="text-sm uppercase tracking-widest">{title}</span>
      </div>
    )
  }

  const GridField = ({ content }) => {
    return <p className="m-0">{content}</p>
  }

  function maskAddress(addr) {
    return addr.slice(0, 5) + '...' + addr.slice(addr.length - 5, -1)
  }

  const RenderData = ({ data }) => {
    return (
      <Fragment>
        {data.tokenomics.length ? (
          <Fragment>
            <div className="my-12 p-4 md:p-8 lg:p-8 bg-space-800">
              {data.ens.includes('.eth') && (
                <div className="grid md:grid-cols-2 gap-4">
                  <GridTitle title="ENS" />
                  {<GridField content={data.ens} />}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4 first-of-type:mt-0 mt-6">
                <GridTitle title="Address" />
                {data.addr && <GridField content={maskAddress(data.addr)} />}
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <GridTitle title="Apostles" />
                {data.apostles ? (
                  <div className="flex flex-col">
                    {data.apostles.voyager && (
                      <GridField
                        content={
                          data.apostles.voyager.length > 1
                            ? `${data.apostles.voyager.length} Voyagers`
                            : `1 Voyager`
                        }
                      />
                    )}
                    {data.apostles.psychonaut && (
                      <GridField
                        content={
                          data.apostles.psychonaut.length > 1
                            ? `${data.apostles.psychonaut.length} Psychonauts`
                            : `1 Psychonaut`
                        }
                      />
                    )}
                    {data.apostles.ancient && (
                      <GridField
                        content={
                          data.apostles.ancient.length > 1
                            ? `${data.apostles.ancient.length} Ancients`
                            : `1 Ancient`
                        }
                      />
                    )}
                    {data.apostles.goddess && (
                      <GridField
                        content={
                          data.apostles.goddess.length > 1
                            ? `${data.apostles.goddess.length} Goddesses`
                            : `1 Goddess`
                        }
                      />
                    )}
                  </div>
                ) : (
                  <GridField content="No Apostles owned" />
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <GridTitle title="BYOLands" />
                {data.lands ? (
                  <div className="flex flex-col">
                    {data.lands.occasional && (
                      <GridField content={`${data.lands.occasional.length} Occasional`} />
                    )}
                    {data.lands.frequent && (
                      <GridField content={`${data.lands.frequent.length} Frequent`} />
                    )}
                    {data.lands.abundant && (
                      <GridField content={`${data.lands.abundant.length} Abundant`} />
                    )}
                    {data.lands.dominant && (
                      <GridField content={`${data.lands.dominant.length} Dominant`} />
                    )}
                  </div>
                ) : (
                  <GridField content="No BYOLand owned" />
                )}
              </div>
              <Fragment>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <GridTitle title="BYOPills" />
                  {data.pills.pills.length > 0 ? (
                    <GridField content={data.pills.pills.length} />
                  ) : (
                    <GridField content="No BYOPills in wallet" />
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <GridTitle title="Est. Daily $TRYP" />
                  {data.tryp_totals.daily > 0 ? (
                    <GridField content={`${data.tryp_totals.daily} $TRYP`} />
                  ) : (
                    <GridField content="No $TRYP can be earned" />
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <GridTitle title="Est. 6 Month $TRYP:" />
                  {data.tryp_totals.daily > 0 ? (
                    <GridField content={`${data.tryp_totals.sixmonth} $TRYP`} />
                  ) : (
                    <GridField content="No $TRYP can be earned" />
                  )}
                </div>
              </Fragment>
            </div>
            <div className="overflow-y-auto h-96 p-4 lg:p-8 bg-space-800 text-sm">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th># Token</th>
                    <th>Pills Used</th>
                    <th>$TRYP Earned</th>
                  </tr>
                </thead>
                <tbody>
                  {data.tokenomics.map((item, index) => (
                    <tr key={index}>
                      <td>{`#${item.token} ${item.apostle != null ? item.apostle : item.land}`}</td>
                      {item.pills.length > 0 ? (
                        <td>{item.pills.map((pill) => `#${pill} `)}</td>
                      ) : (
                        <td>None</td>
                      )}
                      <td>{item.TRYP}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {error === false && (
              <p className="text-red-500">Sorry, this eth address has no BYO tokens.</p>
            )}
          </Fragment>
        )}
      </Fragment>
    )
  }

  return (
    <div>
      <form className="flex flex-col lg:flex-row" onSubmit={handleSearch}>
        <input
          className="sm:flex items-center w-full md:w-72 text-left space-x-3 px-4 h-12 bg-white/10 ring-1 ring-gray-900/10 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-gray-400 text-sm"
          value={address}
          onChange={(e) => onChange(e)}
          placeholder="Insert eth address..."
        />
        <div className="flex mt-2 sm:mt-0">
          <button
            className="bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold text-sm h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto md:ml-5"
            onClick={handleSearch}
            type="submit"
          >
            Fetch
          </button>
          {data && (
            <button
              className="bg-orange-800 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white font-semibold text-sm h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto ml-2"
              onClick={handleReset}
            >
              Clear
            </button>
          )}
        </div>
      </form>
      {error && <p className="text-red-500">Something went wrong. Try again.</p>}
      {data && error === false && <RenderData data={data} />}
    </div>
  )
}
