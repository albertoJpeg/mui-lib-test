import React from 'react';
import { CustomAppBar, CustomAppFooter } from 'vite-upm-react-ui';
import logo from '../images/logo.png';

export function App() {
  return (
    <>
      <CustomAppBar
        user={{
          name: 'Usuario',
          surnames: 'de pruebas',
        }}
        logo={logo}
      />
      <div
        style={{
          minHeight: 'calc(100vh - (150px + 64px + 60px))',
        }}
      />
      <CustomAppFooter
        contact={[
          'link de ayuda 1',
          'link de ayuda 2',
        ]}
        columns={[
          {
            title: 'Ayuda',
            items: [
              'link de ayuda 1',
              'link de ayuda 2',
            ],
          },
          {
            title: 'Columna 1',
            items: [
              'link de columna 1',
              'link de columna 1',
            ],
          },
          {
            title: 'Columna 1',
            items: [
              'link de columna 1',
              'link de columna 1',
            ],
          },
        ]}
      />
    </>
  );
}
