import styles from "../styles/Project.module.css";
import RoundedOutlineButton from "./RoundedOutlineButton";

const Project = (props) => {
	return (
		<div
			className={styles["project-container"]}
			style={{ backgroundImage: `url(${props.imageUrl})` }}
		>
			<div className={styles.caption + " text-center"}>
				<p className={styles.name}>{props.name}</p>
				<p className={styles.description}>{props.description}</p>
				<a
					href={props.projectUrl}
					target="_blank"
					className="padding-top-space"
				>
					<RoundedOutlineButton text="View Project" />
				</a>
			</div>
		</div>
	);
};

export default Project;
