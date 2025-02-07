// Поддержка SCSS модулей
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Поддержка импорта изображений
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
