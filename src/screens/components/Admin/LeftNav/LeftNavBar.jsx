import React from "react";
import leftNavItems from "./LeftNavList";
//MUI
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function LeftNavBar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="drawer" style={{ padding: "1rem" }}>
      <List>
        {leftNavItems.map((data, index) => {
          return (
            <>
              {!data.isNested ? (
                <ListItem
                  selected={
                    document.location.href.split("/").pop().toLowerCase() ===
                    data.name.replace(/\s/g, "").toLowerCase()
                  }
                  button
                  key={index}
                  component={Link}
                  to={data.link}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={data.primaryText} />
                </ListItem>
              ) : (
                <>
                  <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={data.primaryText} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {data.nestedItems.map((nesItem, ind) => {
                        return (
                          <ListItem
                            button
                            selected={
                              document.location.href
                                .split("/")
                                .pop()
                                .toLowerCase() ===
                              nesItem.name.replace(/\s/g, "").toLowerCase()
                            }
                            key={ind}
                            component={Link}
                            to={nesItem.link}
                            className={classes.nested}
                          >
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={nesItem.primaryText} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              )}
            </>
          );
        })}
      </List>
    </div>
  );
}
