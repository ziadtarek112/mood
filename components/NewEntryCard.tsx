'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
    const router = useRouter(); 
    const handleClick=async ()=>{
       const entry = await createNewEntry();
        router.push(`/journal/${entry.id}`)
    }
  return (
    <div className="cursor-pointer rounded-lg">
        <div className="px-4 py-5 sm:p-6" onClick={handleClick}>
            <span className="text-3xl">New Entry</span>
        </div>
    </div>
  )
}

export default NewEntryCard