```javascript
// tailwind.config.js
module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'], // Ensure all relevant files are included
    options: {
      safelist: ['absolute', 'relative', 'bg-red-500'], //Add any classes you need to whitelist
    }
  },
  // ... rest of your Tailwind config
}

// src/App.js
import React from 'react';

function App() {
  return (
    <div className="bg-red-500 p-4">
      <p className="text-white">This should be red and white, not default styles</p>
      <div className="absolute top-0 left-0"></div>
    </div>
  );
}

export default App;
```