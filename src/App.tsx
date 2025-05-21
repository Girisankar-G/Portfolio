import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'John Doe | Portfolio';
    
    // Get the default title element
    const defaultTitleElement = document.querySelector('[data-default]');
    if (defaultTitleElement) {
      defaultTitleElement.removeAttribute('data-default');
    }
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;