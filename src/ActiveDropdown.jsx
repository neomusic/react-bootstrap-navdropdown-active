import React from 'react'

class ActiveDropdown extends React.Component {

  setActiveClass() {
    if (this.props.activeRoutes.constructor === Array) {
      const childRouteIsActive = this.props.activeRoutes.find(
        element => element === window.location.pathname
      )
      if (childRouteIsActive !== undefined) {
        return `${this.props.baseClassName} active`
      }
    }
    return `${this.props.baseClassName}`
  }


  render() {
    return (
      <li className="dropdown">
        <a className={this.setActiveClass()} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.title}<span className="caret" /></a>
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </li>
    )
  }
}

ActiveDropdown.defaultProps = {
  baseClassName: '',
  activeRoutes: []
}

ActiveDropdown.propTypes = {
  activeRoutes: React.PropTypes.arrayOf.isRequired,
  baseClassName: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.shape.isRequired
}

export default ActiveDropdown
