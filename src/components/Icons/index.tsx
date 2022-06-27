import React from 'react';

export const Heart = ({ className }: { className?: string }) => (
  <svg className={className} version="1.1" id="Layer_1" x="0px" y="0px"
  viewBox="0 0 512 512" xmlSpace="preserve">
    <g>
    <path d="M464.9,67.7c-24.6-24.6-58.6-39.8-96.2-39.8c-37.6,0-71.6,15.3-96.3,39.9L256,84.4l-16.5-16.8
      c-24.6-24.6-58.6-39.8-96.2-39.8c-37.6,0-71.6,15.2-96.2,39.8L39.8,75C15.2,99.6,0,133.6,0,171.2c0,37.6,15.2,71.6,39.8,96.2
      l193.8,193.8l21.9,22.9l0.5-0.5l0.6,0.6l20.5-21.6l195.1-195.1c24.6-24.6,39.8-58.6,39.8-96.2c0-37.6-15.2-71.5-39.8-96.2
      L464.9,67.7z M448.2,243.3L256,435.5L63.9,243.3c-18.5-18.5-29.9-44-29.9-72.1c0-28.2,11.4-53.7,29.9-72.1l7.3-7.3
      c18.5-18.5,44-29.9,72.1-29.9c28.1,0,53.6,11.4,72.1,29.8l40.5,41.2l40.7-41.2c18.5-18.5,44-29.9,72.1-29.9
      c28.2,0,53.7,11.4,72.1,29.9l7.3,7.3c18.4,18.5,29.8,44,29.8,72.1C478,199.3,466.6,224.8,448.2,243.3z"/>
    </g>
  </svg>
);

export const Comment = ({ className }: { className?: string }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" xmlSpace="preserve">
    <g>
      <path d="M512,512h-17.1c-73.2,0-140.1-27-191.3-71.5l0.4,0.3l-18-15.6c-10,1-20,1.5-30,1.5c-67.8,0-131.6-21.8-179.8-61.4
        C27.1,324.9,0,270.9,0,213.3s27.1-111.6,76.2-152C124.4,21.8,188.2,0,256,0s131.6,21.8,179.8,61.4c49.2,40.4,76.2,94.3,76.2,152
        c0,32.2-8.4,62.3-23,88.6l0.5-0.9c-13.3,24-30,44.3-49.9,61.1l-0.3,0.2c16.1,40.3,39,74.8,67.7,103.5l5,5L512,512z M297,389.6
        l29.3,25.4c38.8,33.8,88.4,56.2,142.9,61.6l1.1,0.1c-28.4-31.7-51.1-69.1-66-110.3l-0.8-2.4l-4.7-13.3l9.8-7.5
        c44.6-34.2,69.2-80.4,69.2-129.9c0-98.8-99.5-179.2-221.9-179.2S34.1,114.6,34.1,213.3S133.7,392.5,256,392.5
        c11.8,0,23.4-0.8,34.9-2.2l-1.4,0.1L297,389.6z"/>
    </g>
</svg>
);

export const Eye = ({ className }: { className?: string }) => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" xmlSpace="preserve">
    <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(30)">
      <stop offset="0%" stopColor="#a855f7" />
      <stop offset="100%" stopColor="#1d4ed8" />
    </linearGradient>
      </defs>
        <g fill="url(#gradient)">
      <path d="M256,421.9C82.6,421.9,4.1,269.6,1.1,262c-1.5-4.5-1.5-9.1,0-13.6c3-6,81.4-158.4,254.9-158.4S507.9,242.4,510.9,250
        c1.5,4.5,1.5,9.1,0,13.6C507.9,269.6,429.4,421.9,256,421.9z M31.3,256c16.6,28.7,89,135.7,224.7,135.7S462.6,284.7,480.7,256
        c-16.6-28.7-89-135.7-224.7-135.7S49.4,227.3,31.3,256z"/>
          <path d="M256,391.7c-75.4,0-135.7-60.3-135.7-135.7S180.6,120.3,256,120.3S391.7,180.6,391.7,256S331.4,391.7,256,391.7z
         M256,150.4c-58.8,0-105.6,46.8-105.6,105.6S197.2,361.6,256,361.6S361.6,314.8,361.6,256S314.8,150.4,256,150.4z"/>
          <path d="M256,331.4c-42.2,0-75.4-33.2-75.4-75.4c0-9.1,6-15.1,15.1-15.1c9.1,0,15.1,6,15.1,15.1c0,25.6,19.6,45.2,45.2,45.2
        s45.2-19.6,45.2-45.2s-19.6-45.2-45.2-45.2c-9.1,0-15.1-6-15.1-15.1c0-9.1,6-15.1,15.1-15.1c42.2,0,75.4,33.2,75.4,75.4
        S298.2,331.4,256,331.4z"/>
    </g>
  </svg>
);