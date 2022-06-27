import React, { useState } from 'react';
import { Heart, Comment } from '../Icons'
import eye from '../../eye.svg';
import comment from '../../comment.svg';

type Props = {
  imageSrc?: string;
  avatarSrc?: string;
  name?: string;
  date?: string;
  amount?: number;
  currency?: string;
  likesCount?: number;
  commentsCount?: number;
  viewsCount?: number;
};

const Card = ({ imageSrc, name, date, viewsCount, likesCount, commentsCount, avatarSrc }: Props) => {
  const [Likes, setIsLiked] = useState(likesCount || 321);
  const handleLike = () => {
    setIsLiked(Likes + 1);
  };
  return (
    <div className="group overflow-hidden h-[32rem] flex-col rounded-[4rem] w-[350px] shadow-2xl hover:scale-110 duration-300 tracking-wider">
      <div className="overflow-hidden h-[16rem] flex-1 bg-amber-300 shadow-2xl">
        <img alt="card" src={imageSrc} className="w-full h-full object-cover" />
      </div>
      <div className="h-[16rem] flex flex-col justify-between p-10 bg-opacity-0 group-hover:bg-gradient-to-b from-neutral-800/25 to-black/25 hover:bg-opacity-20 backdrop-blur-lg">
        <div className="flex justify-between mb-3">
          <div className="flex justify-between">
            <div className="avatar">
              <img className="w=[50px] h-[50px] rounded-xl" alt="avatar" src={avatarSrc} />
            </div>
            <div className="name flex-col ml-4">
              <span className="text-white block">{name || 'Hayden'}</span>
              <span className="text-gray-400 block uppercase font-light text-sm pt-1">{date || '7 days ago'}</span>
            </div>
          </div>
          <div className="flex justify-center items-center pr-2">
            <div className="mr-3">
              <img src={eye} className="h-7 w-7" alt="eye" />
            </div>
            <span className="text-white font-black text-sm">{viewsCount || '34k'}</span>
          </div>
        </div>
        <div className="flex-col text-gray-400">
          <div className="group-hover:text-white transition-all duration-300 text-2xl mb-2">#4 Cloud</div>
          <div className="flex justify-between items-center">
            <div className="group-hover:text-white transition-colors duration-300 text-2xl">Cofee</div>
            <div className="">0.55 NEAR</div>
          </div>
        </div>
        <div className="text-gray-400 flex group-hover:opacity-100 hover:fill-fuchsia-500">
          <button onClick={handleLike} type="button" className="group flex mr-8">
            <Heart className="w-5 h-5 mr-2 fill-gray-500 hover:fill-fuchsia-500" />
            <span className="font-black text-sm ml-2">{Likes || '321'}</span>
          </button>
          <button type="button" className="flex">
            <Comment className="w-5 h-5 mr-2 fill-gray-500" />
            <span className="font-black text-sm ml-2">{commentsCount || '42'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
