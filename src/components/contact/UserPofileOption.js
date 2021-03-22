import React, { Component } from 'react'

  const ProfileOptions = ({ options, selected, onChange }) => {
    return (
      <div className="pollOption">
        {options.map((choice, index) => (
          <label key={index}>
            <input type="radio"
              name="vote"
              value={choice.value}
              key={index}
              checked={selected === choice.value}
              onChange={onChange} />
            {choice.text}
          </label>
        ))}
      </div>
    );
  };
  
  class UserPofileOption extends Component {
    constructor(props) {
      super(props);
      this.state = { selectedOption: '' }
    }
  
    handleClick() {
      console.log('submitted option', this.state.selectedOption);
    }
  
    handleOnChange(e) {
      console.log('selected option', e.target.value);
      this.setState({ selectedOption: e.target.value});
    }
  
    render() {
      return (
        <div className="poll">
          {this.props.model.question}
          <ProfileOptions
            options={this.props.model.choices}
            onChange={(e) => this.handleOnChange(e)}
            selected={this.state.selectedOption} />
        </div>
      );
    }
  }
  
export default UserPofileOption;