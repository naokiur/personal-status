import Category from '@/models/category/Category';

export default class CategoryList {
    private values: Category[];

    constructor(input: string) {
        const splittedInput = input.split('\n').filter((v: string) => v !== '');
        this.values = splittedInput.map((v: string) => {
            const record = v.split('\t');
            return new Category('1', record[0], parseInt(record[1], 10));
        });
    }

    public getValues(): Category[] {
        return this.values;
    }
}
