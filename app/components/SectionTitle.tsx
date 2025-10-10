import React from 'react'

const SectionTitle = ({ title, id }: { title: string; id?: string }) => {
  const headingId = id || title.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <h2 id={headingId} className="text-xl font-semibold mb-6">{title}</h2>
  )
}

export default SectionTitle