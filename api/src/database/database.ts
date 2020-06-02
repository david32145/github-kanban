import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:root@localhost:13306/github_kanban')

export default sequelize
