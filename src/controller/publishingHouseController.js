import publishingHouse from "../models/PublishingHouse.js";

class publishingHouseController {
    static get = async (req, res) => {
        const publishingHouses = await publishingHouse.find();
        return res.json(publishingHouses);
    };
    static create = async (req,res)=>{
        const {name, origin} = req.body;
            const author = await publishingHouse.create({
                name,
                origin
            });
            if(!author){
                console.log('error');
            }
            return res.status(201).json(author)
    }
    static find = async (req,res) =>{
        const {id} =req.params;
        const author = await publishingHouse.findOne(id);
        if(!author){
            console.log('error');
        }
        return res.json(author)
    }
    static update = async (req, res) =>{
        const {name, origin} = req.body;
        const {id} =req.params;
        const publishingHouse = await publishingHouse.findOneAndUpdate(id,{
            name,
            origin
        }, {new:true});
        if(!publishingHouse){
            console.log('error');
        }
        return res.json(publishingHouse)
    }

    static delete = async (req, res) =>{
       try {
         const {id} =req.params;
         await publishingHouse.findOneAndRemove(id);
         return res.status(204).json([])
       } catch (error) {
            res.status(400).json({message:'Erro ao deletar Editora'})
       }
    }
}

export default publishingHouseController;