import React from 'react'

export default function Card({ icon, title, link, children }) {
  return (
    <div class="p-4 relative">
      <div class="border border-green-200 hover:border-green-400 p-6 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-200 text-indigo-500">
            {icon}
          </div>
          <a class="text-white rounded bg-purple-400 hover:bg-purple-500 p-2 stretched-link" href={link}>
            Read more
          </a>
        </div>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
        <div class="leading-relaxed text-base">
          {children}
        </div>
      </div>
    </div>
  )
}
