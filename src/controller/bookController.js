import Books from "../models/Book.js";

class BookController {
    static get = async (req, res) => {
        const books = await Books.find().populate('author').populate('publishingHouse');
        return res.json(books);
    };
    static create = async (req,res)=>{
        const {title, author, publishingHouse, pageNumber} = req.body;
            const book = await Books.create({
                title,
                author,
                publishingHouse,
                pageNumber
            });
            if(!book){
                console.log('error');
            }
            return res.status(201).json(book)
    }
    static find = async (req,res) =>{
        const {id} =req.params;
        const book = await Books.findById(id).populate('author', 'name');
        if(!book){
            console.log('error');
        }
        return res.json(book)
    }
    static update = async (req, res) =>{
        const {title, author, publishingHouse, pageNumber} = req.body;
        const {id} =req.params;
        const book = await Books.findOneAndUpdate(id,{
            title,
            author,
            publishingHouse,
            pageNumber
        }, {new:true});
        if(!book){
            console.log('error');
        }
        return res.json(book)
    }

    static delete = async (req, res) =>{
       try {
         const {id} =req.params;
         await Books.findOneAndRemove(id);
         return res.status(204).json([])
       } catch (error) {
            res.status(400).json({message:'Erro ao deletar livro'})
       }
    }
}

export default BookController;