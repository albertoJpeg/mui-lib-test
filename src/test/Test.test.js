import React from 'react'
import { TestComponent } from '../components/TestComponent'
import { render } from '@testing-library/react'

test('renders text component correctly', () => {
  const div = document.createElement('div')
  render(<TestComponent />, div)
})
