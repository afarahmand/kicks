import React from 'react';

import RewardFormIndexItem from './reward_form_index_item';

class NewRewardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addNewReward = this.addNewReward.bind(this);
    this.removeReward = this.removeReward.bind(this);
  }

  addNewReward() {
    let i = 0;

    while (this.state[i] !== undefined) {
      i++;
    }

    let newReward = {
      id: i,
      title: "",
      amount: 0,
      description: "",
      project_id: this.props.projectId
    };

    let newState = Object.assign({}, this.state);
    newState[i] = newReward;

    this.setState(newState);
  }

  removeReward(reward) {
    let newState = Object.assign({}, this.state);
    newState[reward.id] = null;
    this.setState(newState);
  }

  renderErrors() {
    return (
      <div className="error-display">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}> {error} </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <section>
        {
          Object.keys(this.state).map(rewardId => {
            if (this.state[rewardId] !== null) {
              return (
                <RewardFormIndexItem
                  key={rewardId}
                  reward={this.state[rewardId]}
                  removeReward={this.removeReward}
                  createReward={this.props.createReward}
                />
              );
            } else {
              return null;
            }
        })
        }

        <div className="button-container">
          <button
            onClick={this.addNewReward}
          >
            Add New Reward +
          </button>
        </div>
      </section>
    );
  }
}

export default NewRewardIndex;
