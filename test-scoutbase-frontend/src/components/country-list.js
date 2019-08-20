import React from 'react';
import ReactCountryFlag from "react-country-flag";
import { Query } from "react-apollo"
import { gql } from "apollo-boost"
import styled from "styled-components"
import {
	CardWrapper,
	CardHeader,
	CardHeading,
	CardBody,
	CardFieldset,
	CardLink
  } from "../styled-components/Card";

const GET_ALL_COUNTRIES = gql`
	{
		countries {
			continent{
				code
				name
			}
			name
			code
			emoji
			languages {
				code
				name
				native
			}
		}
	}
`
const Container = styled.div`
	font-family: sans-serif;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
`;

const CountryList = match =>{
  return (
	  <Container>
		<Query query={GET_ALL_COUNTRIES}>
			{({ loading, error, data }) => {
				if (loading) return <h1>Loading...</h1>
				if (error) return <h2>404. Looks like API is down!</h2>

				return data.countries.map(({ name, code, languages, continent, phone, emoji }) => (
					<div key={code}>
						<CardWrapper>
							<CardHeader>
								<CardHeading>{name}</CardHeading>
							</CardHeader>

							<CardBody>
								<CardFieldset>
									<ReactCountryFlag 
										styleProps={{
											width: '20px',
											height: '20px'
										}}
										code={code.toLowerCase()}
										svg
									/>
								</CardFieldset>
								<CardFieldset>
									Continent : {continent.name}
								</CardFieldset>
								{languages.map((item, id) => (
									<CardFieldset key={id}>
										<CardFieldset>
											Language In English : {item.name}
										</CardFieldset>
										<CardFieldset>
											Language In Native : {item.native}
										</CardFieldset>
									</CardFieldset>
								))}
								<CardFieldset>
									<CardLink href={`/countries/${code}`}>See Details</CardLink>
								</CardFieldset>
							</CardBody>
						</CardWrapper>
					</div>				
				))
			}}
		</Query>
	</Container>
  );
}
export default CountryList;