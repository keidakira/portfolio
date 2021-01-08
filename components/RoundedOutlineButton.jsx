import styles from "../styles/Button.module.css";

const RoundedOutlineButton = (props) => {
	return <button className={styles["outline-button"]}>{props.text}</button>;
};

export default RoundedOutlineButton;
