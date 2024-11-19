import PropTypes from "prop-types";

FormPage.propTypes = {
	p: PropTypes.string.isRequired,
};

export default function FormPage({p}) {
	return (
		<div>
			Form
		</div>
	);
}
