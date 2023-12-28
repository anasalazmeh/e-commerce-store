'use client'
import PreviewModal from '@/components/PreviewModal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted,setIsMounted]=useState(false)
  useEffect(()=>{
    setIsMounted(true)
  },[])
  return (
    <PreviewModal/>
  )
}

export default ModalProvider