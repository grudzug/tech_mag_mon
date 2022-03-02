/* this function saves data to db */

async function saveData(data, prisma) {
	await data.articles.map( async (article) => {    /* create article records in database */
		try {
			await prisma.article.create({
				data: {
					source: article.source.name ?? "no-data",
					author: article.author ?? "no-data",          
					title: article.title ?? "no-data",           
					description: article.description ?? "no-data",    
					url: article.url ?? "no-data",             
					urlToImage: article.urlToImage ?? "no-data",      
					publishedAt: new Date(article.publishedAt) ?? new Date(),     
					content: article.content ?? "no-data",         
				}
			})
		} catch (error) {
			if (error.code === 'P2002')
			console.log("unique constraint violation", error.code, error.meta)
		}
	})
	return "new articles saved to db"
}
module.exports = saveData