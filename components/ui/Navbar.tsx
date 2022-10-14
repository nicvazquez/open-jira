import { useContext } from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
	const { openSideMenu } = useContext(UIContext);
	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar>
				<IconButton onClick={openSideMenu} size="large" edge="start">
					<MenuIcon />
				</IconButton>

				<NextLink href="/" passHref>
					<Link underline="none" color="white">
						<Typography variant="h6">OpenJira</Typography>
					</Link>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};
