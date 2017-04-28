import { connect } from 'react-redux';
import { createReward, getReward, getAllRewards, clearReward } from '../../../actions/reward_actions';
import React from 'react';
import RewardsShowPage from './rewards_showpage';
import {selectRewards} from '../../../reducers/selectors';

class NewReward extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      campaign_id: this.props.campaign_id,
      title: "Give it a title...",
      description: "Tell your contributors about your reward..",
      price: 0,
      imageFile: null,
      imageUrl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillMount() {
    this.props.clearReward();
    this.setState({
      campaign_id: this.props.campaign_id,
      title: "Give it a title...",
      description: "Tell your contributors about your reward..",
      price: 0,
      imageFile: null,
      imageUrl: null,
    });
  }

  componentWillReceiveProps() {
    this.setState({
      campaign_id: this.props.campaign_id,
      title: "Give it a title...",
      description: "Tell your contributors about your reward..",
      price: 0,
      imageFile: null,
      imageUrl: null,
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // We need to append all other fields to form data
    // in order to pass through all info from the form
    formData.append("reward[campaign_id]", this.props.campaignId);
    formData.append("reward[title]", this.state.title);
    formData.append("reward[price]", this.state.price);
    formData.append("reward[description]", this.state.description);
    formData.append("reward[image]", this.state.imageFile);

    this.props.createReward(formData);
  }

  handleClick(e) {

    e.preventDefault();
    const url = `campaigns/${this.props.campaignId}`;
    this.props.router.push(url);
  }

  updateFile(e) {

    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.router.push('/');
    } else {
      this.setState({user_id: this.props.user.id});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    // let errors = this.props.errors.responseText;
    debugger
      return(
        <div className="create-reward">
          <h1>Create a reward!</h1>
          <h2>Can't crowdsource without incentives...</h2>
          <main>
            <div className="reward-form">
              <form className="r-form">

              <div className="reward-title">
                <h2>Give your reward a title</h2>
                <input type="text"
                  placeholder={this.state.title}
                  onChange={this.update("title")}>
                </input>
              </div>

              <div className="reward-description">
                <h2>Give your reward a description</h2>
                <input type="text"
                  placeholder={this.state.description}
                  onChange={this.update("description")}>
                </input>
              </div>

              <div className="reward-price">
                <h2> How much does it cost? </h2>
                <input type="text"
                  placeholder={this.state.target_amount}
                  onChange={this.update("price")}>
                </input> <span>USD</span>
               </div>

               <div className="rewards-imgupload">Lastly, please add an image
                  <div className="file-upload">
                    <input type="file"
                    onChange={this.updateFile}/>
                 </div>
             </div>

             <div className="submit-buttons" onClick={this.handleSubmit}>
               <input type="submit"
                       value="Add Reward">
               </input>
               <input type="submit"
                       value="Submit" onClick={this.handleClick}>
               </input>
             </div>
              </form>
            </div>
            <div className='rewards-show'>
              <RewardsShowPage rewards={this.props.rewards} campaignId={this.props.campaignId}/>
            </div>
          </main>
        </div>
      );
  }

}


const mapStateToProps = (state, ownProps) => {

  let campid = null;
  if (ownProps.params) {
    campid = ownProps.params.id ;
  } else {
    campid = state.campaigns.campaign.id;
  }
  return {
    campaignId: campid,
    user: state.session.currentUser,
    rewards: selectRewards(state)
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createReward: (id) => dispatch(createReward(id)),
    getReward: (id) => dispatch(getReward(id)),
    getAllRewards: (contribution) => dispatch(getAllRewards(contribution)),
    clearReward: () => dispatch(clearReward())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReward);
