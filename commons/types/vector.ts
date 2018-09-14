
export class Vec {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static down() : Vec {
        return new Vec(0, -1);
    }
    static up() : Vec {
        return new Vec(0, 1);
    }
    static left() : Vec {
        return new Vec(-1, 0);
    }
    static right() : Vec {
        return new Vec(1, 0);
    }
    clone() : Vec {
        return new Vec(this.x, this.y);
    }
    add(other: Vec) : Vec {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    sub(other: Vec) : Vec {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }
    mul(other: Vec) : Vec {
        this.x = this.x * other.x;
        this.y = this.y * other.y;
        return this;
    }
    equals(other: Vec) : boolean {
        return this.x == other.x && this.y == other.y;
    }
}

