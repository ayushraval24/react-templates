import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArray: [],
      dayrray: [],
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);

    const { value, checked } = e.target;

    if (checked) {
      this.setState({
        dayrray: [...this.state.dayrray, value],
      });
    } else {
      this.setState({
        dayrray: this.state.dayrray.filter((e) => e !== value),
      });
    }
  };

  addHandler = () => {
    console.log("This is dayarray : ", this.state.dayrray);
  };

  render() {
    return (
      <div className="container">
        <div>
          <input
            type="checkbox"
            value="monday"
            ref={this.monRef}
            onChange={this.handleChange}
          />
          <label htmlFor="">Monday</label>
        </div>
        <div>
          <input type="checkbox" value="tuesday" onChange={this.handleChange} />
          <label htmlFor="">Tuesday</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="wednesday"
            onChange={this.handleChange}
          />
          <label htmlFor="">Wednesday</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="thursday"
            onChange={this.handleChange}
          />
          <label htmlFor="">Thursday</label>
        </div>
        <div>
          <input type="checkbox" value="friday" onChange={this.handleChange} />
          <label htmlFor="">Friday</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="saturday"
            onChange={this.handleChange}
          />
          <label htmlFor="">Saturday</label>
        </div>
        <div>
          <input type="checkbox" value="sunday" onChange={this.handleChange} />
          <label htmlFor="">Sunday</label>
        </div>
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}

export default Checkbox;
