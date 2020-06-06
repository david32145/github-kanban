import React, { useState } from "react";

import { useDispatch } from "react-redux";

import Button from "components/Button";
import InputText from "components/InputText";

import GitHubLogo from "assets/github-logo.png";

import { AuthService } from "store/modules/auth";
import { Container } from "./styles";

const GitHubLoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  function handleSingIn(): void {
    dispatch(AuthService.singIn(username));
  }

  return (
    <Container>
      <div className="login-box">
        <div className="github-box">
          <img src={GitHubLogo} alt="GitHub Logo" />
          <div className="helper-text">
            <h2>GitHub Login</h2>
            <h5>You must be logged.</h5>
          </div>
        </div>
        <InputText
          containerClassName="input-wrapper"
          label="GitHub"
          placeholder="your github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={handleSingIn} className="sing-in-button">
          Sing In
        </Button>
      </div>
    </Container>
  );
};

export default GitHubLoginPage;
