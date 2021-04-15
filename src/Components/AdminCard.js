import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "77vw",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AdminCard(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);
    setChecked(newChecked);
  };

  const records = {
    orders: [
      {
        created_at: "2021-04-10T18:49:55.996042",
        customer: {
          email: "test@test.com",
          fname: "John",
          gender: "M",
          lname: "Doe",
        },
        id: 1,
        status: "pending_confirmation",
        supplier: "Amazon",
        total: 2000,
      },

      {
        created_at: "2021-02-10T18:49:55.996042",
        customer: {
          email: "test2@test.com",
          fname: "Ahmed",
          gender: "M",
          lname: "Zaky",
        },
        id: 21,
        status: "confirmed",
        supplier: "Macy's",
        total: 3000,
      },

      {
        created_at: "2021-02-11T18:49:55.996042",
        customer: {
          email: "test3@gmail.com",
          fname: "Emily",
          gender: "F",
          lname: "Green",
        },
        id: 3,
        status: "pending_confirmation",
        supplier: "Ebay",
        total: 5500,
      },

      {
        created_at: "2021-02-13T13:00:55.996042",
        customer: {
          email: "test4@gmail.com",
          fname: "Jack",
          gender: "M",
          lname: "Green",
        },
        id: 4,
        status: "pending_confirmation",
        supplier: "Amazon",
        total: 5900,
      },
      {
        created_at: "2021-02-14T13:00:55.996042",
        customer: {
          email: "test5@gmail.com",
          fname: "Islam",
          gender: "M",
          lname: "Sayed",
        },
        id: 5,
        status: "confirmed",
        supplier: "Amazon",
        total: 3900,
      },
      {
        created_at: "2021-03-15T13:00:55.996042",
        customer: {
          email: "test6@gmail.com",
          fname: "Mai",
          gender: "F",
          lname: "Essam",
        },
        id: 6,
        status: "pending_confirmation",
        supplier: "Amazon",
        total: 3050,
      },
      {
        created_at: "2021-01-10T12:00:55.996042",
        customer: {
          email: "test7@gmail.com",
          fname: "Elizabeth",
          gender: "F",
          lname: "Banks",
        },
        id: 7,
        status: "confirmed",
        supplier: "Macy's",
        total: 8000,
      },
      {
        created_at: "2021-01-01T12:30:55.996042",
        customer: {
          email: "test8@gmail.com",
          fname: "Tom",
          gender: "M",
          lname: "Cruise",
        },
        id: 8,
        status: "confirmed",
        supplier: "Amazon",
        total: 11000,
      },
      {
        created_at: "2020-12-01T01:35:55.996042",
        customer: {
          email: "test9@gmail.com",
          fname: "Emma",
          gender: "F",
          lname: "Stone",
        },
        id: 9,
        status: "pending_confirmation",
        supplier: "Macy's",
        total: 21500,
      },
      {
        created_at: "2021-01-02T19:38:55.996042",
        customer: {
          email: "test10@gmail.com",
          fname: "Jennifer",
          gender: "F",
          lname: "Aniston",
        },
        id: 10,
        status: "confirmed",
        supplier: "Ebay",
        total: 29500,
      },
      {
        created_at: "2021-02-14T13:00:55.996042",
        customer: {
          email: "test5@gmail.com",
          fname: "Islam",
          gender: "M",
          lname: "Sayed",
        },
        id: 11,
        status: "confirmed",
        supplier: "Amazon",
        total: 3900,
      },
      {
        created_at: "2021-03-15T13:00:55.996042",
        customer: {
          email: "test6@gmail.com",
          fname: "Mai",
          gender: "F",
          lname: "Essam",
        },
        id: 12,
        status: "pending_confirmation",
        supplier: "Amazon",
        total: 3050,
      },
      {
        created_at: "2021-01-10T12:00:55.996042",
        customer: {
          email: "test7@gmail.com",
          fname: "Elizabeth",
          gender: "F",
          lname: "Banks",
        },
        id: 13,
        status: "confirmed",
        supplier: "Macy's",
        total: 8000,
      },
      {
        created_at: "2021-01-01T12:30:55.996042",
        customer: {
          email: "test8@gmail.com",
          fname: "Tom",
          gender: "M",
          lname: "Cruise",
        },
        id: 14,
        status: "confirmed",
        supplier: "Amazon",
        total: 11000,
      },
      {
        created_at: "2020-12-01T01:35:55.996042",
        customer: {
          email: "test9@gmail.com",
          fname: "Emma",
          gender: "F",
          lname: "Stone",
        },
        id: 15,
        status: "pending_confirmation",
        supplier: "Macy's",
        total: 21500,
      },
      {
        created_at: "2021-01-02T19:38:55.996042",
        customer: {
          email: "test10@gmail.com",
          fname: "Jennifer",
          gender: "F",
          lname: "Aniston",
        },
        id: 16,
        status: "confirmed",
        supplier: "Ebay",
        total: 29500,
      },
    ],
  };

  let page = 1;
  return (
    <List className={classes.root}>
      {records.orders.map((order, index) => {
        const labelId = `checkbox-list-label-${order.id}`;

        return (
          <ListItem
            key={order.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(index)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={`${records.orders[index].id}, 
                ${records.orders[index].customer.fname} ${records.orders[index].customer.lname},
                ${records.orders[index].status}, ${records.orders[index].supplier},`}
            />{" "}
            {/* <ListItemSecondaryAction> 
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction> */}{" "}
          </ListItem>
        );
      })}{" "}
    </List>
  );
}
