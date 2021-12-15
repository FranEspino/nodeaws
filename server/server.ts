import express,{Application} from 'express';
import persons from '../routes/persons';
class Server{
    private app:Application;
    private port:number;
    private apiPath = {
        persons:'/api'
    }
    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
  
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiPath.persons,persons);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server on port',this.port);
        });
    }

}
export default Server;