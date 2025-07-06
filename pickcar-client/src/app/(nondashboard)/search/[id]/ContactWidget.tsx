import { Button } from '@/components/ui/button';
import { useGetAuthUserQuery } from '@/state/api'
import { PhoneCall } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const ContactWidget = ({onOpenModal}:ContactWidgetProps) => {

  const {data:authUser}= useGetAuthUserQuery();
  const router = useRouter()

  const handleButtonClick = () =>{
    if (authUser) {
      onOpenModal()
    }else {
      router.push('/signIin')
    }
  }
  return (
    <div className="bg-white border border-primary-700 rounded-2xl p-7 h-fit min-w-72">
      {/* contact */}
      <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="flex items-center p-4 bg-primary-700 rounded-full">
          <PhoneCall className="text-white " size={15} />
        </div>
        <div>
          <p className="font-michroma text-gray-400"></p>
          <div className="text-lg font-bold text-primary-250 font-michroma">
            {authUser ? "+1234567890" : "Sign In to Apply"}
            {/* the number should be replaced by manager number */}
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-primary-700 text-white hover:bg-secondary-600 cursor-pointer"
        onClick={handleButtonClick}
      >
        {authUser ? "Submit Application" : "Sign In to Apply"}
      </Button>
      <hr className="my-4 text-secondary-600" />
      <div className="text-sm font-michroma">
        <div className="text-primary-600 mb-1"> Free cancellation</div>
        <div className="text-primary-600 mb-1">
          Up to 48 hours before your rental starts
        </div>
      </div>
    </div>
  );
}

export default ContactWidget
