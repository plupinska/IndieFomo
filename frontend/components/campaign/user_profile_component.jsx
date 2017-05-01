import React from 'react';
import { connect } from 'react-redux';

class UserProfileBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.props.getUser(this.props.userId).then(usr => {
      this.setState({user: usr});
    });
  }

  render() {
    if (this.state.user) {

      return (
        <div className="usr-tag">
            <div>
              <img className="user-tag"src={this.state.user.user.image_url}/>
            </div>

            <div className="right-profile">
              <div className="usr-name1">
                {this.state.user.user.first_name} {this.state.user.user.last_name}
              </div>
              <div className="about_me">
                {this.state.user.user.about_me}
              </div>
            </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

const mapStateToProps = (state) => {

  return {
    userId: state.session.currentUser.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserProfileBlock);


// export default UserProfileBlock;
