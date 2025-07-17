import { CarFormData, carListingSchema } from '@/lib/schemas';
import { useCreateCarMutation, useGetAuthUserQuery } from '@/state/api';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

const NewCar = () => {

  const [createCar] = useCreateCarMutation();
  const {data:authUser} = useGetAuthUserQuery();


  const form = useForm<CarFormData>({
    resolver:zodResolver(carListingSchema),
    defaultValues: {
      name: '',
      description: '',
      pricePerDay: 0,
      availableFrom: new Date(),
      availableTo: new Date(),
      // carType: CarTypeEnum.SUV,
      fuelType: 'combustion',
      transmission: 'automatic',
      brand: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      seats: 2,
      carFeatures: [],
      imageUrls: [],
      location: ''
    }
    
  })
  return (
    <div>
      
    </div>
  )
}

export default NewCar;
