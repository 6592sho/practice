import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type Users = typeof Data;

// 文字列リテラル
const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

// annotation 明示的に型指定 => しなくても型推論してくれる
let username: string = "Hello";
let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false];
let array2 = [0, 1, "aaaaa"];

interface Name {
  first: string;
  last: string | null;
}

let nameObj: Name = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type Profile = {
  age: number;
  city: string;
};

type Login = {
  username: string;
  password: string;
};

type User = Profile & Login;

const userA: User = {
  age: 30,
  city: "Tokyo",
  username: "Yamada",
  password: "aaa",
};

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, "hello"];

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 256;

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animals = { cat: "small cat" };
let newAnimal: typeof animals = { cat: "big cat" };

// keyof
type Keys = {
  primary: string;
  secondary: string;
};
let key: keyof Keys;
key = "primary";

// keyof + typeof
const Sports = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof Sports;
keySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性

const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3; ❌

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2; ❌

// Generics
interface GEN<T> {
  item: T;
}
// T: 実際に使用するときに動的に指定できる
const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<number> = { item: 2 };
// const gen2: GEN = { item: "hello" }; ❌

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen("test");
const gen7 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1("hello");

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Hello from App" />
      </header>
    </div>
  );
};

export default App;
