import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};
