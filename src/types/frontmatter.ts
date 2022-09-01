export default interface Frontmatter {
  /** Name of the unit, to be displayed as the page's title and uppercased as an "h1" tag. */
  title: string;

  /** Unit's internal path */
  path: string;

  /** Unit's email, to be used in Contact component. */
  email: string;
}