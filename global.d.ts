declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.mp4" {
  const value: any;
  export default value;
}
declare module "*.ttf" {
  const value: string;
  export default value;
}
declare module "*.woff2" {
  const value: string;
  export default value;
}
declare module "*.ico" {
  const value: string;
  export default value;
}
