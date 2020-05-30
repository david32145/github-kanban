import React from "react";

import RepositoryList from "components/RepositoryList";

import { Container } from "./styles";

const RepoListPage: React.FC = () => {
  return (
    <Container>
      <div className="repo-box">
        <h2>Active Repositories</h2>
        <RepositoryList />
      </div>
    </Container>
  );
};

export default RepoListPage;
