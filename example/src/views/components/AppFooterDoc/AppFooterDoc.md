````jsx
import React from 'react'
import { LayoutProvider } from 'upm-react-ui'

const Example = () => {
  const footerOptions = {
    appFooterList: [
      {
        title: 'Desarrollo',
        list: [
          {
            title: 'Vicerrectorado de Gestiones gestionadoras(Gestión)',
            onClick: () => null
          },
          {
            title: 'Vicerrectorado de Servicios informáticos(Desarrollo)',
            onClick: () => null
          }
        ]
      },
      {
        title: ' Más applicaciones relacionadas',
        list: [
          {
            title: 'Thesis',
            onClick: () => null
          },
          {
            title: 'Politécnica Virtual',
            onClick: () => null
          },
          {
            title: 'GAUSS',
            onClick: () => null
          }
        ]
      },

      {
        title: 'Ayuda',
        list: [
          {
            title: 'Reporte de incidencias',
            onClick: () => null
          },
          {
            title: 'Documentación',
            onClick: () => null
          }
        ]
      }
    ]
  }

  return (
    <div>
      <LayoutProvider defaultOpen>
        <AppHeader
          drawerButton
          menu={headerOptions.rightMenu}
          extraComponents={headerOptions.extraComponents}
        />
        <Foo.. />
      </LayoutProvider>
    </div>
  )
}
export default Providers


````
