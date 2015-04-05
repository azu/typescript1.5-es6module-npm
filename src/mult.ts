class Multi {
    do(x: number, y: number) {
        throw new Error("err");
        return x * y;
    }
}
export = Multi;
