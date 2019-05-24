import React, { Component } from "react";
import axios from "axios";

class Team extends Component {
  state = {
    photo: []
  };
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_limit=10`)
      .then(res => {
        const photo = res.data;
        this.setState({ photo });
      });
  }
  render() {
    return (
      <React.Fragment>
        <ul className="container">
          {this.state.photo.map(photo => (
            <table className="tableclass">
              <tr>
                <td>Name: {photo.name}</td>

                <td>Email: {photo.email}</td>
              </tr>
              <tr>
                <td>Website: {photo.website}</td>

                <td>Phone: {photo.phone}</td>
              </tr>
              <tr>
                <td>Street: {photo.address.street}</td>

                <td>Suite: {photo.address.suite}</td>
              </tr>
              <tr>
                <td>City: {photo.address.city}</td>

                <td>Zipcode: {photo.address.zipcode}</td>
              </tr>
              <tr>
                <td>Geo_Lat: {photo.address.geo.lat}</td>

                <td>Geo_lng: {photo.address.geo.lng}</td>
              </tr>
            </table>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export default Team;
