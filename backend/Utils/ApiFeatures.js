        class APIFeatures{
            constructor(query,queryString){
                this.query=query;
                this.queryString=queryString;
            }
        
            filter(){
                const queryObj = {...this.queryString}
                const excludedFields =['page','sort','limit','fields']
                excludedFields.forEach(el=> delete queryObj[el])
                //2-advanced-filtring
                let queryStr = JSON.stringify(queryObj);
                queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(str)=>`$${str}`)
                this.query= this.query.find(JSON.parse(queryStr))
                return this
            }
        
            sort(){
                if(this.queryString.sort){
                    const sortBy = this.queryString.sort.split(',').join(' ') // price,avearge,name => price average name
                    this.query=this.query.sort(sortBy)
                }{
                    this.query= this.query.sort('-createdAt')
                }
                return this
            }
        
            limitFields(){
                if(this.queryString.fields){
                    const  fields= this.queryString.fields.split(',').join(' ')
                    this.query = this.query.select(fields)
                }else{
                    this.query= this.query.select('-__v')//exclude __v field created by mongoose
                }
                return this
            }
        
            paginate(){
                const page=this.queryString.page*1 || 1 //nice way to define a default param
                const limit=this.queryString.limit*1 || 100 //nice way to define a default param
                const skip =limit*(page-1)
                this.query = this.query.skip(skip).limit(limit);
                return this
            }    
            
        }
        module.exports = APIFeatures