import React from 'react';
import {useEffect, useState} from 'react'
import ApolloClient from "apollo-boost"

import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom'
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

const Container = styled.div`
	font-family: sans-serif;
	text-align: center;
`;
function Country(props){

  const [countryId, setCountryId] = useState(props.match.params.id)
	const GET_COUNTRY_Info = gql`
	{
		country(code:"${countryId}") {
      	phone
		name
      	currency
        code
		}
	}
`
  return (
	<Container>
		<Query query={GET_COUNTRY_Info}>
			{({ loading, error, data }) => {
				if (loading) return <h1>Loading...</h1>
				if (error) return <h2>404. Looks like API is down!</h2>
				return (
					<CardWrapper>
						<CardHeader>
							<CardHeading>{data.country.name}</CardHeading>
						</CardHeader>

						<CardBody>
							<CardFieldset>
								<ReactCountryFlag 
									styleProps={{
										width: '20px',
										height: '20px'
									}}
									code={countryId.toLowerCase()}
									svg
								/>
							</CardFieldset>
							<CardFieldset>
								Currency : {data.country.currency}
							</CardFieldset>

							<CardFieldset>
								Phone Area Code : +{data.country.phone}
							</CardFieldset>
							
							<CardFieldset>
								<CardLink href={`/countries/`}>Go Countries</CardLink>
							</CardFieldset>
						</CardBody>
					</CardWrapper>
				)
			}}
		</Query>
	</Container>
  );
}
export default Country;
