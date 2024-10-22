import React from 'react'
function BookDisplay({book}) {
  return (
    <div>
        <div className="p-2 flex flex-col  bg-orange-200 rounded-xl ">
      <h1 className="text-sm font-bold text-gray-700 ">{book}</h1>
      </div>
    </div>
  )
}


export default BookDisplay