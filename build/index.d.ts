declare type colors = "green" | "blue" | "brown" | "gray";
export interface Cat {
    hair: boolean;
    eyes: colors[];
    legs: number;
    tailLength: number;
    bodyLength: number;
    headLength: number;
}
declare const makeCat: () => Cat;
export default makeCat;
//# sourceMappingURL=index.d.ts.map