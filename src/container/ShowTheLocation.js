import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ShowTheLocation extends React.Component {
    constructor(props) {
        super(props);
    }
   
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  
  render() {
    const { match, location, history } = this.props

    return (
      <div>
        {
          this.props.parent.getChildrenMsg(this, location.pathname)
        }
      </div>
    )
  }
   
}

export default withRouter(ShowTheLocation);

