import React from 'react';
import { Link, withRouter } from 'react-router';


class EditCampaign extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      user_id: this.props.user.id,
      title: this.props.title,
      target_amount: this.props.target_amount,
      descriptions: "Description...",
      category_id: null,
      end_date: null,
      tagline: "Think persuasion, not baseball...",
      imageFile: null,
      imageUrl: this.props.user.image,
      id: this.props.params.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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

    if (this.state.imageFile) {
      e.preventDefault();
      let type;
      const formData = new FormData();
      // We need to append all other fields to form data
      // in order to pass through all info from the form
      formData.append("campaign[image]", this.state.imageFile);
      formData.append("campaign[title]", this.state.title);
      formData.append("campaign[id]", this.state.id);
      formData.append("campaign[tagline]", this.state.tagline);
      formData.append("campaign[descriptions]", this.state.tagline);


      this.props.updateCampaign(formData, type = true).then((camp) => {
        const url = `campaigns/${camp.campaign.id}`;

        this.props.router.push(url);
      });
    } else {

      let type;
      this.props.updateCampaign(this.state, type = false).then((camp) => {
        const url = `campaigns/${camp.campaign.id}`;

        this.props.router.push(url);
      });
    }

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    // let err = null;
    // if (this.props.errors) {
    //   err= this.props.errors[0];
    // }


      return(
        <div className="edit-campaign">
          <h1>Let's get some more details.</h1>
          <div className="campaign-edit-form">
            <form className="c-form"  onSubmit={this.handleSubmit}>

              <div className="campaign-description">
                <h2>Tell us a little bit about your Campaign!</h2>
                <input type="text"
                  placeholder={this.state.descriptions}
                  onChange={this.update("descriptions")}>
                </input>
              </div>

              <div className="tagline">
                <h2>Give us your best pitch! </h2>
                <input type="text"
                  placeholder={this.state.tagline}
                  onChange={this.update("tagline")}>
                </input>
              </div>

              <div className="category_dropdown">
                <h2>Tag it with a Category!</h2>
                  <select name="category">
                    <option value="1">Travel&Outdoors</option>
                    <option value="2">Film</option>
                    <option value="3">Community Projects</option>
                    <option value="4">Music</option>
                    <option value="5">Technology</option>
                    <option value="6">Materialism</option>
                  </select>
              </div>

              <div  className="campaign-img-preview">
                <h2>Lastly, let's upload an image of what you're funding.</h2>
                <div className="row-div">
                  <div className="campaign-img">
                    <img  src={this.state.imageUrl}/>
                  </div>

                   <div className="file-upload">
                    <input type="file"
                      onChange={this.updateFile}
                      onClick={this.handleFileSubmit}/>
                  </div>

                </div>
              </div>

              <div className="submit-button">
                <input type="submit"
                        value="submit">
                </input>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default withRouter(EditCampaign);
