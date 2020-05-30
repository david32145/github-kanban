import React from "react";

import InputText from "components/InputText";

import Button from "components/Button";
import { Container } from "./styles";

const RepoNewPage: React.FC = () => {
  return (
    <Container>
      <div className="box-new-repo">
        <InputText label="Repository" />
        <Button className="add-repo">add</Button>
      </div>
    </Container>
  );
};

export default RepoNewPage;
