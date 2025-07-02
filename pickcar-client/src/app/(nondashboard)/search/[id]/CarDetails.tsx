import React from 'react'

const CarDetails = ({carId}: CarDetailsProps) => {
  const { data: car, isError, isLoading } = useGetCarQuery(carId);
  if (isLoading) return <>Loading ...</>;
  if (isError || !car) {
    return <>Car not found !</>;
  }
  return (
    <div className='mb-6'>
      {/* car features */}
      <div>
        <h2 className="text-xl font-semibold my-3 "></h2>
      </div>
    </div>
  )
}

export default CarDetails
