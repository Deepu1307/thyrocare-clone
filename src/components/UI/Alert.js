import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./alert.module.css";

const Alert = () => {
  const [openAndCloseAlert, setOpenAndCloseAlert] = useState(true);

  const alertHandler = (e) => {
    e.preventDefault();
    setOpenAndCloseAlert(false);
  };

  return (
    <>
      {openAndCloseAlert ? (
        <div className={classes.alert}>
          <div className={classes.alertText}>
            <span>Note : </span>
            <span>
              Covid positive reports will be shared as per the local municipal
              corporation guidelines
            </span>
          </div>
          <div className={classes.alertIcon}>
            <CloseIcon onClick={alertHandler} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Alert;
