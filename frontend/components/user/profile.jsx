import React from 'react';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      imageFile: null,
      imageUrl: null,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.user.id != newProps.user.id) {
      this.setState({user: newProps.user.id, imageUrl: newProps.user.image_ur});
    }
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

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    formData.append("user[id]", this.props.user.id);
    this.props.editUser(formData).then(usr => {
      this.setState({user: usr});
    });
  }

  render() {
    return(
      <div className="main-content">
        <div className="left">
          <div className="user-image">
            <h1 className="img-title"> User Image </h1>
            <div className="image-container">

             <div className="user-img">
               <img className="usr-avatar"  src={this.state.imageUrl}/>
             </div>

            <form className= "usr-avatar-form" onSubmit={this.handleSubmit}>
            <div className="file-upload">
               <input type="file"
                 onChange={this.updateFile}/>

                 <div className="file-submit">
                   <input type="submit" value="UPLOAD IMAGE"></input>
                 </div>
             </div>
            </form>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="profile-photo">
            <img className="profile-photo-img" src={this.props.user.image_url} />
          </div>
          <div className="user-overview">
          <h1>About Me</h1>
          <div className="user-content">
            {this.props.user.about_me}
          </div>
          </div>
        </div>
      </div>
    );

  }
}

export default UserProfile;
