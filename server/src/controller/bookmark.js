const { bookmark,journey } = require("../../models");

exports.addBookmark = async (req, res ) => {
    try{

        const result = await bookmark.create({
            idJourney: req.body.idJourney,
            idUser: req.user.id 
        })
        // console.log(req.body)
        // console.log(req.user);

        res.status(200).send({
            message: "success",
            result
        })

    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "error server",
            err
        })
    }
}

exports.getBookmark = async (req, res ) => {
    try{

        const result = await bookmark.findAll({
            where: {
                idUser: req.user.id
            },
            include:[
                {
                    model: journey,
                    as: "journey",
                    
                }
            ],
            attributes: {
                exclude: ['createdAt','updatedAt']
            },
        })

        res.status(200).send({
            message: "success",
            result
        })

    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "error server",
            err
        })
    }
}

exports.deleteBookmark = async (req, res ) => {
    try{

        const result = await bookmark.destroy({
            where: {
                id: req.params.id
            },
        })

        res.status(200).send({
            message: "success",
            result
        })

    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "error server",
            err
        })
    }
}