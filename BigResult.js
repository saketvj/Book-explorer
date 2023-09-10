import React from "react";
import styles from "../../styles/BigResult.module.css";
export default function BigResult({ author, imgurl, title, description }) {
  let newUrl = imgurl
    // .replace("zoom=1", "zoom=0")
    // .replace("http://", "https://");
  return (
    <div className={styles.big_result_container}>
      <img
        src={newUrl || imgurl}
        alt={title}
        className={styles.big_result_image}
      />
      <div className={styles.big_result_details}>
        <h1 className={styles.big_result_title}>{title}</h1>
        <h2 className={styles.big_result_author}>{author}</h2>
        <p className={styles.big_result_description}>{description}</p>
      </div>
    </div>
  );
}
