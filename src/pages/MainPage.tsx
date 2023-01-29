import React, { useEffect } from 'react'
import AirportCard from '../components/AirportCard'
import AirportFilter from '../components/AirportFilter'
import AirportSearch from '../components/AirportSearch'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchAirports } from '../store/actions/airportActions'

function MainPage() {
    const dispatch = useAppDispatch()
    const {error,loading, airports} = useAppSelector(state => state.airport)

    useEffect(() => {
        dispatch(fetchAirports())
    }, [])

  return (
    <div className='container mx-auto max-w-[760px] pt-5'>
        <AirportSearch />

        <AirportFilter />
        
        { loading && <p className='text-center text-lg'>Loading...</p> }
        { error && <p className='text-center text-lg text-red-600'>{error}</p> }

        {
          airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
        }
    </div>
  )
}

export default MainPage