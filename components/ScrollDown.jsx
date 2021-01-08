import styles from "../styles/ScrollDown.module.css";

const ScrollDown = () => {
	return (
		<span className={styles["scroll-btn"]}>
			<a href="#">
				<span className={styles.mouse}>
					<span></span>
				</span>
			</a>
			<p>Look at my skills, resume and projects below</p>
		</span>
	);
};

export default ScrollDown;
