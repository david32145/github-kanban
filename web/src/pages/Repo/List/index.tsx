import React, { useEffect, useState } from "react";

import RepositoryList from "components/RepositoryList";
import { Repository } from "models";
import APIRestService from "services/APIRestService";
import { Container } from "./styles";

const RepoListPage: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function loadRepositories() {
    const response = await APIRestService.get<Repository[]>("/repositories");
    setRepositories(response.data);
  }

  useEffect(() => {
    loadRepositories().then();
  }, []);

  return (
    <Container>
      <div className="repo-box">
        <h2>Active Repositories</h2>
        <RepositoryList repositories={repositories} />
      </div>
    </Container>
  );
};

export default RepoListPage;
