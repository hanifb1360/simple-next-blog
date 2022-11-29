import { articles } from '../../../data'

export default function handler ({query: { id }, res}) {
  console.log(articles);
  const filtered = articles.find(article => article.id === id)
  console.log(filtered);
  if (filtered) {
    res.status(200).json(filtered)
  } else {
    res.status(404)
    .json({message:`Article with the id of ${id} is not found`})
  }
}