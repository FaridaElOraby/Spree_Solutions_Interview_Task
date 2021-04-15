import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import "../StyleSheets/drawer.css";

import boxesUnclicked from "../Images/boxes.png";
import boxesClicked from "../Images/boxesClicked.png";

import dashboardUnclicked from "../Images/dashboard.png";
import dashboardClicked from "../Images/dashboardClicked.png";

import ordersUnclicked from "../Images/orders.png";
import ordersClicked from "../Images/ordersClicked.png";

import requestsClicked from "../Images/requestsClicked.png";
import requestsUnclicked from "../Images/requests.png";

import usersUnclicked from "../Images/users.png";
import usersClicked from "../Images/usersClicked.png";

import settingsUnclicked from "../Images/settings.png";
import settingsClicked from "../Images/settingsClicked.png";

import active from "../Images/active_circle.png";
import completed from "../Images/completed_circle.png";

const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  //   root: {
  //     backgroundColor: "rgba(0, 0, 0, .03)",
  //     borderBottom: "1px solid rgba(0, 0, 0, .125)",
  //     marginBottom: -1,
  //     minHeight: 56,
  //     "&$expanded": {
  //       minHeight: 56,
  //     },
  //   },
  //   content: {
  //     "&$expanded": {
  //       margin: "12px 0",
  //     },
  //   },
  //   expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  //   root: {
  //     padding: theme.spacing(2),
  //   },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="admindrawer">
      <Accordion
        square
        expanded={expanded === "dashboard"}
        onChange={handleChange("dashboard")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            {expanded === "dashboard" ? (
              <div className="tagClicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={dashboardClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Dashboard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={dashboardUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Dashboard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "allRequests"}
        onChange={handleChange("allRequests")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            {" "}
            {expanded === "allRequests" ? (
              <div className="tagClicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={requestsClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Requests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={requestsUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Requests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={active} alt="" className="requestsicons" />
                  </td>
                  {expanded === "pendingRequests" ? (
                    <td className="tagClicked">Pending</td>
                  ) : (
                    <td className="tagUnclicked">Pending</td>
                  )}
                </tr>
                <tr>
                  <td>
                    <img src={completed} alt="" className="requestsicons" />
                  </td>
                  {expanded === "confirmedRequests" ? (
                    <td className="tagClicked">Confirmed</td>
                  ) : (
                    <td className="tagUnclicked">Confirmed</td>
                  )}
                </tr>
                <tr>
                  <td></td>
                  {expanded === "allRequests" ? (
                    <td className="tagClicked">All Requests</td>
                  ) : (
                    <td className="tagUnclicked">All Requests</td>
                  )}
                </tr>
              </tbody>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "users"}
        onChange={handleChange("users")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            {expanded === "users" ? (
              <div className="tagClicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={usersClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Users</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={usersUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Users</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "boxes"}
        onChange={handleChange("boxes")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            {" "}
            {expanded === "boxes" ? (
              <div className="tagClicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={boxesClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Boxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={boxesUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Boxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "orders"}
        onChange={handleChange("orders")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            {" "}
            {expanded === "orders" ? (
              <div className="tagClicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={ordersClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Orders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={ordersUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Orders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "settings"}
        onChange={handleChange("settings")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            {" "}
            {expanded === "settings" ? (
              <div className="tagClicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={settingsClicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <img
                          src={settingsUnclicked}
                          alt=""
                          className="drawericons"
                        />
                      </td>
                      <td>Settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
