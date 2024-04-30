const sequelize = require("sequelize")
const models = require("../models")
const imageupload = require("../middleware/helper")
const bcrypt = require("bcrypt")
const saltRound = 10

module.exports = {
    signup: async (req, res) => {
        try {

            const password = await bcrypt.hash(req.body.password, saltRound)
            if (req.files && req.files.image.name) {
                const image = req.files.image;
                if (image) req.body.image = imageupload(image, "userImage");
            }
            const data = await models.user.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                image: req.body.image
            })
            return res.json({
                success: true,
                status: 200,
                message: "created data",
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    getUser: async (req, res) => {
        try {
            const data = await models.user.findAll()
            return res.json({
                success: true,
                status: 200,
                message: "find data",
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },
    getSinleUser: async (req, res) => {
        try {
            const data = await models.user.findOne({
                _id: req.params.id
            })
            return res.json({
                success: true,
                status: 200,
                message: "find data",
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    updateUser: async (req, res) => {
        try {
            const data = await models.user.update(
             {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password:req.body.password,
                image: req.body.image
            },{
                where:{id:req.params.id}
            })
            const find_data = await models.user.findOne({
                where:{id:req.params.id}
            })

            return res.json({
                success: true,
                status: 200,
                message: "update data",
                body: find_data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

    deleteUser: async (req, res) => {
        try {
           
            const data = await models.user.destroy({
                where:{
                    id: req.params.id
                }
            })
        
            return res.json({
                success: true,
                status: 200,
                message: "delete data",
                body: data
            })
        } catch (error) {
            console.log(error, "error");
        }
    },

}