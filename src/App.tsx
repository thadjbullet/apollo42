import React from 'react';
import "@fontsource/poppins";
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import { Assets } from './constants/Assets'

const logoSource = 'https://apollo42.app/logo_apollo42.svg';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img className="w-72" alt="logo" src={logoSource} />
      </header>
      <main className="">
        <div className="flex justify-between app-main-header py-16">
          <h1 className="border border-purple-500 text-2xl font-thin text-white text-7xl">Market</h1>
          <Button />
        </div>
        <div className="grid grid-cols-10">
          <div className="grid col-span-2"></div>
          <div className="grid col-span-8 lg:grid-cols-4 md:grid-cols-2 gap-x-7 gap-y-16">
            {Assets.map(({ coverImage, avatar, name }) => (<Card imageSrc={coverImage} avatarSrc={avatar} name={name} />))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
