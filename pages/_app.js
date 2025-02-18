// App.js
import React from 'react';
import HomePage from '../components/HomePage';

export default function App() {
  return (
    <HomePage 
      title="Hello, this is a basic App page!" 
      message="This page is shared between Expo and Next.js."
      backgroundColor="#fff"
    />
  );
}
