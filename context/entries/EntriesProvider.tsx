import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: "This is a fake description",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: "This is a fake description 2",
			status: "in-progress",
			createdAt: Date.now() - 1000000,
		},
		{
			_id: uuidv4(),
			description: "This is a fake description 3",
			status: "finished",
			createdAt: Date.now() - 100000,
		},
	],
};

interface Props {
	children: JSX.Element;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider value={{ ...state }}>
			{children}
		</EntriesContext.Provider>
	);
};
