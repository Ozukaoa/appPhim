
const Course = require('../model/Course')

class NewController{

    
    index(req,res,next){
     Course.find({})
        // .then(Course => res.render('news',{Course}))
        .then(Course => res.json(Course))
        .catch(next)
        // res.render('news')
        
    }

    search(req,res,next){
        Course.find({"name":{ $regex:req.params.name}}).lean()

           // .then(Course => res.render('news',{Course}))
           .then(Course => res.json(Course))
           .catch(next)
           // res.render('news')
           
       }
    

    // show(req,res,next){
        // Course.findOne({slug:req.params.slug}).lean()
    //     .then(course => {res.render('detail',{course})})
    //     .catch(next)
    // }

    create(req,res,next){
    //   res.render('create')
    // const course = req.body;
    const course = new Course(req.body)
    course.save()
    
    res.json("Add successfully")
    
    }

    getSingle(req,res,next){
       
        // const cor = Course.findOne({slug:req.params.slug}).lean()
        // res.json(cor)
        Course.findOne({slug:req.params.slug}).lean()
        .then(course=> res.json(course))
        .catch(next)
        }

    getSingleId(req,res,next){
       
            // const cor = Course.findOne({slug:req.params.slug}).lean()
            // res.json(cor)
            Course.findById(req.params.id).lean()
            .then(course=> res.json(course))
            .catch(next)
            }

    delete(req,res,next){
       

            Course.deleteOne( {_id:req.params.id})
            .then(()=> res.json("delete"))
            .catch(next)
            }    

    

    // delete(req,res,next){
       
    //     course = Course.filter((course)=> course._id !== req.params._id)
    //     res.send("delete")
        
    //     }
    

    // edit(req,res,next){
    //     res.render('edit')
    //  }

    // edit(req,res,next){
    //     Course.findById(req.params.id).lean()
    //     .then(course => {res.render('edit',{course})})
    //     .catch(next)
    // }

    update(req,res,next){
        // console.log(req.query)
         Course.updateOne( {_id:req.params.id},req.body)
         
        //  .then(()=> res.redirect('/news'))
         .then(()=> res.json("dsds"))
         .catch(next)
    }

    // delete(req,res,next){
    //     Course.deleteOne( {_id:req.params.id})
    //     .then(()=> res.redirect('back'))
    //     .catch(next)
        
    // }

//     store(req,res,next){
//         // console.log(req.query)
//         // res.json(req.body)

//         const course = new Course(req.body)
//         course.save()
//         res.send('success')
// }




}


module.exports = new NewController;