import styles from "../styles/Button.module.css";

const FlatButton = (props) => {
	return (
		<button className={styles["flat-button"]} style={props.style}>
			{props.text}
		</button>
	);
};

export default FlatButton;
