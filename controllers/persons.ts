import {Request, Response} from 'express';


const person = {
    "email": "info@example.com",
    "image": "janedoe.jpg",
    "jobTitle": "Research Assistant",
    "name": "Jane Doe",
    "alumniOf": "Dartmouth",
    "birthPlace": "Philadelphia, PA",
    "birthDate": "1979-10-12",
    "height": "72 inches",
    "gender": "female",
    "memberOf": "Republican Party",
    "nationality": "Albanian",
    "telephone": "(123) 456-6789",
    
}
export const getPersons = (req: Request, res: Response) => {
    res.send(person);
}
