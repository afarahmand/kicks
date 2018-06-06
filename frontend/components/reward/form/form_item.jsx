import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FormItem extends React.Component {
  constructor(props){
    super(props);
    this.state = props.reward;

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    // console.log("handleDelete: ", this.state);
    // console.log("this.props: ", this.props);
    this.props.deleteReward(this.state);
  }

  handleSave(e) {
    e.preventDefault();
    let reward = Object.assign({}, this.state);
    this.props.saveReward(reward);
    // .then(
    //   reward1 => {console.log("Success!!!")},
    //   err => {console.log("Failure!!!")}
    // );
  }

  hasAnyFieldBeenEdited() {
    let stringifiedState = Object.assign({}, this.state);

    if (typeof stringifiedState.amount === "string") {
      stringifiedState.amount = Number(stringifiedState.amount);
    }

    return !_.isEqual(this.props.reward, stringifiedState);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderSaveButton() {
    if (this.hasAnyFieldBeenEdited()) {
      return (
        <button className="green">
          Save
        </button>
      );
    }
  }

  render() {
    return (
      <div className="reward-form">
        <form onSubmit={this.handleSave}>
          <div className="reward-top">
            <table>
              <tbody>

                <tr>
                  <th>Title</th>
                  <td>
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.update('title')}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Amount</th>
                  <td>
                    <input
                      type="text"
                      value={this.state.amount}
                      onChange={this.update('amount')}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Description</th>
                  <td>
                    <textarea
                      onChange={this.update('description')}
                      className="description"
                      value={this.state.description}
                    >
                    </textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="reward-bottom">
            <button
              onClick={this.handleDelete}
              className="red"
            >
              Delete
            </button>
            {this.renderSaveButton()}
          </div>
        </form>
      </div>
    );
  }
}

export default FormItem;
