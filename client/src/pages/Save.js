import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
// import { Input, SubmitBtn } from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/SavedBooksCard/SavedBooksCard";

function SavePage() {
  // const [];

  return (
    <div>
      <Nav />
      <Container fluid>
        <Jumbotron />

        <SavedBooksCard></SavedBooksCard>

        <h5>No results to display</h5>
      </Container>
    </div>
  );
}

export default SavePage;
