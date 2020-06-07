export default class ApiError extends Error {
  private _message: string
  private _error: string
  protected _code: number
  public constructor (error: string, message: string, code: number) {
    super(message)
    this._error = error
    this._message = message
    this._code = code
  }

  public get message () {
    return this._message
  }

  public get error () {
    return this._error
  }

  public get code () {
    return this._code
  }

  public toJSON () {
    return { message: this._message, error: this._error, code: this._code }
  }
}
