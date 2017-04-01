/*
    This is the basic model of header
    with attributes

 */

export class Header{
    constructor(
        public name: string,
        public cost: Number,
        public fluff: string,
        public description: string,
        public required_header: string
    ){}

    public static safeConstructor(
        name: string,
        cost: number,
        fluff?: string | undefined,
        description?: string | undefined,
        required_header?: string |undefined
    ){
        var output = new Header(name, cost, fluff, description, required_header);
        return output;

    }

}