import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import {BiLike, BiSolidLike} from 'react-icons/bi';

function PostCard({post , user , deletePost , likePost}) {
    const [showAll , setShowAll] = useState(0);
    const [showReply , setShowReply] = useState(0);
    const [comments , setComments] = useState([]);
    const [loading , setLoading] = useState(false);
    const [replyComments , setReplyComments] = useState(0);
    const [showComments , setShowComments] = useState(0);

  return (
    <div className='mb-2 bg-primary p-4 rounded-xl'>
        <div className='flex gap-3 items-center mb-2'>
            <Link to={'/profile/' + post?.userId?._id}>
                <img 
                alt={post?.userId?.firstName}
                src={post?.userId?.profileUrl ?? NoProfile}
                className='w-14 h-14 object-cover rounded-full'
                />
            </Link>
            <div className='w-full flex justify-between'>
                <div className=''>
                    <Link to={"/profile/" + post?.userId?._id}>
                        <p className='font-medium text-lg text-ascent-1'>
                            {post?.userId?.firstName} {post?.userId?.lastName}
                        </p>
                    </Link>
                    <span className='text-ascent-2'>{post?.userId?.location}</span>
                </div>


            </div>
        </div>

        <div >
            <p className='text-ascent-2'>
                {showAll === post?._id 
                ? post?.description
                : post?.description.slice(0,300)}

                {
                    post?.description?.length > 301 && (
                        showAll === post?._id ?( 
                        <span className='text-blue ml-2 font-medium cursor-pointer'
                        onClick={() => setShowAll(0)}
                        >
                        Show Less
                        </span> )
                        : (
                        <span className='text-blue ml-2 font-medium cursor-pointer'
                        onClick={() => setShowAll(0)}
                        >
                        Show More
                        </span>)
                    )
                }
            </p>

            {
                post?.image && (
                    <img src={post?.image}
                    alt='post image '
                    className='w-full mt-2 rounded-lg' />
                )
            }
        </div>

        <div className='mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]'>
            <p className='flex gap-2 items-center text-base cursor-pointer'>
                { post?.likes?.includes(user?._id) ? (
                    <BiSolidLike size={20} color='blue' />
                ) : (
                    <BiLike size={20} />
                )} 
                {post?.likes?.length} Likes
            </p>
        </div>
    </div>
  )
}

export default PostCard