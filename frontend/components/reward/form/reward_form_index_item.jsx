import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RewardFormIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = props.reward;

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();

    // Different behavior depending on whether a new reward or updating
    //   an existing reward.  If creating a reward, must be removed from
    //   local state in the index component after successful creation
    if (this.props.removeReward === undefined) {
      this.props.deleteReward(this.state);
    } else {
      this.props.removeReward(this.state);
    }
  }

  handleSave(e) {
    e.preventDefault();
    let reward = Object.assign({}, this.state);

    if (this.props.createReward === undefined) {
      this.props.updateReward(reward);
    } else {
      this.props.createReward(this.state).then(
        createdReward => { this.props.removeReward(this.state); }
      );
    }
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

export default RewardFormIndexItem;
