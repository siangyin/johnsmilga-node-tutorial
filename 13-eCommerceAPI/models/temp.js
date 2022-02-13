/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
	{
		$match: {
			product: new ObjectId("62092409d83854e8dd24ebc0"),
		},
	},
	{
		$group: {
			_id: "$product",
			averageRating: {
				$avg: "$rating",
			},
			numberOfReviews: {
				$sum: 1,
			},
		},
	},
];

MongoClient.connect(
	"MONGO_URL",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	function (connectErr, client) {
		assert.equal(null, connectErr);
		const coll = client.db("08-eCommerce-API").collection("reviews");
		coll.aggregate(agg, (cmdErr, result) => {
			assert.equal(null, cmdErr);
		});
		client.close();
	}
);
