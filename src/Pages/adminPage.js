import React, { useState } from "react";
import DataGrid from "../Components/DataGrid";
import Drawer from "../Components/Drawer";
import Profile from "../Components/Profile";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import "../StyleSheets/grid.css";

export default function AdminPage() {
  const [filtered, setFiltered] = useState("No Filter");
  const [sorted, setSorted] = useState("Date new-old");
  const [expanded, setExpanded] = useState("allRequests");
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="greyBackground">
      <table>
        <tbody>
          <tr className="removeDefaultVerticalAlignment">
            <td className="removeDefaultVerticalAlignment drawerAll whiteBackground">
              <Profile />
              <Drawer expanded={expanded} setExpanded={setExpanded} />
            </td>
            <td>
              <table>
                <tbody>
                  <tr className="removeDefaultVerticalAlignment">
                    <td className="removeDefaultVerticalAlignment whiteBackground">
                      <SearchBar
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                      />
                    </td>
                  </tr>
                  {expanded === "allRequests" ||
                  expanded === "pendingRequests" ||
                  expanded === "confirmedRequests" ? (
                    <div>
                      <tr className="removeDefaultVerticalAlignment">
                        <td className="removeDefaultVerticalAlignment">
                          <div className="PaddingHeader">
                            <Header
                              filtered={filtered}
                              setFiltered={setFiltered}
                              sorted={sorted}
                              setSorted={setSorted}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="removeDefaultVerticalAlignment">
                        <td className="removeDefaultVerticalAlignment">
                          <div className="PaddingDataGrid">
                            <DataGrid
                              filtered={filtered}
                              sorted={sorted}
                              expanded={expanded}
                              searchValue={searchValue}
                            />
                          </div>
                        </td>
                      </tr>
                    </div>
                  ) : null}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
