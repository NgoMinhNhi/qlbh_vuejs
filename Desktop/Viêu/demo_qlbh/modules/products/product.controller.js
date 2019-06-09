module.exports = {
    getListProducts: (req, res, next) => {
        Product.find()
        .exec()
        .then(docs => {
            const response = {
                count : docs.length,
                listBlog : docs.map(doc => {
                    return {
                        product: doc
                    }
                }),
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        });
    }
}