import React from 'react'

import { AppHeader as AppHeaderComponent } from './components/layout/AppHeader'
import { AppContainer as AppContainerComponent } from './components/layout/AppContainer'
import { AppDrawer as AppDrawerComponent } from './components/layout/AppDrawer'
import { AppFooter as AppFooterComponent } from './components/layout/AppFooter'

import { LayoutProvider as LayoutProviderComponent } from './providers/LayoutProvider'
import { EmptyData as EmptyDataComponent } from './components/EmptyData'

import { VerticalItemButton as VerticalItemButtonComponent } from './components/buttons/VerticalItemButton'
import { LoadingButton as LoadingButtonComponent } from './components/buttons/LoadingButtons'

import { SimpleTable as SimpleTableComponent } from './components/tables/SimpleTable'
import { ComplexTable as ComplexTableComponent } from './components/tables/ComplexTable'

import { Modal as ModalComponent } from './components/modals/Modal'
import { LoaderPage as LoaderPageComponent } from './components/loaders/LoaderPage'

import { UserCard as UserCardComponent } from './components/displayData/UserCard'
import { WelcomeAvatar as WelcomeAvatarComponent } from './components/displayData/WelcomeAvatar'

export useLayout from './hooks/useLayout'
export useWindowSize from './hooks/useWindowSize'

export const AppHeader = (props) => {
  return <AppHeaderComponent {...props} />
}

export const AppDrawer = (props) => {
  return <AppDrawerComponent {...props} />
}

export const AppContainer = (props) => {
  return <AppContainerComponent {...props} />
}

export const AppFooter = (props) => {
  return <AppFooterComponent {...props} />
}

export const LoadingButton = (props) => {
  return <LoadingButtonComponent {...props} />
}

export const EmptyData = (props) => {
  return <EmptyDataComponent {...props} />
}

export const LayoutProvider = (props) => {
  return <LayoutProviderComponent {...props} />
}

export const VerticalItemButton = (props) => {
  return <VerticalItemButtonComponent {...props} />
}

export const SimpleTable = (props) => {
  return <SimpleTableComponent {...props} />
}

export const ComplexTable = (props) => {
  return <ComplexTableComponent {...props} />
}

export const Modal = (props) => {
  return <ModalComponent {...props} />
}

export const LoaderPage = (props) => {
  return <LoaderPageComponent {...props} />
}

export const WelcomeAvatar = (props) => {
  return <WelcomeAvatarComponent {...props} />
}

export const UserCard = (props) => {
  return <UserCardComponent {...props} />
}
