import { ChangeEvent, useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries/EntriesContext";

export const NewEntry = () => {
	const { addNewEntry } = useContext(EntriesContext);

	const [isAdding, setIsAdding] = useState(false);

	const [inputValue, setInputValue] = useState("");
	const [touched, setTouched] = useState(false);

	const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;

		addNewEntry(inputValue);

		setIsAdding(false);
		setTouched(false);

		setInputValue("");
	};

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						autoFocus
						multiline
						label="New entry"
						placeholder="New entry"
						helperText={inputValue.length <= 0 && touched && "Enter a value"}
						error={inputValue.length <= 0 && touched}
						value={inputValue}
						onChange={onTextFieldChanges}
						onBlur={() => setTouched(true)}
					/>

					<Box display="flex" justifyContent="space-between">
						<Button onClick={() => setIsAdding(false)} variant="text">
							Cancel
						</Button>
						<Button
							onClick={onSave}
							variant="outlined"
							color="secondary"
							endIcon={<SaveOutlinedIcon />}
						>
							Save
						</Button>
					</Box>
				</>
			) : (
				<Button
					onClick={() => setIsAdding(true)}
					startIcon={<AddIcon />}
					fullWidth
					variant="outlined"
				>
					Add task
				</Button>
			)}
		</Box>
	);
};
