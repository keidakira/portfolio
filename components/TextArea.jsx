import styles from "../styles/TextInput.module.css";

const TextInput = (props) => {
	return (
		<textarea
			type="text"
			name={props.name}
			placeholder={props.placeholder}
			className={styles.input}
			rows="5"
		></textarea>
	);
};

export default TextInput;
