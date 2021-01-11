import TextInput from "./TextInput";

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
			</form>
		</div>
	);
};

export default ContactForm;
