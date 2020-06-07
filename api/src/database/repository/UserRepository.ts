import User from 'database/models/User'

class CardRepository {
  public async findOrCreateByUsername (login: string, bio: string, access_token: string): Promise<[User, boolean]> {
    const [user, created] = await User.findOrCreate({
      where: {
        username: login
      },
      defaults: {
        username: login,
        description: bio,
        access_token: access_token
      }
    })

    if (!created) {
      user.access_token = access_token
      user.username = login
      user.description = bio
    }

    return [user, created]
  }
}

export default new CardRepository()
