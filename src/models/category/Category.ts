export default class Category {
    private id: string;
    private name: string;
    private level: number;

    constructor(id: string, name: string, level: number) {
        this.id = id;
        this.name = name;
        this.level = level;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }
}