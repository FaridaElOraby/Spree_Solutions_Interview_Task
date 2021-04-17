import React from "react";
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
            <td>
              {/* Logo Image */}
              <img src={logo} alt="" className="adminlogo" />
            </td>
          </tr>
          <tr>
            <td>
              {/* Profile Avatar */}
              <Avatar alt="Remy Sharp" src={avatarpic} className="avatarpic" />
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    {/* Name */}
                    <td>
                      <div className="drawerName">Ahmed Reda</div>
                    </td>
                  </tr>
                  <tr>
                    {/* ID */}
                    <td>
                      <div className="drawerID">#1253724</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
