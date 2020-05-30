import React from "react";

import RepoName from "components/RepoName";
import ProgressTask from "components/ProgressTask";

import { Container } from "./styles";

const RepositoryList: React.FC = () => {
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
        {[1, 2, 3, 4, 5].map((v) => (
          <tr key={v}>
            <td className="td-name">
              <RepoName />
            </td>
            <td className="td-description">
              <span className="repo-description">
                A framework for building native apps with React.
              </span>
            </td>
            <td className="td-tasks">
              <ProgressTask />
            </td>
            <td className="td-action">
              <div className="actions">
                <a href="htttps://www.google.com.br">OPEN</a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default RepositoryList;
