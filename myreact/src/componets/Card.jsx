import React from 'react'

export const Card = ({userName="mona" , click}) => {
  return (
     <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 items-center justify-center">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
          <p className="text-gray-400">
          Hi, I'm Suchitra. I'm a passionate developer who enjoys creating beautiful and functional web applications. I love learning new technologies and turning ideas into real projects.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide 
           rounded-md bg-gray-800 text-gray-200" 
        >
          {click}
        </button>
      </div>
    </div>
  

  )
}
