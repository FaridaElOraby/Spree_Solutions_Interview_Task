import React from "react";
import "../StyleSheets/Header.css";
import Sort from "./Sort";
import Filter from "./Filter";
export default function Header(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="HeaderTitle">Requets</td>
            <td className="SortTitle">
              <Sort sorted={props.sorted} setSorted={props.setSorted} />
            </td>
            <td className="FilterTitle">
              <Filter
                filtered={props.filtered}
                setFiltered={props.setFiltered}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
