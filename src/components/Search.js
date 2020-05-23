import React, { Component } from "react";
import "../styles/App.css";
import axios from "axios";
import Result from "./Result";
import { toast } from "react-toastify";

const PORT = 8000;

const API_URL = `http://${window.location.hostname}:${PORT}/api`;
const buildShortURL = (suffix) =>
  `${window.location.hostname}:${PORT}/${suffix}`;

class Search extends Component {
  state = {
    loading: false,
  };

  configureURL(url) {
    //Sets url into proper format before making requests
    if (!url.includes("https://")) {
      url = "https://" + url;
    }

    return url;
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleNewURL = (e) => {
    e.preventDefault();
    let { url } = this.state;
    if (url === "") {
      toast.error("You passed an invalid URL");
      return;
    }
    url = this.configureURL(url);

    this.setState({
      loading: true,
    });
    const requestURL = `${API_URL}/urls/create`;
    axios
      .post(requestURL, {
        original_url: url,
      })
      .then((response) => {
        this.setState({
          short_url: buildShortURL(response.data["url_hash"]),
        });
        toast.success("Shortened url succesfully");
      })
      .catch(function (error) {
        let errorMsg = "";
        try {
          errorMsg = error.response.data.original_url[0];
        } catch (error) {
          errorMsg = "An error occured";
        }
        toast.error(errorMsg || "An error occured.");
      });

    this.setState({
      loading: false,
    });
  };
  renderResult = () => {
    const { short_url } = this.state;
    if (short_url) {
      return <Result url={short_url} />;
    }
  };

  render() {
    console.log(this.state);
    const { loading } = this.state;
    return (
      <div>
        <form onSubmit={this.handleNewURL}>
          <div className="search container">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">https://</span>
              </div>
              <input
                onChange={this.handleInput}
                type="text"
                name="url"
                className="form-control"
                placeholder="www.google.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="container">
            <input
              disabled={loading}
              className="btn btn-block"
              type="submit"
              value={!loading ? "Generate Short URL" : "Please wait"}
            />
          </div>
        </form>
        {this.renderResult()}
      </div>
    );
  }
}

export default Search;
