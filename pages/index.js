import styles from "../styles/Home.module.css";
import Menu from "../components/Menu";
import Head from "next/head";
import Project from "../components/Project";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Code+Pro&family=DM+Serif+Text&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<div className={styles["landing-page"]}>
				<Menu />
				<div className="container">
					<p className="huge-title">
						Full-Stack Web Developer &amp; Student at UCF
					</p>
					<p className="text-center code-font">
						Hi, I'm Nandan. I love to build websites and also like
						to learn a lot about them!
					</p>
					<div className="padding-top-space">
						<img
							src="/images/keidakira.jpg"
							alt="Nandan"
							className="profile-picture"
						/>
					</div>
					<div className="container padding-top-space">
						<p className="text-center">
							Scrolldown for my skills and projects
						</p>
					</div>
				</div>
			</div>
			<Divider />
			<div className="container skills-section">
				<p className="text-center title">My Skills</p>
				<ul className="skills">
					<li>
						<img
							src="/images/web-development.svg"
							alt="Web Development Icon"
							width="64"
						/>
						<p className="text-center sub-title">Web Development</p>
						<p className="text-center" style={{ lineHeight: 1.5 }}>
							I love to build websites from scratch and enjoy
							coding in a variety of languages and frameworks
						</p>
						<br />
						<p className="color-secondary">Languages I know:</p>
						<p style={{ lineHeight: 1.5 }}>
							HTML, CSS, JavaScript, Python, PHP
						</p>
						<br />
						<p className="color-secondary">
							Frameworks/Libraries I use(d):
						</p>
						<p>Bootstrap</p>
						<p>ReactJS</p>
						<p>Django &amp; Flask</p>
						<p>JQuery</p>
						<p>Node with ExpressJS</p>
					</li>
					<li>
						<img
							src="/images/app-development.svg"
							alt="App Development Icon"
							width="64"
						/>
						<p className="text-center sub-title">App Development</p>
						<p className="text-center" style={{ lineHeight: 1.5 }}>
							Apart from websites, I like to build Apps too! Not a
							novice but it's just fun to build stuff.
						</p>
						<br />
						<p className="color-secondary">Languages I know:</p>
						<p style={{ lineHeight: 1.5 }}>JavaScript, Dart</p>
						<br />
						<p className="color-secondary">
							Frameworks/Libraries I use(d):
						</p>
						<p>Flutter</p>
						<p>React Native</p>
						<p>Cordova</p>
					</li>
					<li>
						<img
							src="/images/programming.svg"
							alt="Programming Icon"
							width="64"
						/>
						<p className="text-center sub-title">Programming</p>
						<p className="text-center" style={{ lineHeight: 1.5 }}>
							In mean time, apart from watching anime, I practise
							my algos at programming contests!
						</p>
						<br />
						<p className="color-secondary">Languages I use:</p>
						<p style={{ lineHeight: 1.5 }}>Python 3.x, C++</p>
						<br />
						<p className="color-secondary">My Coding profiles:</p>
						<p>codechef/keidakira</p>
						<p>codeforces/keidakira</p>
						<p>leetcode/keidakira</p>
					</li>
				</ul>
				<br />
				<br />
			</div>
			<Divider />
			<div className="container skills-section">
				<p className="text-center title">My Works</p>
				<p className="text-center code-font">
					Here are a few projects that I've worked on.
				</p>
				<br />
				<ul className="projects">
					<li>
						<Project
							imageUrl="/images/mavex.png"
							name="MaveX"
							description="Virtual event management platform for the 21st century!"
							projectUrl="https://mavex.in/"
						/>
					</li>
					<li>
						<Project
							imageUrl="/images/sentiment-analysis.jpg"
							name="Sentiment Analysis"
							description="Performs Sentiment Analysis on Hinglish sentences"
							projectUrl="https://github.com/keidakira/Sentiment-Analysis-of-Hinglish-Sentences"
						/>
					</li>
					<li>
						<Project
							imageUrl="/images/image-text-extraction.jpg"
							name="Image OCR"
							description="Recognizes text in an image and translates it to any language"
							projectUrl="https://github.com/keidakira/Img2Txt"
						/>
					</li>
				</ul>
				<br />
				<br />
			</div>
			<Divider />
			<ContactForm />
			<Footer />
		</>
	);
}
