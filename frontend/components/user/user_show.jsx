import React from 'react';
import { Link, withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      user: this.props.user,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (this.props.params.location.id === this.props.user.id) {
      this.props.getUser(this.props.user.id)
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = function() {
      debugger
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
              <h1 className="img-title"> User Image </h1>
              <div className="image-container">

                <div className="user-img">
                  <img  src={this.state.imageUrl}/>
                </div>

                <div className="file-upload">
                  <input type="file"
                    onChange={this.updateFile}
                    onClick={this.handleSubmit}/>
                </div>

                <div className="file-submit">
                  <button>Upload Image</button>
                </div>

              </div>
              <br/>


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
