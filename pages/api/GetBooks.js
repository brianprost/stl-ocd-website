import { Books } from "../../data/Books";

export default function getBooksapi(req, res) {
  res.status(200).json(Books);
}
