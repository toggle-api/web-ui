import { SelectionMethod } from './selection_method';
export declare class MD5 implements SelectionMethod {
    private salt;
    private int;
    constructor(salt: string, int: number);
    CalculateSelection(identifier: string): number;
    private hash(value);
}
