interface SeedData {
	entries: SeedEntry[];
}

interface SeedEntry {
	description: string;
	status: string;
	createdAt: number;
}

export const seedData: SeedData = {
	entries: [
		{
			description: "Pending: This is a fake description",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			description: "In-progress: This is a fake description 2",
			status: "in-progress",
			createdAt: Date.now() - 1000000,
		},
		{
			description: "Finished: This is a fake description 3",
			status: "finished",
			createdAt: Date.now() - 100000,
		},
	],
};
