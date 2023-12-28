'use client'

import { useSearchParams } from "next/navigation"

interface Query{
  categoryId?:string,
  colorId?:string,
  sizeId?:string,
  isFeatured?:boolean
}

export const UseUrl = (query:Query) => {
  const searchParams=useSearchParams()
  const search=new URLSearchParams(searchParams)
  search.append("categoryId",query.categoryId!)
  search.append("colorId",query.colorId!)
  search.append("sizeId",String(query.isFeatured)!)
  search.append("sizeId",query.sizeId!)
  
  console.log(search)
}
