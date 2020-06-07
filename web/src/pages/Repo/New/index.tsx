import React, { useState } from "react";

import InputText from "components/InputText";

import Button from "components/Button";
import LoginService from "services/LoginService";
import APIRestService from "services/APIRestService";
import { history } from "historyFactory";
import { Container } from "./styles";

const RepoNewPage: React.FC = () => {
  const [repo, setRepo] = useState("");
  async function handlerAddRepo() {
    const user = LoginService.getUser();
    try {
      await APIRestService.post("/repositories", {
        repo_owner: user.username,
        repo_name: repo,
      });
      history.push("/repos");
    } catch (err) {
      alert("Repository not found");
    }
  }
  return (
    <Container>
      <div className="box-new-repo">
        <InputText
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          label="Repository"
        />
        <Button onClick={handlerAddRepo} className="add-repo">
          add
        </Button>
      </div>
    </Container>
  );
};

export default RepoNewPage;
