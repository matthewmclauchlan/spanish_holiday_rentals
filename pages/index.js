// pages/index.js
import React from 'react';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <HomePage 
      title="Welcome to My App!" 
      message="This is the Next.js (web) version."
      backgroundColor="#f2f2f2"
    />
  );
}
