import React from 'react'
import { mount } from '@cypress/react'
import App from '../../../src/App' 
/* global cy */


describe('App', () => {
  it('works', () => {
    mount(<App />)
    // Your assertions here. For example:
    cy.contains('Expected content of MyComponent')
  })
})
