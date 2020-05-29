import React from "react";

import Button from "components/Button"

import GitHubLogo from "assets/github-logo.png";

import { Container } from "./styles"

const GitHubLoginPage: React.FC = () => {

  function handleSingIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log('GitHub singIn...')
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
        <Button onClick={handleSingIn} className="sing-in-button">Sing In</Button>
      </div>
    </Container>
  )
}

export default GitHubLoginPage;