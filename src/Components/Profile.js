import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../Images/logo.png";
import avatarpic from "../Images/avatar.png";
import "../StyleSheets/drawer.css";
import Avatar from "@material-ui/core/Avatar";

export default function Profile() {
  return (
    <div>
      <table className="adminprofiletable">
        <tbody>
          <tr>
            {" "}
            <td>
              <img src={logo} alt="" className="adminlogo" />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Avatar alt="Remy Sharp" src={avatarpic} />
            </td>
            <td className="pcOnly">
              {" "}
              <table>
                <tbody>
                  <tr>
                    {" "}
                    <td>Ahmed Reda</td>
                  </tr>{" "}
                  <tr>
                    {" "}
                    <td>#1253724</td>
                  </tr>{" "}
                </tbody>{" "}
              </table>{" "}
            </td>
          </tr>
          <tr className="mobileOnly">
            {" "}
            <td>Ahmed Reda</td>
          </tr>
          <tr>
            {" "}
            <td className="mobileOnly">#1253724</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
