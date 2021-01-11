import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer + " margin-top-space"}>
			<div>
				<p className="text-center margin-0 padding-2">
					Designed and developed by{" "}
					<u>
						<a
							href="https://www.instagram.com/keidakira/"
							target="_blank"
						>
							keidakira
						</a>
					</u>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
