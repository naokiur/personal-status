import HeadCategory from '@/models/headCategory/HeadCategory';

export default class HeadCategoryList {
    private values: HeadCategory[];

    constructor(input: string) {
        const splittedInput = input.split('\n').filter((v: string) => v !== '');
        this.values = splittedInput.map((v: string) => {
            return new HeadCategory(v);
        });
    }

    public getValues(): HeadCategory[] {
        return this.values;
    }
}
