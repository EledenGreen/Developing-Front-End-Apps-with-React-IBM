import useFetch from './UseFetch'

const FetchYogaData = () => {
  const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152')
  console.log('yoga', data)

  return (
    <>
      <ul className="list_data_main">
        {data &&
          data.map((e) => (
            <>
              <li className="list_data">
                <h3>{e.name}</h3>
                <p>{e.benefits}</p>
                <p>{e.time_duration}</p>
              </li>
            </>
          ))}
      </ul>
    </>
  )
}

export default FetchYogaData
