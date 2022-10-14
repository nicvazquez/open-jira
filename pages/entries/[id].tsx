import { ChangeEvent, useMemo, useState } from "react";
import SaveOutlined from "@mui/icons-material/SaveOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import {
	capitalize,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	IconButton,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

export const EntryPage = () => {
	const [inputValue, setInputValue] = useState("");
	const [status, setStatus] = useState<EntryStatus>("pending");
	const [touched, setTouched] = useState(false);

	const isNotValid = useMemo(
		() => inputValue.length <= 0 && touched,
		[inputValue, touched]
	);

	const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as EntryStatus);
	};

	const onSave = () => {};

	return (
		<Layout title="...">
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader
							title={`Entry: ${inputValue}`}
							subheader={`Created ... minutes ago`}
						/>

						<CardContent>
							<TextField
								sx={{ marginTop: 2, marginBottom: 1 }}
								fullWidth
								placeholder="New entry"
								autoFocus
								multiline
								label="New entry"
								value={inputValue}
								onBlur={() => setTouched(true)}
								onChange={onInputValueChange}
								helperText={isNotValid && "Enter a value"}
								error={isNotValid}
							/>

							<FormControl>
								<FormLabel>Status:</FormLabel>
								<RadioGroup row value={status} onChange={onStatusChanged}>
									{validStatus.map((option) => (
										<FormControlLabel
											key={option}
											value={option}
											control={<Radio />}
											label={capitalize(option)}
										/>
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>

						<CardActions>
							<Button
								startIcon={<SaveOutlined />}
								variant="contained"
								fullWidth
								onClick={onSave}
								disabled={inputValue.length <= 0}
							>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<IconButton
				sx={{
					position: "fixed",
					bottom: 30,
					right: 30,
					backgroundColor: "error.dark",
				}}
			>
				<DeleteOutlined />
			</IconButton>
		</Layout>
	);
};

export default EntryPage;
