        class APIFeatures{
            constructor(query,queryString){
                this.query=query;
                this.queryString=queryString;
            }
            sort(){
                if(this.queryString.sort ){

                    const sortBy = this.queryString.sort
                    if(this.queryString.decreasing) this.query=this.query.sort("-"+sortBy)
                    else this.query=this.query.sort(sortBy)
                }
               
                return this
            }
            filter(){
                const queryObj = {...this.queryString}

                let queryStr = JSON.stringify(queryObj);
                queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(str)=>`$${str}`)
                this.query= this.query.find(JSON.parse(queryStr))
                return this
            }
            paginate(){
                const page=this.queryString.page*1 || 1
                const limit=this.queryString.limit*1 || 10 
                const skip =limit*(page-1)
                this.query = this.query.skip(skip).limit(limit);
                return this
            }    
      
            
        }
        module.exports = APIFeatures