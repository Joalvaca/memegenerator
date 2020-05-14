import React, { Component } from "react";
import "./MemeGenerator.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    let randomImage = this.state.allMemeImgs[randomNum].url;
    this.setState({ randomImage: randomImage });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        let { memes } = res.data;
        console.log(memes[5]);
        this.setState({ allMemeImgs: memes });
      });
  }
  render() {
    return (
      <div>
        <div className="meme-form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="top-text-input"
              type="text"
              placeholder="top text"
              onChange={this.handleChange}
              name="topText"
              value={this.state.topText}
            ></input>
            <input
              className="bottom-text-input"
              type="text"
              placeholder="bottom text"
              onChange={this.handleChange}
              name="bottomText"
              value={this.state.bottomText}
            ></input>

            <button className="submit-button">Submit</button>
          </form>
        </div>
        <div className="meme">
          <img
            className="meme-image"
            src={this.state.randomImage}
            alt="start"
          ></img>
          <h2 className="top-text">{this.state.topText}</h2>
          <h2 className="bottom-text">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
