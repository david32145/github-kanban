import styled from "styled-components";

export const Container = styled.table`
  display: block;
  width: 100%;
  thead,
  tbody,
  tr {
    display: block;
  }

  thead tr {
    margin-bottom: 15px;
  }

  thead td {
    display: inline-block;

    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;

    color: #777777;
  }

  tbody td {
    display: inline-block;
    height: 100%;
  }

  tbody tr {
    background-color: #f6fcfe;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    transition: 0.2s;
  }

  .td-name {
    width: 25%;
  }

  .td-description {
    width: 40%;
  }

  .td-tasks {
    width: 20%;
  }

  .td-action {
    width: 15%;
    text-align: center;
  }

  .repo-description {
    height: 100%;
    display: flex;
    align-items: center;

    font-family: Roboto;
    font-weight: 300;
    font-size: 15px;

    color: #333333;
  }

  .actions {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      text-decoration: none;
      color: #0077b6;
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      padding: 9px;

      background: rgba(77, 77, 77, 0.05);
      border-radius: 4px;
    }
  }

  tbody tr:hover {
    cursor: pointer;
    z-index: 5;
    transform: scale(1.01);
    box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px -2px 2px rgba(0, 0, 0, 0.1), -2px 0px 2px rgba(0, 0, 0, 0.1);
  }
`;
