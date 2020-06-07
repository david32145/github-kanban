# GitHub Kanban API

## Models

### Repository

- id (id of repository in github);
- name (name of repository in github, for example `react-native`);
- owner (owner of repository in github, for example `facebook`);
- description (description of repository in github).

### User

- id (id of user on github);
- name (name of user on github);
- description (description if an user on github);
- access_token (access_token of user on github);

### Board

- type (board type: `TODO`, `DOING`, `REVIEW`, `CLOSED`);
- repository_id (references for an repo);
- color (color of cards of this board).

### Card

- issue_id (the issue_id of github which card is related);
- issue_url (the url for an issue)
- title (Title of card);
- description (description of card);
- number (number of an issue)
- order (order of card in list);
- board_id (references for an board);
- created_at (date of create);
- update_at (date of last of update);
- closed_at (date of close).

## Resouces

### Receive Credentials of github

```http
POST /login
```

### Add new repo

```http
POST /repositories
```

### Add new card

```http
POST /cards
```

### move an card

```http
POST /cards/:card_id/move
```

### close an card

```http
POST /cards/:card_id/close
```