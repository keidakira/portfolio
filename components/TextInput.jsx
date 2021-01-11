import styles from "../styles/TextInput.module.css";

const TextInput = (props) => {
	return (
		<input
			type="text"
			name={props.name}
			placeholder={props.placeholder}
			className={styles.input}
		/>
	);
};

export default TextInput;
