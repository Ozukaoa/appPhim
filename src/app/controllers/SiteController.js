const Course = require('../model/Course')

class SiteController{

    
    index(req,res,next){
        Course.find({}).lean()
        .then(Course => res.render('home',{Course}))
        .catch(next)
        // res.render('news')
        
    }


    show(req,res,next){
        Course.findOne({slug:req.params.slug}).lean()
        .then(course => {res.render('detail',{course})})
        .catch(next)
    }

    

}





module.exports = new SiteController;