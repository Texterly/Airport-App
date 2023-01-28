import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AirportCard from '../components/AirportCard'
import AirportFilter from '../components/AirportFilter'
import AirportSearch from '../components/AirportSearch'
import { fetchAirports } from '../store/actions/airportActions'

function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAirports())
    }, [])

  return (
    <div className='container mx-auto max-w-[760px] pt-5'>
        <AirportSearch />

        <AirportFilter />
        
        <AirportCard />
    </div>
  )
}

export default MainPage