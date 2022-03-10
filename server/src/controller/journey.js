const { journey,user } = require("../../models");

exports.addJourney = async (req, res ) => {
    try{

        const result = await journey.create({
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename,
            idUser: req.user.id 
        })
        // console.log(req.file)
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


exports.getAllJourney = async (req, res ) => {
    try{

        const result = await journey.findAll({
            include:[
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ['updatedAt',"password","email","phone"]
                    },
                }
            ]
        })
        // console.log(req.file)
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

exports.getUserJourney = async (req, res ) => {
    try{

        const result = await journey.findAll({
            where: {
                idUser: req.user.id
            }
        })
        // console.log(req.file)
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

exports.getDetailJourney = async (req, res ) => {
    try{

        const result = await journey.findOne({
            where: {
                id: req.params.id
            },
            include:[
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ['createdAt','updatedAt',"password"]
                    },
                }
            ]
        })
        // console.log(req.file)
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