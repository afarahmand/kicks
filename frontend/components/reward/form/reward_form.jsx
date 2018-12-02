import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { formatAsYYYYMMDD } from '../../../utils/date_util';

import RewardFormIndexItem from './reward_form_index_item';
import NewRewardIndex from './new_reward_index';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
    }
  }

  sortRewardIds(rewardsObject) {
    return Object.keys(rewardsObject).sort(function(rewardId1, rewardId2) {
      const one = rewardsObject[rewardId1].amount;
      const two = rewardsObject[rewardId2].amount;
      if (one < two) {
        return -1;
      } else if (one > two) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  render() {
    let sortedRewardIds = this.sortRewardIds(this.props.projectRewards);

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
            sortedRewardIds.map(rewardId => (
              <RewardFormIndexItem
                key={rewardId}
                reward={this.props.projectRewards[rewardId]}
                deleteReward={this.props.deleteReward}
                updateReward={this.props.updateReward}
              />
            ))
          }
          <NewRewardIndex
            createReward={ this.props.createReward }
            projectId={this.props.match.params.projectId}
          />

        </section>
      </div>
    );
  }
}

export default withRouter(RewardForm);
