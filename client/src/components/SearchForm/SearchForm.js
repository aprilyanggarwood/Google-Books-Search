import React from "react";

import { Button, Form } from "reactstrap";

import "./style.css";

function SearchForm(props) {
  return (
    <div className="form-group">
      <Form>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          placeholder="e.g.English book"
        />
        <Button
          type="button"
          className="btn btn-primary"
          onClick={props.handleFormSubmit}
        >
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
