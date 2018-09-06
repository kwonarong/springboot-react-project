import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 초기값 설정
      keyword: "",
      selectedKey : -1,
      contactData:[{
        name: 'Albert',
        phone: '010-0000-0001'
        }, {
          name: 'Betty',
          phone: '010-0000-0002'
        }, {
          name: 'Charlie',
          phone: '010-0000-0003'
        }, {
          name: 'David',
          phone: '010-0000-0004'
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // 검색 기능
  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  // 선택 기능
  handleClick(key) {
    this.setState({
      selectedKey : key
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter (
        // 검색 기능 구현
        (contact) => {
          return contact.name.toLowerCase()
                        .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );

      return data.map((contact, i) => {
        return (<ContactInfo  contact={contact}
                              key={i}
                              onClick={() => this.handleClick(i)}
                />);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
              contact={this.state.contactData[this.state.selectedKey]}
              isSelected={this.state.selectedKey != -1}
        />
      </div>
    );
  };
}
