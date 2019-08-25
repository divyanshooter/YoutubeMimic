export default class search{
    constructor(query)
    {
        this.query=query;
        this.getData;
    }
     getData()
     {
         return new Promise((resolve,reject)=>{
        const data=['Video 1 ','Video 2','Video 3','Video 4','Video 5'];
        for(var i=0;i<Math.round(Math.random()*10+1);i++)
        {
          data.push(`Video ${i+6}`);
        }
        setTimeout((data)=>{
         const Data=data.map((curr)=>`${curr} includes the ${this.query}`);
         resolve(Data);
        },1500,data);
    })
   }
   async getResult(query)
    {
    try
    {
      this.result=await this.getData();
      return this.result;
    }
      catch(err)
      {
          console.log(err);
      }
    }
   
}