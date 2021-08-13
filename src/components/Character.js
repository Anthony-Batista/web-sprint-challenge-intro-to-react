// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacters = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1%;
	border: 0.3rem solid gray
	margin: 1rem 10%;
	color: white;
	font-family: 'Cinzel', serif;
`
const StyledBirth = styled.div`
	color: #301934;
	background-color: rgba(50, 50, 50, 0.5);
	width: 4rem;
	padding: 1rem;
	border-radius: 1rem 2rem;
`

export default function Character(props) {
	const { starwars } = props

	return (
		<StyledCharacters>
			<h2>{starwars.name}</h2>
			<StyledBirth> {starwars.birth_year} </StyledBirth>
		</StyledCharacters>
	)
}
