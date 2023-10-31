"use client"

import React from 'react'
import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config'

const page = () => {
  return (
    <div><NextStudio config={config} /></div>
  )
}

export default page