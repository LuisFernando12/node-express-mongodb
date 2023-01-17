import Authors from "../models/Author.js";

class AuthorController {
    static get = async (req, res) => {
        const authors = await Authors.find();
        return res.json(authors);
    };
    static create = async (req,res)=>{
        const {name, nationality} = req.body;
            const author = await Authors.create({
                name,
                nationality
            });
            if(!author){
                console.log('error');
            }
            return res.status(201).json(author)
    }
    static find = async (req,res) =>{
        const {id} =req.params;
        const author = await Authors.findOne(id);
        if(!author){
            console.log('error');
        }
        return res.json(author)
    }
    static update = async (req, res) =>{
        const {name, nationality} = req.body;
        const {id} =req.params;
        const author = await Authors.findOneAndUpdate(id,{
            name,
            nationality
        }, {new:true});
        if(!author){
            console.log('error');
        }
        return res.json(author)
    }

    static delete = async (req, res) =>{
       try {
         const {id} =req.params;
         await Authors.findOneAndRemove(id);
         return res.status(204).json([])
       } catch (error) {
            res.status(400).json({message:'Erro ao deletar Autor'})
       }
    }
}

export default AuthorController;