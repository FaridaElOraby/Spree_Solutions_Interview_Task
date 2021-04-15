import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import "../StyleSheets/drawer.css";
import boxes from "../Images/boxes.png";
import dashboard from "../Images/dashboard.png";
import orders from "../Images/orders.png";
import requestsClicked from "../Images/requestsClicked.png";
import requestsUnclicked from "../Images/requestsUnclicked.png";
import users from "../Images/users.png";

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
  const [expanded, setExpanded] = React.useState("panel2");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="admindrawer">
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            {expanded === "panel1" ? (
              <div className="tagClicked">
                <img src={dashboard} alt="" className="drawericons" />
                Dashboard{" "}
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <img src={dashboard} alt="" className="drawericons" />
                Dashboard{" "}
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            {" "}
            {expanded === "panel2" ? (
              <div className="tagClicked">
                {" "}
                <img src={requestsClicked} alt="" className="drawericons" />
                Requests{" "}
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <img
                  src={requestsUnclicked}
                  alt=""
                  className="drawericons"
                />{" "}
                Requests{" "}
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>Pending</div>
            <div>Confirmed</div>
            <div>All Requests</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            {expanded === "panel3" ? (
              <div className="tagClicked">
                {" "}
                <img src={users} alt="" className="drawericons" />
                Users{" "}
              </div>
            ) : (
              <div className="tagUnclicked">
                <img src={users} alt="" className="drawericons" /> Users{" "}
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>3</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            {" "}
            {expanded === "panel4" ? (
              <div className="tagClicked">
                <img src={boxes} alt="" className="drawericons" /> Boxes{" "}
              </div>
            ) : (
              <div className="tagUnclicked">
                <img src={boxes} alt="" className="drawericons" /> Boxes{" "}
              </div>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>4</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            {" "}
            {expanded === "panel5" ? (
              <div className="tagClicked">
                {" "}
                <img src={orders} alt="" className="drawericons" /> Orders{" "}
              </div>
            ) : (
              <div className="tagUnclicked">
                {" "}
                <img src={orders} alt="" className="drawericons" /> Not Orders{" "}
              </div>
            )}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
