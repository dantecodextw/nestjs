import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getList(): any {
        return [
            { name: 'item' }
        ]
    }
}
