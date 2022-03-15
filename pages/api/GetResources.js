import { Resources } from "../../data/Books";

export default function getResourcesApi(req, res) {
  res.status(200).json(Resources);
}
