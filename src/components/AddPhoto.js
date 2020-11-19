import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const imagelink = e.target.elements.link.value;
    const description = e.target.elements.description.value;

    const posts = {
      id: Number(new Date()),
      description: description,
      imageLink: imagelink,
    };

    if (description && imagelink) {
      this.props.onAddPhoto(posts);
    }
  }

  render() {
    return (
      <div>
        <h1>Add photo</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input name="link" type="text" placeholder="Image Link" />
            <input name="description" type="text" placeholder="Description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
