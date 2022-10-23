import React, { createContext } from "react";
import "./styles.css";

const AppContext = createContext(null);
const contextValue = {
	ingredients: ["flour", "sugar", "eggs"],
	temperature: "200",
};

// here we have the three ways to subscribe to a React Context
export default function App() {
	const additional = {
		suggestions: ["Stir the dough until thoroughly mixed."],
	};

	return React.createElement(
		AppContext.Provider,
		{ value: contextValue },
		React.createElement(AppContext.Consumer, null, context =>
			React.createElement(
				DisplayComponent,
				Object.assign({}, context, additional),
			),
		),
	);
}

const DisplayComponent = props => {
	return (
		<>
			<section>
				<h2>Ingredients</h2>
				<ul>
					{props.ingredients.map(ingredient => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Suggestions</h2>
				<ul>
					{props.suggestions.map(suggestion => (
						<li key={suggestion}>{suggestion}</li>
					))}
				</ul>
			</section>
			<section>
				<h2>Temperature</h2>
				<div>Heat the oven to {props.temperature} degrees.</div>
			</section>
		</>
	);
};
