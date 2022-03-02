/* this fuction returns the requested articles */

async function news(req, prisma) {

  /* finding newer (fresher) articles than client already has (first article) */
  const freshArticles = await prisma.article.findMany({
    where: {
      publishedAt: {
        gt:  new Date(req.query.first)
      },
    },
  })

  /* finding the requested number of older articles than client already has (last article) */
  const oldArticles = await prisma.article.findMany({
    where: {
      publishedAt: {
        lt:  new Date(req.query.last)
      },
    },
    orderBy: {
      publishedAt: 'desc'
    },
    take: parseInt(req.query.per_page),
  })

	return { oldArticles, freshArticles }
}
module.exports = news