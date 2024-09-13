import React, { memo } from 'react'

interface IRentalData {
  id: string
  name: string
  image_url: string
  location: string
  price_per_night: number
  rating: number
}

interface RentalItemProps {
  rental: IRentalData
  onViewDetails: (id: string) => void
}

const RentalItem: React.FC<RentalItemProps> = memo(({ rental, onViewDetails }) => {
  console.log(`Rendering RentalItem: ${rental.id}`)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={rental.image_url} alt={rental.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{rental.name}</h3>
        <p className="text-gray-600 mb-2">{rental.location}</p>
        <p className="text-primary font-bold">${rental.price_per_night} / night</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{rental.rating.toFixed(1)}</span>
        </div>
        <button
          onClick={() => onViewDetails(rental.id)}
          className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  )
})

export default RentalItem
