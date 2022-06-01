import React from "react";
import { useMutation, graphql, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import './GettingGraphQLData.css';
import { useState } from "react";

const GET_USER_INFO = gql`
    {
        people{
            id
            firstName
            lastName
        }
    }
`;

const CREAT_LINK_MUTATION = gql`
    mutation Create(
        $firstName: String!
        $lastName: String!
        ){
        people(firstName: $firstName, lastName: $lastName){
            id,
            firstName,
            lastName
        }
    }
`;

const GettingGraphQLData = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const { data, loading, error, refetch } = useQuery(GET_USER_INFO);

    const [createLink] = useMutation(CREAT_LINK_MUTATION, {
        variables: {
            firstName: firstName,
            lastName: lastName
        }
    });

    if(loading) return "Loading...";

    return (
        <>
            <div className="list-type5">
                <h3>Graph List</h3><br />
                <ol>
                    {data.people.map(p => (
                        <li key={p.id}><a href="http://google.com.br">{p.firstName} {p.lastName}</a></li>
                    ))}
                </ol>
            </div>
            <div className="list-type5">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createLink();
                    refetch();
                    setFirstName('');
                    setLastName('');
                }}>
                    <input name="firstName" value={firstName} onChange={(e) => {
                        setFirstName(e.target.value);
                    }} type="text" />
                    <input name="lastName" value={lastName} onChange={(e) => {
                        setLastName(e.target.value);
                    }} type="text" />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default graphql(GET_USER_INFO)(GettingGraphQLData);