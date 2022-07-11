import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Restaurante } from "./restaurant";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Restaurante />
	);
};
