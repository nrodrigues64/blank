export class Product {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    locationId: number;
    familyId: number;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}