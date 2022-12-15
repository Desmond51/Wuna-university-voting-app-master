import React from "react";
import { Modal, Header, Image, Button } from "semantic-ui-react";

const ModalComp = ({
	open,
	setOpen,
	img,
	name,
	info,
	program,
	age,
	id,
	handleDelete,
}) => {
	return (
		<div className="align-items-center justify-content-center">
			<Modal
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
			>
				<Modal.Header>User Details</Modal.Header>
				<Modal.Content image>
					<Image size="medium" src={img} wrapped />
					<Modal.Description>
						<Header>{name}</Header>
						<p>{program}</p>
						<p>{info}</p>
						<p>{age}</p>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button className="w-25" color="black" onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button
						className="w-25 "
						color="red"
						content="Delete"
						labelPosition="right"
						icon="checkmark"
						onClick={() => handleDelete(id)}
					/>
				</Modal.Actions>
			</Modal>
		</div>
	);
};

export default ModalComp;
