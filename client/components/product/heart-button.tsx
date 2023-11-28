'use client'

import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const HeartButton = () => {
  const isLiked = Math.random() > 0.5 ? true : false
  // const isLiked = true
  return (
    <div className="absolute right-2 top-2 rounded-full transition hover:scale-110 bg-white p-2">
      {isLiked && (
        <AiFillHeart className="w-5 h-5 text-rose-500 z-50" size={20} />
      )}
      {!isLiked && (
        <AiOutlineHeart className="w-5 h-5 text-neutral-400 z-50" size={20} />
      )}
    </div>
  )
}

export default HeartButton
