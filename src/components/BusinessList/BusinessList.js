import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(input => {
            return <Business key={input.id} business={input}/>;
          })
        }
      </div>
    );
  }
}

export default BusinessList;
