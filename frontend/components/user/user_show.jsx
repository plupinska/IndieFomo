import React from 'react';
import { Link, withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      user: null,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {

      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[image]", this.state.imageFile);

    this.editUser(formData);
  }

  render() {

    return(
      <div className="profile-page">
        <div className="profile-greeting">
          <h1> Greetings, {this.props.user.first_name} </h1>
        </div>

        <div className="main-content">
          <div className="left">
            <div className="user-image">
              <h1> User Image </h1>
              <input type="file"
                onChange={this.updateFile}
                onClick={this.handleSubmit}/>
              <img src={this.state.imageUrl}/>
            </div>
            <div className="about-me">
              <h1> About me </h1>
            </div>
          </div>


          <div className="right">
            <div className="user-overview">
            <h1> User Overview </h1>
            </div>
          </div>
        </div>

        <div className="contributions">
          <h1 className="table-name"> Contributions </h1>
          <div className="table">
          </div>
        </div>


      </div>
    );
  }
}

export default withRouter(UserShow);
