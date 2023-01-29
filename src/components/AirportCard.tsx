import React from 'react'
import { IAirport } from '../models/models'

interface AirportCardProps {
  airport: IAirport
}

function AirportCard({ airport }: AirportCardProps) {
  return (
    <div>
      {airport.name}
    </div>
  )
}

export default AirportCard