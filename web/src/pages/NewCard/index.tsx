import React from "react";

import { MdBookmark } from "react-icons/md";

import InputText from "components/InputText";
import Button from "components/Button";

import { Container, RepoTitle, FormContainer } from "./styles";

const NewCardPage: React.FC = () => {
  return (
    <Container>
      <RepoTitle>
        <MdBookmark size={40} color="#4C4C4C" />
        <span>
          facebook
          <span> / react-native</span>
        </span>
      </RepoTitle>
      <FormContainer>
        <h2>Add new card</h2>
        <InputText label="Title" />
        <InputText label="Description" />
        <InputText label="GitHub Description" />

        <Button className="add-button">Add</Button>
      </FormContainer>
    </Container>
  );
};

export default NewCardPage;
