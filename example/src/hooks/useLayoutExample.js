import { useContext } from 'react'
import { AppLayoutExampleContext } from '../contexts/AppLayoutExampleContext'

export default function useLayoutExample() {
  return useContext(AppLayoutExampleContext)
}
