import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [Todos, setTodos] = useState([]);
	return (
		// aqui creamos un div container con la lista de tareas
		<div className="container">
			<h1>Todos{inputValue}</h1>
			<ul>
				<li>
					<input
						type="text"
						// aqui insertamos un onChange que ejecuta la funcion cuando el valor cambie
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue} 
						onKeyPress={(event) => event.KeyCode == 13 ? setTodos(Todos.concat(inputValue))}
					 	placeholder="what do you need to do?"></input>
				</li>
				
				<li>
					Make the bed <i class="fas fa-trash-alt"></i>
				</li>
				<li>
					Walk the dog <i class="fas fa-trash-alt"></i>
				</li>
				<li>
					Pay taxes <i class="fas fa-trash-alt"></i>
				</li>
				<li>
					Go on vacation <i class="fas fa-trash-alt"></i>
				</li>
			</ul>
			<div>23 tasks</div>
		</div>
	);
};

export default Home;
