import React from 'react';
import { Link, withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.State = {
      user: this.props.user,
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = function() {

      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

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
    const name = this.props.user ? this.props.user.first_name : "";
    return(
      <div className="profile-page">
        <div className="profile-greeting">
          <h1> Greetings, {name} </h1>
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
