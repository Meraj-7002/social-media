import React from 'react';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets/index'
function FriendsCard({friends}) {
  return (
    <div>
        <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5'>
            <div className='flex items-center justify-between text-ascent-1 pb-2 border-b border-[#66666645]'>
                <span> Friends </span>
                <span>{friends?.length}</span>
            </div>
            <div className='w-full flex flex-col gap-4  pt-4'>
                {
                    friends?.map((friends) => (
                        <Link 
                        to={"/profile/"+ friends?._id}
                        key={friends?._id}
                        className='w-full flex gap-4 items-center cursor-pointer'
                        >
                            <img className='w-10 h-10 object-cover rounder-full'
                            src={friends?.profileUrl ?? NoProfile}
                            alt={friends?.firstName} />
                            <div className='flex-1'>
                                <p className='text-base font-medium text-ascent-1'>
                                 {friends?.firstName} {friends?.lastName}
                                </p>
                                <span className='text-sm text-ascent-2'>
                                    {friends?.profession ?? "No Profession"}
                                </span>
                            </div>
                        </Link> 
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FriendsCard