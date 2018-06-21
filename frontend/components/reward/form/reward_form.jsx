import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { formatAsYYYYMMDD } from '../../../utils/date_util';

import FormItem from './form_item';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addNewReward = this.addNewReward.bind(this);
    this.removeReward = this.removeReward.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
      // .then(
      //   project => this.initState(project.rewards)
      // );
    }
  }

  addNewReward() {
    // Generate new, unused rewardId
    console.log("addNewReward");
    console.log("this.state: ", this.state);
    console.log("this.state[i]: ", this.state[i]);
    console.log("this.state[i] === undefined: ", this.state[i] === undefined);
    let i = 0;
    while (this.state[i] !== undefined) {
      // console.log("i: ", i, "|", this.state[i] === undefined);
      i++;
    }

    let newReward = {
      id: i,
      title: "",
      amount: 0,
      description: "",
      project_id: this.props.match.params.projectId
    };

    this.setState({ id: newReward });
  }

  removeReward(id) {
    // console.log("removeReward: ", id);
    let newState = Object.assign({}, this.state);
    delete newState[id];

    // console.log("this.state: ", this.state);
    this.setState({ newState });
    // .then(
    //   () => console.log(this.state)
    // );
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
      <div className="reward-form-page">
          <h2>Set your rewards and shipping costs.</h2>
          <section className="page-subtitle">
            Invite backers to be a part of the creative experience by
            offering rewards like a copy of what you’re making, a special
            experience, or a behind-the-scenes look into your process.
          </section>
          <section className="reward-form-container">
            {
              Object.keys(this.props.projectRewards).map(rewardId => (
                <FormItem
                  key={rewardId}
                  reward={this.props.projectRewards[rewardId]}
                  deleteReward={this.props.deleteReward}
                  saveReward={this.props.updateReward}
                />
              ))
            }
            {
              Object.keys(this.state).map(rewardId => (
                <FormItem
                  key={rewardId}
                  reward={this.state[rewardId]}
                  deleteReward={this.removeReward}
                  saveReward={this.props.createReward}
                />
              ))
            }

            <button
              onClick={this.addNewReward}
            >
              Add New Reward +
            </button>
          </section>
      </div>
    );
  }
}

export default withRouter(RewardForm);
