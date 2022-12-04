// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  // why the heck would anyone request an API endpoint on this site?
  // whatever, give them our name
  res.status(200).json({ name: "St. Louis OCD Report Webpage" });
}
