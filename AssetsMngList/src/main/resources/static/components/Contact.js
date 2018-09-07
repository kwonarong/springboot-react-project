import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

import update from 'react-addons-update';

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

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    // 컴포넌트를 가장 처음 그리기전, contactData의 값이 존재한다면
    // setState를 통하여 저장되있던 값을 불러온다.
    let contactData = localStorage.contactData;

    if(contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // state가 변경 될 때 마다, 만약 state가 새롭다면
    // localStorage에 현 contactData의 데이터를 저장한다.
    if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
      localStorage.contatData = JSON.stringify(this.state.contactData);
    }
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

  // 원소 추가
  handleCreate(contact) {
    this.setState({
      contactData: update (
          this.state.contactData,
          {
            $push: [contact]
          }
      )
    });
  }

  // 원소 제거
  handleRemove() {
    this.setState({
      contactData: update(
        this.state.contactData,
        {$splice: [[this.state.selectedKey, 1]] }
      ),
      selectedKey: -1 // 현재 선택중인 것을 무효화
    });
  }

  //원소 수정
  handleEdit(name, phone) {
    this.setState({
      contactData: update(
        this.state.contactData,{
          [this.state.selectedKey] : {
            name: {$set: name },
            phone : {$set: phone }
          }
        }
      )
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
              onRemove={this.handleRemove}
              onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate}/>
      </div>
    );
  };
}
