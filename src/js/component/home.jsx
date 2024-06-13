import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	// Add into array -> concat
	// Delete from array -> filter
	// Update -> map

	return (
		// aqui creamos un div container con la lista de tareas
		<div className="container">
			<h1>Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						// aqui insertamos un onChange que ejecuta la funcion cuando el valor cambie con darle click
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue}
						onKeyPress={(event) => {
							if (event.key === "Enter") {							
								 setTodos(todos.concat(inputValue));
								//  aqui colocamos el seteo del input
								 setInputValue("");
							}
						}}
						placeholder="what do you need to do?"></input>
				</li>

				{todos.map((item, index) => (
					<li>
						{item} <i class="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
			</ul>
			<div>{todos,length} tasks</div>
		</div>
	);
};

export default Home;
