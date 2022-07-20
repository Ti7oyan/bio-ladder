/** A brief introduction */
export default interface IProfile {
  firstName: string;
  lastName: string;

  /**
   * Path to picture, external or internal.
   * @example "https://example.com/image.jpg" or "/images/profile.jpg"
   */
  picture: string;

  /** Your current role, e.g.: Full-stack developer. */
  role: string;

  /** A short description of yourself. */
  description: string;
}