import React from "react";
import { Link } from "react-router-dom";

import RepoName from "components/RepoName";
import ProgressTask from "components/ProgressTask";

import { Repository } from "models";

import { Container } from "./styles";

interface RepositoryProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryProps> = ({ repositories }) => {
  return (
    <Container>
      <thead>
        <tr>
          <td className="td-name">Name</td>
          <td className="td-description">Description</td>
          <td className="td-tasks">Tasks</td>
          <td className="td-action">Action</td>
        </tr>
      </thead>
      <tbody>
        {repositories.map((repository) => (
          <tr key={repository.repository_id}>
            <td className="td-name">
              <RepoName owner={repository.owner} name={repository.name} />
            </td>
            <td className="td-description">
              <span className="repo-description">{repository.description}</span>
            </td>
            <td className="td-tasks">
              <ProgressTask
                completed_cards={repository.completed_cards}
                total_cards={repository.total_cards}
              />
            </td>
            <td className="td-action">
              <div className="actions">
                <Link to={`${repository.repository_id}/boards`}>OPEN</Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default RepositoryList;
