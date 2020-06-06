import Card from 'database/Card'
import { Op } from 'sequelize'

class CardRepository {
  public async shiftLeft (board_id: number, fromCardOrder: number, toCardOrder: number): Promise<void> {
    await Card.increment({
      order: -1
    }, {
      where: {
        board_id,
        order: {
          [Op.gt]: fromCardOrder,
          [Op.lte]: toCardOrder
        }
      }
    })
  }

  public async shiftLeftEnd (board_id: number, fromCardOrder: number): Promise<void> {
    await Card.increment({
      order: -1
    }, {
      where: {
        board_id,
        order: {
          [Op.gt]: fromCardOrder
        }
      }
    })
  }

  public async shiftRight (board_id: number, fromCardOrder: number, toCardOrder: number): Promise<void> {
    await Card.increment({
      order: 1
    }, {
      where: {
        board_id,
        order: {
          [Op.lt]: fromCardOrder,
          [Op.gte]: toCardOrder
        }
      }
    })
  }

  public async shiftRightEnd (board_id: number, fromCardOrder: number): Promise<void> {
    await Card.increment({
      order: 1
    }, {
      where: {
        board_id,
        order: {
          [Op.gte]: fromCardOrder
        }
      }
    })
  }

  public async countCardByBoard (board_id: number): Promise<number> {
    return Card.count({
      where: {
        board_id
      }
    })
  }
}

export default new CardRepository()
