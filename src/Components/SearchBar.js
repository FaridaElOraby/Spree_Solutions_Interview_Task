import React from "react";
import { SearchInput } from "evergreen-ui";
import "../StyleSheets/Header.css";
import notification from "../Images/notification.png";

export default function SearchBar(props) {
  // eslint-disable-next-line no-unused-vars
  const setSearchValue = props.setSearchValue;
  return (
    <div className="SearchBar">
      <table>
        <tbody>
          <tr>
            <td>
              {/* Serach Bar with styiling and logic */}
              <SearchInput
                placeholder="Search for a contact"
                className="SearchBox"
                width="77vw"
                spellcheck="false"
                type="input"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </td>
            <td>
              {/* notification static icon*/}
              <img src={notification} alt="" className="drawericons" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
