import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 gap-2 flex items-center justify-center bg-background/50'>
      <Loader2 className='w-6 h-6 animated6spin text-primary-700' />
      <span className="text-sm font-medium text-primary-250 font-michroma">Loading...</span>
    </div>
  )
}

export default Loading
