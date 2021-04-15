import React from "react";
import DataGrid from "../Components/DataGrid";
import Drawer from "../Components/Drawer";
import Profile from "../Components/Profile";

export default function adminPage() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Sidebar</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Search Box</td>
                  </tr>
                  <tr>Grid</tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
