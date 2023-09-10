import React from "react";
import styles from "../../styles/SmallResult.module.css"
export default function SmallResult({ author, imgurl, title }) {
  let newUrl = imgurl && imgurl
    // .replace("zoom=1", "zoom=0")
    // .replace("http://", "https://");
  return (
    <div className={styles.small_result_container}>
      <img
        src={imgurl}
        alt={title}
        className={styles.small_result_image}
      />
      <div className={styles.small_result_details}>
        <h1 className={styles.small_result_title}>{title}</h1>
        <h2 className={styles.small_result_author}>{author}</h2>
      </div>
    </div>
  );
}
