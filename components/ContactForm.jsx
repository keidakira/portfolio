import TextInput from "./TextInput";
import TextArea from "./TextArea";
import FlatButton from "./FlatButton";

const ContactForm = () => {
	return (
		<div className="container skills-section">
			<p className="text-center title">Contact Form</p>
			<p
				className="text-center code-font"
				style={{ width: "60%", margin: "16px auto" }}
			>
				If you wanna contact me regarding projects or tasks or job, we
				can catch up for a cup of tea, it's on me!
			</p>
			<br />
			<form
				action
				method="POST"
				style={{ width: "60%", display: "table", margin: "0 auto" }}
			>
				<TextInput name="name" placeholder="Name" />
				<br />
				<br />
				<TextInput name="email" placeholder="Email" />
				<br />
				<br />
				<TextArea name="message" placeholder="Your message to me..." />
				<br />
				<br />
				<FlatButton text="Submit" style={{ float: "right" }} />
			</form>
		</div>
	);
};

export default ContactForm;
