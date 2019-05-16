import HeadCategory from '@/models/headCategory/HeadCategory';

export default class HeadCategoryList {
    private id: number;
    private values: HeadCategory[];

    constructor(input: string) {
        const splittedInput = input.split('\n').filter((v: string) => v !== '');
        this.values = splittedInput.map((v: string, i: number) => {
            return new HeadCategory(i, v);
        });
    }

    public getValues(): HeadCategory[] {
        return this.values;
    }
}
