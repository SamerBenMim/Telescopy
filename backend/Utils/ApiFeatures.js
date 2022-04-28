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
        
 
        
      
            
        }
        module.exports = APIFeatures