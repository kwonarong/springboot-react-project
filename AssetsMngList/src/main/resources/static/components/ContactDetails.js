import React from 'react';

export default class ContactDetails extends React.Component {
  render() {

    // 선택되었을 때 보여질 부분
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    // 아무것도 선택되지 않았을 때 보여질 부분
    const blank = (
      <div>Nothing is Selected</div>
    );

    return (
      <div>
        <h2>details</h2>
        { /* is Selected props 값에 따라 어떤 것을 보여줄지 정한다.
            ternary expression condition ? true : false */}
        { this.props.isSelected ? details : blank }
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name : "",
    phone : ""
  }
}
