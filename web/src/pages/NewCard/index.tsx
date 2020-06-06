import React, { useState } from "react";

import { MdBookmark } from "react-icons/md";

import InputText from "components/InputText";
import Button from "components/Button";

import APIRestService from "services/APIRestService";
import { useParams } from "react-router-dom";
import { history } from "historyFactory";
import { Container, RepoTitle, FormContainer } from "./styles";

interface RouteParam {
  repository_id: string;
}
const NewCardPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gitHubDescription, setGithubDescription] = useState("");
  const params = useParams<RouteParam>();
  async function handlerSubmitNewCard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await APIRestService.post(`/repositories/${params.repository_id}/card`, {
      title,
      description,
      github_description: gitHubDescription,
    });
    history.push(`/repository/${params.repository_id}/boards`);
  }

  return (
    <Container>
      <RepoTitle>
        <MdBookmark size={40} color="#4C4C4C" />
        <span>
          facebook
          <span> / react-native</span>
        </span>
      </RepoTitle>
      <FormContainer onSubmit={handlerSubmitNewCard}>
        <h2>Add new card</h2>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          placeholder="My title"
        />
        <InputText
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          placeholder="My description"
        />
        <InputText
          value={gitHubDescription}
          onChange={(e) => setGithubDescription(e.target.value)}
          label="GitHub Description"
          placeholder="My github description"
        />

        <Button className="add-button">Add</Button>
      </FormContainer>
    </Container>
  );
};

export default NewCardPage;
