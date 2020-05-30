import React from "react";

import { MdBookmark } from "react-icons/md";

import { Container } from "./styles";

const RepoName: React.FC = () => {
  return (
    <Container>
      <MdBookmark size={20} color="#4C4C4C" />
      <span>
        facebook
        <span> / react-native</span>
      </span>
    </Container>
  );
};

export default RepoName;
