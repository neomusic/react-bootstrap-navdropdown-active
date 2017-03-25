import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import ActiveDropdown from './../src/ActiveDropdown'

describe('Test ActiveDropdown component', () => {
  it('can return component with class active', (done) => {
    global.window = {
      location: {
        pathname: '/foo/bar'
      }
    }
    const component = mount(<ActiveDropdown activeRoutes={['/foo/bar', '/subaru/baracca']} baseClassName="dropdown-toggle" title="Foo" />)
    expect(component.find('.active').length).to.equal(1)
    done()
  })
})
