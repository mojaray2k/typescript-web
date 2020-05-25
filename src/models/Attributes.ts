export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * @method get
   * @param key
   * @summary So the extends keyof means that K can only be either a string or number
   * not both when the property of the @param key is given to the @method get
   * @example
   * import {UserProps} from './User';
   * const attrs = new Attributes<UserProps>({
   *  id: 5,
   *  age: 20,
   *  name: 'Jane Doe
   * });
   * @example const id = attrs.get('id'); this is a number for the user id property
   * @example const name = attrs.get('name'); this is name property which is a string
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
