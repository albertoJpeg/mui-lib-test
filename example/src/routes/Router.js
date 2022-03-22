import React from 'react'
import { routes } from './routes'
import { Route, Switch } from 'react-router-dom'
import Introduction from '../views/Introduction'
import LoadingButtonDoc from '../views/components/LoadingButtonDoc/'
import AppHeaderDoc from '../views/components/AppHeaderDoc/'
import VerticalItemButton from '../views/components/VerticalItemButtonDoc/'
import UseLayoutDoc from '../views/hooks/UseLayoutDoc/'
import UseWindowSizeDoc from '../views/hooks/UseWindowSizeDoc/'
import LayoutProviderDoc from '../views/components/LayoutProviderDoc'
import AppFooterDoc from '../views/components/AppFooterDoc'
import AppDrawerDoc from '../views/components/AppDrawerDoc'
import TestDoc from '../views/components/TestDoc'
import EmptyDataDoc from '../views/components/EmptyDataDoc'
import AppContainerDoc from '../views/components/AppContainerDoc'
import SimpleTableDoc from '../views/components/SimpleTableDoc'
import CustomTableDoc from '../views/components/ComplexTableDoc'

export function Router() {
  return (
    <Switch>
      <Route exact path={routes.introduction}>
        <Introduction />
      </Route>
      <Route exact path={'/'}>
        <Introduction />
      </Route>
      <Route path={routes.loadingButtonDoc}>
        <LoadingButtonDoc />
      </Route>
      <Route path={routes.useLayoutDoc}>
        <UseLayoutDoc />
      </Route>
      <Route path={routes.useWindowSizeDoc}>
        <UseWindowSizeDoc />
      </Route>
      <Route path={routes.verticalItemButtonDoc}>
        <VerticalItemButton />
      </Route>
      <Route path={routes.LayoutProviderDoc}>
        <LayoutProviderDoc />
      </Route>
      <Route path={routes.appHeaderDoc}>
        <AppHeaderDoc />
      </Route>
      <Route path={routes.appFooterDoc}>
        <AppFooterDoc />
      </Route>
      <Route path={routes.AppDrawerDoc}>
        <AppDrawerDoc />
      </Route>
      <Route path={routes.EmptyDataDoc}>
        <EmptyDataDoc />
      </Route>
      <Route path={routes.AppContainerDoc}>
        <AppContainerDoc />
      </Route>
      <Route path={routes.SimpleTable}>
        <SimpleTableDoc />
      </Route>
      <Route path={routes.CustomTable}>
        <CustomTableDoc />
      </Route>
      <Route path={'/test'}>
        <TestDoc />
      </Route>
    </Switch>
  )
}
