import Commerce from "@chec/commerce.js";
// import { TrendingUpOutlined } from "@material-ui/icons";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
