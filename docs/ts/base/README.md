# 类型和类型运算

## 类型

### 基本类型

- number
- boolean
- string
- object
- bigint
- symbol
- undefined
- null

### 包装类型

- Number
- Boolean
- String
- Object
- Symbol

### 复合类型

- class 
- Array
- 元组 Tuple
- 接口 Interface
- 枚举 Enum

#### 元组

```TypeScript
type Tuple = [number, string]
```

#### 接口

接口可以描述函数、对象、构造器

#### 枚举

```TypeScript
enum Transpiler {
    Babel = 'babel',
    Postcss = 'postcss',
    Terser = 'terser',
    Prettier = 'prettier',
    TypeScriptCompiler = 'tsc'
}

const transpiler = Transpiler.TypeScriptCompiler;
```

### 字面量

此外，`TypeScript` 还支持字面量类型，也就是类似 `1111`、`'aaaa'`、`{ a: 1}` 这种值也可以做为类型。

### 特殊类型

- `void` 代表空，可以是 `null` 或者 `undefined`，一般是用于函数返回值。
- `any` 是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型。
- `unknown` 是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。
- `never` 代表不可达，比如函数抛异常的时候，返回值就是 `never`。

## 类型的修饰

### 可选、是否只读

```TypeScript
interface IPerson {
    readonly name: string;
    age?: number;
}

type tuple = [string, number?];
```

## 类型运算

### 条件 extends ? :

```TypeScript
type res = 1 extends 2 ? true : false; // res = false
```

> 这种类型也叫做**高级类型**
> 高级类型的特点是传入类型参数，经过一系列类型运算逻辑后，返回新的类型。

### 推导：infer


```TypeScript
type First<Tuple extends unknown[]> = Tuple extends [infer T,...infer R] ? T : never;

type res = First<[1,2,3]>;
```

### 联合：|

```TypeScript
type Union = 1 | 2 | 3;
```

### 交叉： &

```TypeScript
type ObjType = {a: number } & {c: boolean};
// {a: number, c: boolean}
```

### 映射类型

对象、`class` 在 `TypeScript` 对应的类型是索引类型`（Index Type）`，就是映射类型。

```TypeScript
type MapType<T> = {
  [Key in keyof T]?: T[Key]
}
```

`keyof T` 是查询索引类型中所有的索引，叫做索引查询。

`T[Key]` 是取索引类型某个索引的值，叫做索引访问。

`in` 是用于遍历联合类型的运算符。