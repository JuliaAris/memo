import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({ handlePrevious, handleNext }) => {
  return (
    <>
      <button onClick={handlePrevious} className={styles.buttonPrev}>
        {"<<"}
      </button>
      <button onClick={handleNext} className={styles.buttonNext}>
        {">>"}
      </button>
    </>
  );
};

export default Buttons;
