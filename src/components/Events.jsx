import React from 'react'

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="rounded-lg shadow-md overflow-hidden">
      <img src="..." alt="Event image" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">Event title</h3>
        <p class="text-gray-600 mb-4">Event description</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Learn more
        </a>
      </div>
    </div>
    </div>
</div>

    </div>
  )
}

export default Events
