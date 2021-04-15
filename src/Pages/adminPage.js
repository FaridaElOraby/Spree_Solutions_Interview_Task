import React from "react";
import DataGrid from "../Components/DataGrid";
import Drawer from "../Components/Drawer";
import Profile from "../Components/Profile";

export default function adminPage() {
  return (
    <div>
      <table>
        <tbody>
          <tr className="removeDefaultVerticalAlignment">
            <td className="removeDefaultVerticalAlignment">
              <Profile />
              <Drawer />
            </td>
            <td>
              <table>
                <tbody>
                  <tr className="removeDefaultVerticalAlignment">
                    <td className="removeDefaultVerticalAlignment">
                      Search Box
                    </td>
                  </tr>
                  <tr className="removeDefaultVerticalAlignment">
                    <td className="removeDefaultVerticalAlignment">
                      Requests, Sort, Filter
                    </td>
                  </tr>
                  <tr className="removeDefaultVerticalAlignment">
                    {" "}
                    <td className="removeDefaultVerticalAlignment">
                      <DataGrid />
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
