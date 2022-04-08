import React, {useState} from "react"
import Header from "./Header"
import "./Main.css"
import UsersList from "./UsersList"

const Main = () =>{

	//declarando state, que irá receber os dados da api
	const [state, setState] = useState([])
	//declarando selectedUser, que irá receber o nome do usuário selecionado
	const [selectedUser, setSelectedUser] = useState('')
	//realizando requisição da api de forma assíncrona
	async function requestAPI(){
		const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
		const response = await fetch(api)

		const body = await response.json()

		setState(body)
	}
	
	requestAPI()
		return(
			<div>
				{/*Imprimindo header*/}
				<Header/>
			{/*Imprimindo lista de usuários*/}
				<UsersList list= {state} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
			</div>
			)
}
export default Main