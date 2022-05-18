import React from 'react';
import { LayoutProvider } from 'vite-upm-react-ui';
import { App } from './App';

export function Providers() {
  return (
    <>
      <LayoutProvider>
        <App />
      </LayoutProvider>
    </>
  );
}
