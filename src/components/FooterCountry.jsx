'use client'  // use client ip, not server ip
import {useEffect, useState} from 'react'

const FooterCountry = () => {
  const [location, setLocation] = useState('Earth')

  useEffect(() => {
    const fetchLocation = async () => {
      const result = await fetch(`https://ipinfo.io?token=${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`)
      const data = await result.json()
      setLocation(data.city.concat(', ', data.region, ' ', data.country))
    }
    fetchLocation()
  }, [])

  return (
    <div>{location}</div>
  )
}

export default FooterCountry
