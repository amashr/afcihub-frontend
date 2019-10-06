import Main from '../components/Main';
import {  getTokenForBrowser } from '../static/auth'

import template  from '../static/template'
import PropTypes from 'prop-types'

const Index = ({isLoggedIn}) => (
  <div>
    { !isLoggedIn && (
      <Main />
    )};
  </div>
)

Index.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default template(Index);
