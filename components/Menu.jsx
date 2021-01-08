import style from "../styles/Menu.module.css";
import RoundedOutlineButton from "./RoundedOutlineButton";

const Menu = () => {
	return (
		<div className="container">
			<nav className={style.navbar}>
				<div className={style["nav-brand"]}>SRINANDAN</div>
				<div className={style.menu}>
					<div>
						<RoundedOutlineButton text="Contact Me" />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Menu;
