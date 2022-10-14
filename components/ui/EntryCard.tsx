import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { useRouter } from "next/router";
import { dateFunctions } from "../../utils";

interface Props {
	entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
	const { startDragging, endDragging } = useContext(UIContext);
	const router = useRouter();

	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData("text", entry._id);

		startDragging();
	};

	const onDragEnd = () => {
		endDragging();
	};

	const onClick = () => {
		router.push(`/entries/${entry._id}`);
	};
	return (
		<Card
			onClick={onClick}
			sx={{ marginBottom: 1 }}
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
				</CardContent>

				<CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
					<Typography variant="body2">
						{dateFunctions.getFormatDistanceToNow(entry.createdAt)} ago
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
