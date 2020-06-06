import React from "react";

import { MdBookmark } from "react-icons/md";

import { Container } from "./styles";

interface RepoNameProps {
  owner: string;
  name: string;
}

const RepoName: React.FC<RepoNameProps> = ({ owner, name }) => {
  return (
    <Container>
      <MdBookmark size={20} color="#4C4C4C" />
      <span>
        {owner}
        <span>{` / ${name}`}</span>
      </span>
    </Container>
  );
};

export default RepoName;
