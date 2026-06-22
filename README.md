# Learn Playwright Batch 2x

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Batch-In%20Progress-orange?style=for-the-badge)

**The official course repository for Batch 2x — JavaScript, TypeScript, and Playwright for SDETs**

*Zero to automation hero — JavaScript fundamentals → TypeScript → Playwright → AI Agents & MCP*

[Quick Start](#-quick-start) · [Curriculum](#-curriculum-roadmap) · [Weekly Plan](#-weekly-plan) · [What You'll Build](#-what-youll-build) · [Resources](#-resources)

</div>

---

## Welcome to Batch 2x

This repository is your **week-by-week course companion** for the LearnPlaywright Batch 2x cohort by [The Testing Academy](https://thetestingacademy.com). Code shown in lectures lands here so you can read it, run it, and practice on it.

> Content gets added **as we progress through the batch** — so check back after every class.

### What you'll learn

- **JavaScript Fundamentals** — variables, control flow, arrays, functions, OOP, async
- **TypeScript** — types, interfaces, enums, generics, access modifiers, decorators
- **Playwright** — setup, locators, assertions, fixtures, POM, debugging, CI
- **Modern QA** — Playwright CLI, AI Agents, and MCP for full STLC automation

---

## 🗺️ Curriculum Roadmap

```mermaid
graph TB
    subgraph root["LearnPlaywrightBatch2x"]
        direction TB

        subgraph js["📘 JavaScript (Weeks 1–6)"]
            ch1["Ch 1: Basics ✅"]
            ch2["Ch 2: JS Concepts ✅"]
            ch3["Ch 3: Identifiers & Literals ✅"]
            ch4["Ch 4: var / let / const & Hoisting ✅"]
            ch5["Ch 5: Literals (null, number, string, template) ✅"]
            ch6["Ch 6: Operators ✅"]
            ch7["Ch 7: If / Else ✅"]
            ch8["Ch 8: Switch ✅"]
            ch9["Ch 9: User Input ✅"]
            ch10["Ch 10: Loops ✅"]
            ch11["Ch 11: Arrays ✅"]
            ch12_fn["Ch 12: Functions & Strings ✅"]
        end

        subgraph adv["⚙️ Advanced JS (Weeks 7–8)"]
            adv1["Ch 14: Objects ✅"]
            adv2["Ch 15: 2D Arrays ✅"]
            adv3["Ch 16: Callbacks ✅"]
            adv4["Ch 17: Promises ✅"]
            adv5["Ch 18: Async / Await ✅"]
            adv6["Ch 20: OOP — ES Modules & Classes ✅"]
            adv7["Ch 21: Inheritance"]
        end

        subgraph pw_intro["🎭 Playwright Intro (Week 8+)"]
            pw_intro1["Ch 19: Playwright Automation ✅"]
        end

        subgraph ts["🟦 TypeScript (Week 9)"]
            ts1["Ch 19: TS Fundamentals"]
            ts2["Ch 20: Interfaces"]
            ts3["Ch 21: Enums"]
            ts4["Ch 22: Generics"]
            ts5["Ch 23: Access Modifiers & Decorators"]
        end

        subgraph pw["🎭 Playwright (Weeks 10–12)"]
            pw1["Ch 24: PW Fundamentals"]
            cli["Lecture: Playwright CLI"]
            ai["Lecture: AI Agents"]
            mcp["Lecture: MCP Protocol"]
        end

        subgraph extras["🎯 Bonus"]
            tasks["Interview Coding Questions"]
            tests["Real-world Test Projects"]
        end
    end

    js --> adv --> ts --> pw --> extras

    style js fill:#e1f5fe,stroke:#01579b
    style adv fill:#fff3e0,stroke:#e65100
    style ts fill:#e0f7fa,stroke:#00838f
    style pw fill:#f3e5f5,stroke:#7b1fa2
    style extras fill:#e8f5e9,stroke:#2e7d32
```

---

## 📚 Current Folder Structure

```
LearnPlaywrightBatch2x/
├── chapter_02_Javascript_Concepts/     ✅ JS Basics
│   └── 05_JS_Basics.js                 # Variables & console output
│
├── chapter_03_Identifier_Literals/     ✅ Identifiers, literals & comments
│   ├── 06_Identifier_Rules.js          # Valid identifier names
│   ├── 07_Identifier_Part2.js          # Naming conventions (camelCase, PascalCase, snake_case)
│   ├── 08_Comments.js                  # Single-line & multi-line comments
│   └── js_identifier_rules.js          # Identifier rules reference
│
├── chapter_04_Javascript_Concepts/     ✅ var / let / const, hoisting & TDZ
│   ├── 09_var_let_const.js             # var, let, const basics
│   ├── 10_functions.js                 # Function declaration & calls
│   ├── 11_var_explained.js             # var deep dive
│   ├── 12_let_peope_love.js            # let deep dive
│   ├── 13_const_explained.js           # const deep dive
│   ├── 14_var_functionscope.js         # var function scope
│   ├── 15_let_scope.js                 # let block scope
│   ├── 16_Hoisting.js                  # Variable hoisting explained
│   ├── 17_hoisting_fn.js               # Function hoisting
│   ├── 18_let_hoisting.js              # let hoisting & Temporal Dead Zone (TDZ)
│   ├── 19_let_hoisting_block.js        # Block-scoped TDZ shadowing
│   ├── 20_let_const.js                 # const hoisting (TDZ for const)
│   └── 21_Jr_QA.js                     # Interview Q&A — TDZ trap with const
│
├── chapter_06_Operator/                ✅ Operators — arithmetic, comparison, logical
│   ├── 30_Operator.js                  # Assignment operator =
│   ├── 31_Arithmetic_OP.js             # + - * /
│   ├── 32_Modulus_OP.js                # % — odd/even trick
│   ├── 33_Expo_OP.js                   # ** exponentiation
│   ├── 34_IQ.js                        # Compound assignment: += -= *= /= %=
│   ├── 35_Comparsion_OP.js             # > < >= <= == === != !==
│   ├── 36_Comparsion_Strict_loose.js   # Loose vs strict — number == string traps
│   ├── 37_IQ_Loose_Strict.js           # Interview quick-fire: 0 == "" == "0"
│   ├── 38_Confusing_Comparsion.js      # 🔥 == vs === full reference (NaN, [], null, typeof)
│   ├── 39_Logical_Op.js                # && || !
│   ├── 40_String_Con_Op.js             # + on strings = concatenation
│   ├── 41_Ternary_Op.js                # condition ? a : b (with nesting, SLA, env URLs)
│   ├── 42_Type_Op.js                   # typeof — string, number, object, []
│   ├── 43_Incre_Decre_Op.js            # ++ / -- pre vs post
│   ├── 44_Null_Op.js                   # ?? nullish coalescing
│   ├── 45_Post_Increment.js            # post ++ — assign-then-increment
│   ├── 46_IQ_INCREMENT_D.js            # Interview: value of a++
│   └── 47_Advance_ID_.js               # 🔥 Pre/post mix in one expression (IQ trap)
│
├── chapter_07_If_else/                 ✅ If / Else — control flow basics
│   ├── 48_IF_ESLE.js                   # Basic if / else with age check
│   ├── 49_If_elseif_else.js            # Grade ladder with else-if
│   ├── 50_REAL_IF_ELSE.js              # Nested if-else — login + role checks
│   ├── 51_API_IF_ELSE.js               # API status code branching
│   ├── 52_IQ_IF_ELSE.js                # Truthy vs falsy values
│   ├── 53_IF_ELSE_real.js              # Logical operators + if-else (auth logic)
│   ├── 54_IQ.js                        # One-line if without braces
│   ├── 55_IE.js                        # Empty if block
│   ├── 56_IQ_EVEN_ODD.js               # Even / odd with modulus
│   ├── 57_Grade_Calc.js                # Grade calculator (A–F)
│   └── 58_LEAP_YEAR.js                 # Leap year rules (% 4, % 100, % 400)
│
├── chapter_08_Switch_Statement/        ✅ Switch cases
│   ├── 59_Switch.js                    # Switch statement basics
│   ├── 60_No_Break.js                  # Fall-through when `break` is missing
│   ├── 61_Default.js                   # `default` branch
│   ├── 62_REAL_TIME_EXAMPLE.js         # Real-world switch usage
│   ├── 63_Switch_Group.js              # Grouped cases (shared body)
│   ├── 64_IQ.js                        # Interview Q — switch trap 1
│   ├── 65_IQ2.js                       # Interview Q — switch trap 2
│   ├── 66_IQ3.js                       # Interview Q — switch trap 3
│   └── 67_IQ4.js                       # Interview Q — switch trap 4
│
├── chapter_09_UserInput/               ✅ Reading user input in Node
│   ├── 68_User_Input.js                # Browser `prompt()` — does NOT work in Node
│   ├── 69_Node_readline.js             # Node built-in `readline` (async)
│   └── 70_prompt_sync.js               # `prompt-sync` npm package (sync)
│
├── chapter_10_Loops/                   ✅ for, while, do-while, for-of/in, break/continue
│   ├── 71_For_loop.js                  # Introducing the for loop
│   ├── 72_For_loop.js                  # for loop with <= condition
│   ├── 73_For_Loop2.js                 # Variable naming & loop boundaries
│   ├── 74_IQ.js                        # Nested if/else inside a for loop
│   ├── 75_For_OF_IN_EACH.js            # while loop — retry logic (arrays preview)
│   ├── 76_While.js                     # while loop — init, condition, update
│   ├── 77_Do_While.js                  # do-while — guaranteed one execution
│   ├── 78_Do_While.js                  # do-while retry example
│   ├── 79_IQ.js                        # while countdown (i--)
│   ├── 80_IQ.js                        # do-while off-by-one trap
│   ├── 81_IQ.js                        # for with `continue`
│   └── 82_IQ.js                        # do-while infinite-loop trap
│
├── chapter_11_Arrays/                  ✅ Arrays — creation, access, add/remove, search, iterate, transform
│   ├── 83_Arrays.js                    # Arrays basics — literal, index, length, mixed types
│   ├── 84_Arrays.js                    # Array constructor, Array.of(), Array.from()
│   ├── 85_Access_Array.js              # Accessing & modifying elements, .at() with negative index
│   ├── 86_Arrays_Adding_Remove.js      # push, pop, unshift, shift
│   ├── 87_Adding_Remove2.js            # splice — add, remove, replace at any position
│   ├── 88_REAL_Example.js              # Real-world browser list manipulation
│   ├── 89_Searching.js                 # indexOf, lastIndexOf, includes, find, findIndex, findLast
│   ├── 90_Iterate.js                   # for, for...of, forEach, for...in, .entries()
│   ├── 91_Transform_Array.js           # map, filter, reduce, flat
│   ├── 92_Arrays.js                    # sort — default vs numeric compare
│   ├── 93_Array_slicing.js             # slice vs splice — extract vs mutate
│   ├── 94_concat_array.js              # concat & spread — combine arrays
│   ├── 95_Array_checking.js            # Array.isArray, every, some
│   └── 96_Transform_array.js           # sort with compare function (ascending / descending)
│
├── Chapter_12_Functions/               ✅ Functions — declaration, expression, arrow, IIFE, closures, HOF
│   ├── 96_Functions.js                 # Function definition & call
│   ├── 97_Type1_Fn_Basic_Functions.js  # Type 1: no param, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js # Type 2: with param, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js # Type 3: no param, with return
│   ├── 100_Type4_Fn_With_Param_With_Return.js   # Type 4: with param, with return
│   ├── 101_Template_literal.js         # Template literals inside functions
│   ├── 102_Fn_Expression.js            # Function expressions
│   ├── 103_Arrow_Fn.js                 # Arrow functions (ES6)
│   ├── 104_Arrow_func_realone.js      # Arrow function — real-world status-code check
│   ├── 105_IIFE.js                     # IIFE (Immediately Invoked Function Expression)
│   ├── 106_Default_param.js            # Default parameters
│   ├── 107_IQ.js                       # Interview Q — return values & template literals
│   ├── 108_Rest_Param.js             # Rest parameters (...args)
│   ├── 109_IQ.js                       # Interview Q — HTTP status categories & implicit return
│   ├── 110_Spread_IQ.js              # Spread operator ... vs rest parameter
│   ├── 111_Scope_IQ.js               # Scope — global vs local access
│   ├── 112_IQ.js                       # Interview Q — nested scope & blocked scope
│   ├── 113_Clouser.js                # Closures — inner function retains outer scope
│   ├── 114_clouser.js                # Closure counter example
│   ├── 115_API_Real_Clouser.js       # Real-world closure — retry tracker
│   ├── 116_Higher_order.js           # Higher-Order Functions
│   └── 117_Pure_fn.js                # Pure vs impure functions
│
├── chapter_13_Strings/                  ✅ Strings — creation, properties, search, substring, transform
│   ├── 118_Strings.js                  # String literals, backticks, multiline, String constructor
│   ├── 119_String_Properties.js        # length, index access, charAt, charCodeAt, .at()
│   ├── 120_Search_Check_Str.js         # includes, startsWith, endsWith, indexOf, lastIndexOf, search(regex)
│   ├── 121_Substring.js                # slice, substring, negative indexes
│   ├── 122_Transform_Str.js            # toUpperCase, toLowerCase, trim, replace, replaceAll, split, join
│   ├── 123_SC.js                       # String conversion — toString, Number, parseInt, parseFloat
│   ├── Tasks_Anagrams.js             # Coding task — check if two words are anagrams
│   ├── Tasks_palindrome.js           # Coding task — check if a string is a palindrome
│   └── javascript_stringcheatsheet.md  # Quick reference cheat-sheet for JS strings
│
├── Chapter_14_objects.js/              ✅ Objects — creation, properties, methods, destructuring, spread, getters/setters
│   ├── 124_Objects.js                  # Object literal syntax — key/value pairs, property access
│   ├── 125_Objects2.js                 # Object as data container — multi-property objects
│   ├── 126_Objects_Creation.js         # Ways to create objects — literal, constructor, Object.create()
│   ├── 127_Objects_REAL.js             # Real-world: build a test config object dynamically
│   ├── 128_Primitive_Ref.js            # Primitive vs reference types — copy vs alias
│   ├── 129_Ob_Examples.js              # JSON-shaped objects — parse/stringify patterns
│   ├── 130_IQ.js                       # Interview Q — object property access traps
│   ├── 131_Object_Fn.js                # Methods on objects — functions as values
│   ├── 132_Obj_Decon.js                # Destructuring — extract named properties cleanly
│   ├── 133_Spead.js                    # Spread operator {...obj} — copy & merge objects
│   ├── 134_Objects_GET_SET_Methods.js  # Getters & setters — computed properties with get/set
│   ├── 136_Obj_REAL.js                 # Real-world: ENV config object — base URL, timeout, retries
│   └── 137_Let_const_obj.js            # let vs const with objects — mutation vs reassignment
│
├── Chapter_15_2D_array/                ✅ 2D Arrays — matrix traversal, real-world test data grids
│   ├── 138_2D_Array.js                 # 2D array basics — nested loops, row/column access
│   ├── 139_2d.js                       # Matrix dimensions — rows × columns, boundary checks
│   ├── 140_REAL.js                     # Real-world: test result matrix [testName, status, statusCode]
│   ├── 141_2d_Array_Fn.js              # Row totals & averages — student score grid
│   ├── 142_IQ_Right_Pattern_Py.js      # IQ: print right-angle star pattern with nested loops
│   └── testdata.csv                    # Sample CSV test data used in matrix examples
│
├── Chapter_16_Callback/                ✅ Callbacks — sync/async callbacks, callback hell, Playwright-style usage
│   ├── 143_Callback.js                 # Callback basics — passing a function as an argument
│   ├── 144_CB.js                       # Playwright-flavoured test() with callback
│   ├── 145_CB_Fn.js                    # Callback inside a cafe-ordering simulation
│   ├── 146_PW_CB.js                    # Hand-rolled test() runner — how Playwright test() works
│   ├── 147_JS_CB.js                    # Async callback — setTimeout simulating API delay
│   ├── 148_Sync_CB.js                  # Sync callback — forEach over test results array
│   ├── 149_Async_CB.js                 # Async callback — event-loop order with setTimeout
│   ├── 150_CB_Hell.js                  # Callback hell intro — nested login/navigate/assert steps
│   ├── 151_CB_Hell_20_Steps.js         # Pyramid of doom — 24-step E2E checkout as nested callbacks
│   ├── 152_CB_Parameter.js             # Callbacks with parameters — greeting + callback invocation
│   └── 153_CB_Return.js                # Returning values from callbacks — calculate() higher-order fn
│
├── Chapter_17_promises/                ✅ Promises — resolve/reject, .then/.catch/.finally, Promise.all/allSettled
│   ├── 154_Promise.js                  # Promise basics — new Promise, resolve, reject
│   ├── 155_Promise_REAL_API.js         # Real API simulation — .then() on resolve
│   ├── 156_Promise_REAL_API_PART2.js   # Promise chaining — .then().catch() for API calls
│   ├── 157_Finally.js                  # .finally() — cleanup that always runs
│   ├── 158_Call_Py_Problem.js          # Callback-to-Promise migration — real problem solved
│   ├── 159_Promise_ALL.js              # Promise.all vs Promise.allSettled — parallel checks
│   └── 160_Promise_IQ.js              # Interview Qs — chaining, value passing, catch flow
│
├── chapter_18_Async_Await/             ✅ Async/Await — modern async syntax, try/catch, parallel execution
│   ├── 161_Async.js                    # async function basics — await, try/catch, finally
│   ├── 162_Aysnc_P2.js                 # async Part 2 — sequential vs parallel calls
│   ├── 163_PyODom.js                   # Async DOM simulation — awaiting element-ready checks
│   ├── 164_Async_Ex.js                 # Async examples — real-world login flow with await
│   ├── 165_AA_Parallel.js              # Parallel execution — Promise.allSettled + destructuring
│   ├── 166_IQ.js                       # Interview Qs — async return value, error propagation
│   └── 167_ACLogin.js                  # Async login simulation — await login + assertions
│
├── Chapter_19_Playwright_Automation/   ✅ Playwright — first tests, codegen, assertions, config
│   ├── examples.spec.ts                # First Playwright test — page.goto, toHaveTitle, test.only
│   ├── Codegen_Invalid.spec.ts         # Codegen anti-pattern — brittle, non-semantic locators
│   ├── playwright.config.ts            # Playwright config — testDir, retries, reporter, projects
│   └── tests/                          # Codegen-generated specs (valid vs invalid comparison)
│       ├── codegen_valid.spec.ts       # Valid codegen output — semantic & role-based locators
│       └── Codegen_Invalid.spec.ts     # Invalid codegen — positional / text-exact selectors
│
├── Chapter_20_OOPS_concept/            ✅ OOP — ES Modules (export/import) & Classes
│   ├── 01_EXPORT_IMPORT/               # Named & default exports
│   │   ├── 168_EXPORT_IMPORT.js        # Basic import syntax — named exports
│   │   ├── 169_Utils.js                # Named imports with `as` alias for name clashes
│   │   ├── 170_Logger.js               # Default import — no braces required
│   │   └── ExplainDefault.md           # Full named vs default export reference
│   ├── 02_CLASS_OBJECT/                # Classes — constructors, methods, fields
│   │   ├── 171_Class_Object.js         # Class syntax — attributes & behaviour methods
│   │   ├── 172_Class_Object2.js        # Constructor — runs on every `new` call
│   │   ├── 173_Car.js                  # Class with constructor + drive() method
│   │   ├── 174_REAL_Browser.js         # Real-world TestCase class with display()
│   │   ├── 175_IQ.js                   # Browser class — multi-instance IQ
│   │   ├── 176_Private_Public.js       # Private fields (#) vs public fields
│   │   ├── 177_Statis.js               # Static properties & shared class methods
│   │   └── 178_Statis.js               # Static nationality example
│   ├── logger.js                       # Module with default export (log) + named (log2)
│   ├── testutils.js                    # Named exports — BASE_URL, formatUpperCaseString
│   ├── utils.js                        # Named exports — BASE_URL, formatTestName
│   └── interview.md                    # Interview Q&A — `const` with objects & Object.freeze
│
└── README.md                           👋 You are here
```

> **Legend:** ✅ Done · 🚧 Coming soon

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18+ (LTS recommended) | Runs all `.js` files |
| **npm** | Bundled with Node | Package manager |
| **VS Code** | Latest | Recommended editor |
| **Git** | Latest | Clone the repo |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/harsh-0541/LearnPlaywrightBatch2x.git
cd LearnPlaywrightBatch2x

# 2. Verify your setup
node chapter_01_Basics/03_JS_Verify_Setup.js

# 3. Run your first JS program
node chapter_01_Basics/01_Basics.js
```

### Verify it works

```bash
$ node chapter_01_Basics/01_Basics.js
Hello The Testing Academy
```

If you see that line, you're all set! 🎉

---

## 📅 Weekly Plan

```mermaid
journey
    title Batch 2x — 12-Week Learning Journey
    section Foundations (Wk 1-2)
        Setup & Hello World: 5: Ch1
        Variables & Hoisting: 4: Ch2
        Identifiers & Literals: 4: Ch3
        Operators: 4: Ch4
    section Control Flow (Wk 3-4)
        If / Else: 4: Ch5
        Switch: 3: Ch6
        Loops: 4: Ch7
    section Data & Functions (Wk 5-6)
        Arrays: 5: Ch8
        Functions: 5: Ch9
        Strings & Objects: 4: Ch10-11
    section Advanced JS (Wk 7-8)
        2D Arrays: 3: Ch12
        Callbacks & Promises: 5: Ch13-14
        Async / Await: 5: Ch15
        OOP & Inheritance: 5: Ch16-17
    section TypeScript (Wk 9)
        TS Basics → Decorators: 5: Ch18-22
    section Playwright (Wk 10-12)
        Fundamentals: 5: Ch23
        CLI Mastery: 5: CLI
        AI Agents & MCP: 5: AI/MCP
```

| Week | Topic | Chapters | Outcome |
|:----:|-------|---------:|---------|
| 1 | JS Basics & Setup | Ch 1 | Run Node, write first JS |
| 2 | Variables & Hoisting | Ch 2 | Master `var`/`let`/`const` |
| 3 | Identifiers, Literals, Operators | Ch 3–4 | Read/write any expression |
| 4 | Control Flow | Ch 5–7 | If/else, switch, loops |
| 5 | Arrays & Functions | Ch 8–9 | Manipulate data confidently |
| 6 | Strings & Objects | Ch 10–11 | Use JS data structures |
| 7 | Async (Callbacks → Promises) | Ch 12–14 | Handle async work |
| 8 | Async/Await + OOP | Ch 15–17 | Modern async, classes |
| 9 | TypeScript | Ch 18–22 | Type-safe automation code |
| 10 | Playwright Fundamentals | Ch 23 | First passing test |
| 11 | Playwright CLI Mastery | CLI Lecture | Codegen, debug, trace |
| 12 | AI Agents + MCP | AI/MCP Lectures | Self-healing, full STLC |

---

## 🧭 Learning Flow

```mermaid
flowchart LR
    subgraph A["Foundations"]
        A1[Basics] --> A2[Variables] --> A3[Operators]
    end
    subgraph B["Control Flow"]
        B1[If/Else] --> B2[Switch] --> B3[Loops]
    end
    subgraph C["Data Structures"]
        C1[Arrays] --> C2[Functions] --> C3[Strings] --> C4[Objects]
    end
    subgraph D["Async"]
        D1[Callbacks] --> D2[Promises] --> D3[Async/Await]
    end
    subgraph E["OOP"]
        E1[Classes] --> E2[Inheritance]
    end
    subgraph F["TypeScript"]
        F1[Types] --> F2[Interfaces] --> F3[Generics]
    end
    subgraph G["Playwright"]
        G1[Setup] --> G2[Locators] --> G3[POM] --> G4[CI/AI/MCP]
    end

    A --> B --> C --> D --> E --> F --> G

    style A fill:#e3f2fd
    style B fill:#fff8e1
    style C fill:#f3e5f5
    style D fill:#e8f5e9
    style E fill:#fce4ec
    style F fill:#e0f7fa
    style G fill:#ede7f6
```

---

## 📖 What's in Chapter 1 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `01_Basics.js` | Hello World | First `console.log`, declaring a variable |
| `02_JS.js` | Variables & Loops | Re-declaring with `let`, calling functions inside loops |
| `03_JS_Verify_Setup.js` | Environment Check | `process.platform`, `process.arch`, `process.version` |
| `04_HotCode.js` | Hot Code Paths | How V8 optimizes frequently-called functions |

### Key Concepts

```mermaid
mindmap
  root((Chapter 1))
    Setup
      Node.js install
      VS Code
      Verify with process.*
    First Program
      console.log
      Run with node file.js
    Variables
      let
      const
      var
    Hot Code
      JIT compilation
      V8 optimization
```

### Run them

```bash
node chapter_01_Basics/01_Basics.js          # → "Hello The Testing Academy"
node chapter_01_Basics/02_JS.js              # → counts to 100000 calling print()
node chapter_01_Basics/03_JS_Verify_Setup.js # → prints platform / arch / node version
node chapter_01_Basics/04_HotCode.js         # → triggers V8 hot-path optimization
```

---

## 📖 What's in Chapter 2 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `05_JS_Basics.js` | JS Basics | Variables, assignment, console output |

---

## 📖 What's in Chapter 3 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `06_Identifier_Rules.js` | Identifier Rules | Valid names (`$`, `_`, camelCase) |
| `07_Identifier_Part2.js` | Naming Conventions | camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE |
| `08_Comments.js` | Comments | Single-line, multi-line & JSDoc style |
| `js_identifier_rules.js` | Reference | Quick identifier rules cheat-sheet |
| `VS_Code_keyboard_shortcut_mac.md` | Shortcuts | VS Code keyboard shortcuts for macOS |
| `VS_Code_keyboard_shortcut_windows.md` | Shortcuts | VS Code keyboard shortcuts for Windows |

### Key Concepts

```mermaid
mindmap
  root((Chapter 3))
    Identifiers
      $ and _ allowed
      Cannot start with number
      Case-sensitive
    Naming Conventions
      camelCase
      PascalCase
      snake_case
      SCREAMING_SNAKE_CASE
    Comments
      Single-line //
      Multi-line /* */
      JSDoc /** */
```

---

## 📖 What's in Chapter 4 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `09_var_let_const.js` | var, let, const | Declaration, re-declaration, reassignment |
| `10_functions.js` | Functions | Declaring and calling functions |
| `11_var_explained.js` | var Deep Dive | How `var` works in loops & functions |
| `12_let_peope_love.js` | let Deep Dive | Block-scoped `let` behavior |
| `13_const_explained.js` | const Deep Dive | Immutable bindings with `const` |
| `14_var_functionscope.js` | Function Scope | `var` scoped to functions |
| `15_let_scope.js` | Block Scope | `let` scoped to blocks `{}` |
| `16_Hoisting.js` | Hoisting | Variable hoisting & `undefined` |
| `17_hoisting_fn.js` | Function Hoisting | How function declarations are hoisted |
| `18_let_hoisting.js` | let TDZ | Temporal Dead Zone — why `let` errors before declaration |
| `19_let_hoisting_block.js` | Block TDZ | Inner-block `let` does **not** inherit outer value |
| `20_let_const.js` | const Hoisting | `const` is hoisted too — same TDZ rules apply |
| `21_Jr_QA.js` | Interview Q&A | Classic TDZ trap with `const` (junior SDET quiz) |

### Key Concepts

```mermaid
mindmap
  root((Chapter 4))
    var
      Function scoped
      Hoisted with undefined
      Can re-declare
    let
      Block scoped
      Hoisted but TDZ
      Cannot re-declare
    const
      Block scoped
      Must initialize
      Cannot re-assign
    Hoisting
      var → undefined
      let → TDZ error
      Functions → fully hoisted
```

### Run them

```bash
node chapter_04_Javascript_Concepts/09_var_let_const.js  # → var, let, const behavior
node chapter_04_Javascript_Concepts/16_Hoisting.js       # → see hoisting in action
node chapter_04_Javascript_Concepts/18_let_hoisting.js   # → throws TDZ ReferenceError
node chapter_04_Javascript_Concepts/21_Jr_QA.js          # → interview-style TDZ trap
```

### 18 — Temporal Dead Zone (TDZ)

**Concept:** TDZ is the window between when a `let`/`const` is hoisted to the top of its block and when its declaration line is actually reached. Inside that window any read or write throws `ReferenceError: Cannot access 'x' before initialization`.

**Why:** Catches use-before-declare bugs at the source — unlike `var`, which silently returns `undefined` and hides the bug until runtime.

**Q&A — why use this?**
- **Q: Are `let` and `const` really hoisted?** A: Yes — but to a "not yet usable" state. The binding exists; the value does not. That gap is the TDZ.
- **Q: How is this different from `var`?** A: `var` is hoisted **and** initialized to `undefined` immediately. `let`/`const` are hoisted but uninitialized — touching them = ReferenceError.
- **Q: Why does the interview question with `const c` throw?** A: The `console.log(c)` runs **inside** the TDZ of `const c = "pramod"`. Hoisting is not "no declaration"; it's "declaration parked, value not yet set".

```mermaid
sequenceDiagram
    participant Engine
    participant Block as Block scope
    participant Var as let score
    Engine->>Block: Enter block
    Block->>Var: Hoist binding (uninitialized)
    Note over Var: 🚫 TDZ begins
    Engine->>Var: console.log(score)
    Var-->>Engine: ReferenceError ❌
    Engine->>Var: let score = 100
    Note over Var: ✅ TDZ ends
    Engine->>Var: console.log(score)
    Var-->>Engine: 100 ✅
```

```js
// 18_let_hoisting.js — TDZ in action
console.log(score); // ❌ ReferenceError: Cannot access 'score' before initialization
let score = 100;

{
    // ---- TDZ for inner "score" starts ----
    // console.log(score);  // ❌ ReferenceError
    // typeof score;        // ❌ ReferenceError (!! typeof normally never throws)
    let score = 100;        // ✅ TDZ ends here
    console.log(score);     // 100
}
```

| Trap | `var` | `let` / `const` |
|:-----|:-----:|:---------------:|
| Read before declaration | `undefined` | **ReferenceError** |
| Re-declare in same scope | ✅ allowed | ❌ SyntaxError |
| Scope | Function | Block `{}` |
| Hoisted? | ✅ + initialized | ✅ but in TDZ |

---

## 📖 What's in Chapter 5 — Literals (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `22_Literal.js` | Literals + `typeof` | String, number, boolean, null, undefined literals |
| `23_null_undefined.js` | null vs undefined | Who sets them, when to use which, the `typeof null === 'object'` quirk |
| `24_null.js` | Empty values | `null`, `undefined`, `""`, `0` — same role, different types |
| `25_Literal_All.js` | All literals | Whirlwind tour of every literal form |
| `26_Literal_Number_all.js` | Number literals | Decimal, binary `0b`, octal `0o`, hex `0x`, BigInt `n`, `1e6`, `1_000_000`, `NaN`, `Infinity` |
| `27_String.js` | Quotes | Single `'…'` vs double `"…"` strings (interchangeable) |
| `28_Template_Literal.js` | Backticks | `` `${var}` `` interpolation — Playwright selectors, log lines, screenshot paths |
| `29_Backtick_single_double.js` | `'` vs `"` vs `` ` `` | One-page comparison + migration from `+`-concatenation |

### Key Concepts

```mermaid
mindmap
  root((Chapter 5 — Literals))
    Primitive Literals
      number 42
      string "hi"
      boolean true
      null
      undefined
    Number Forms
      decimal 42
      binary 0b1010
      octal 0o52
      hex 0xFF
      exp 1.5e3
      sep 1_000_000
      BigInt 123n
    Strings
      'single'
      "double"
      `template`
    Special
      NaN
      Infinity
      Number.MAX_SAFE_INTEGER
```

### Run them

```bash
node chapter_05_Literal/22_Literal.js              # → typeof for each literal
node chapter_05_Literal/23_null_undefined.js       # → null vs undefined walkthrough
node chapter_05_Literal/26_Literal_Number_all.js   # → every number literal form
node chapter_05_Literal/28_Template_Literal.js     # → backtick interpolation
```

---

### 22 — What is a Literal?

**Concept:** A *literal* is a value written **directly** in source code — `42`, `"hello"`, `true`, `null`. It's the raw value, not a variable referring to one.

**Why:** Every value in a JS program either comes from a literal you typed or was derived from one. Knowing the literal forms = knowing the JS type system.

**Q&A — why use this?**
- **Q: Why does `typeof null` return `"object"`?** A: 26-year-old JavaScript bug — preserved for backwards compatibility. Test against `null` with `value === null`, never `typeof`.
- **Q: Is `undefined` a literal?** A: Practically yes, but it's actually a property of the global object. Never assign `undefined` manually — let JS produce it.
- **Q: Why does `typeof` on a never-declared variable not throw?** A: `typeof` is the **only** operator that's TDZ-safe for *undeclared* identifiers. Returns `"undefined"`. (But TDZ for `let`/`const`? Still throws — see Ch 4.)

```mermaid
mindmap
  root((Literal))
    string
      'pramod'
      "pramod"
    number
      3.14
      42
    boolean
      true
      false
    null
      typeof = object 🐛
    undefined
      typeof = undefined
```

```js
// 22_Literal.js
let age = "pramod";        // string literal
let isStudent = true;      // boolean literal
let pi = 3.14;             // number literal
let nullValue = null;      // null literal
let undefinedValue;        // implicitly undefined

console.log(typeof age);            // "string"
console.log(typeof pi);             // "number"
console.log(typeof isStudent);      // "boolean"
console.log(typeof nullValue);      // "object"   ← JS bug, kept forever
console.log(typeof undefinedValue); // "undefined"
```

---

### 23 — null vs undefined

**Concept:** Both mean "no value", but: `undefined` = JS set it (uninitialized, missing return); `null` = developer set it on purpose ("explicitly empty").

**Why:** Mixing them up causes 90% of "Cannot read properties of undefined" bugs in test code — knowing which to expect tells you whether the bug is in your code or the SUT.

**Q&A — why use this?**
- **Q: When should *I* assign `null`?** A: When you want to deliberately **clear** a reference (`user = null`) or signal "intentionally empty". Never reach for `undefined` — let JS produce it.
- **Q: `null == undefined` → ?** A: `true` with `==`, `false` with `===`. Always use `===` to keep them distinct in test assertions.
- **Q: Playwright API returns null — what does that mean?** A: "Element/value asked for does not exist." Returns `undefined` → "API wasn't called" or "property missing". Different bug categories.

```mermaid
flowchart LR
    Var[Variable] --> Q{Who set it?}
    Q -->|JS automatically| U[undefined<br/>typeof = 'undefined']
    Q -->|Developer on purpose| N[null<br/>typeof = 'object' 🐛]
    U -.==.-> N
    U -.===.-x N
    style U fill:#fff3e0,stroke:#e65100
    style N fill:#e1f5fe,stroke:#01579b
```

```js
// 23_null_undefined.js
let userName;                         // JS sets it
console.log(userName);                // undefined
console.log(typeof userName);         // "undefined"

let profilePicture = null;            // developer sets it
console.log(profilePicture);          // null
console.log(typeof profilePicture);   // "object"  ← classic JS quirk

let a;
let b = null;
console.log(a == b);   // true  ← loose equality
console.log(a === b);  // false ← strict equality (different types)
```

| | `undefined` | `null` |
|:-:|:-:|:-:|
| Set by | JavaScript | Developer |
| `typeof` | `"undefined"` | `"object"` (bug) |
| Use case | "Not initialized yet" | "Cleared on purpose" |
| Assertion in tests | `expect(x).toBeUndefined()` | `expect(x).toBeNull()` |

---

### 26 — Number Literals (every form)

**Concept:** JS has one `number` type (IEEE-754 double) — but many ways to *write* a number: decimal, binary `0b`, octal `0o`, hex `0x`, exponential `1.5e3`, separators `1_000_000`, and `BigInt` (`123n`) for huge integers.

**Why:** Choosing the right literal form makes code self-documenting — `0xFF` says "byte mask", `0b1010_0001` says "bit flags", `1_000_000` says "one million, not ten thousand".

**Q&A — why use this?**
- **Q: When do I need BigInt?** A: When values exceed `Number.MAX_SAFE_INTEGER` (`2^53 - 1` = `9007199254740991`). Common in timestamps-with-nanoseconds, blockchain IDs, large DB IDs.
- **Q: `0 / 0` returns?** A: `NaN`. And `typeof NaN === "number"` (yes, really). Test with `Number.isNaN(x)` — **not** `x === NaN` (which is always `false`).
- **Q: Why is `0.1 + 0.2 !== 0.3`?** A: IEEE-754 float rounding. Compare with `Math.abs(a - b) < Number.EPSILON` for currency, or store cents as integers.

```mermaid
mindmap
  root((number))
    Integer
      decimal 42
      binary 0b1010
      octal 0o52
      hex 0x2A
    Float
      3.14
      1.5e3
      1.5e-3
    Readable
      1_000_000
      0xFF_FF
    BigInt
      123n
      BigInt&#40;42&#41;
    Special
      Infinity
      -Infinity
      NaN
```

```js
// 26_Literal_Number_all.js
let decimal = 42;
let binary  = 0b1010;          // 10
let octal   = 0o52;            // 42
let hex     = 0x2A;            // 42
let exp     = 1.5e3;           // 1500
let million = 1_000_000;       // 1000000 (ES2021 separator)
let big     = 123456789012345678901234567890n; // BigInt

console.log(1 / 0);                          // Infinity
console.log(0 / 0);                          // NaN
console.log(typeof NaN);                     // "number"
console.log(Number.MAX_SAFE_INTEGER);        // 9007199254740991
```

---

### 28 — Template Literals (Backticks)

**Concept:** A string wrapped in backticks `` ` `` that supports `${expression}` interpolation and real multi-line text — no `+` concatenation, no `\n` escapes.

**Why:** Building Playwright selectors, log lines, dynamic API URLs, and screenshot paths from variables is **everywhere** in test code. Template literals are the cleanest way to do it.

**Q&A — why use this?**
- **Q: When should I prefer backticks over `'…'` / `"…"`?** A: Any string with a variable inside, any multi-line string, any string with an embedded expression. Plain text? Either is fine — be consistent.
- **Q: Can I run code inside `${…}`?** A: Yes — any JS expression: `` `${a + b}` ``, `` `${user.toUpperCase()}` ``, `` `${Date.now()}` ``. Statements (if/for) don't fit, but ternaries do.
- **Q: Do backticks work in JSON?** A: No — JSON only allows `"…"`. Use backticks to **build** the JSON string in JS, then send it.

```mermaid
flowchart LR
    A[rowIndex = 3] --> T["`[data-row=&dollar;{rowIndex}]`"]
    B[columnName = 'email'] --> T
    T --> P[page.locator&#40;…&#41;]
    P --> C[Click cell]
    style T fill:#fff3e0,stroke:#e65100
```

```js
// 28_Template_Literal.js — typical Playwright/test-code use
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });
```

| Need | `'…'` / `"…"` | `` `…` `` |
|:-----|:-:|:-:|
| Plain text | ✅ | ✅ |
| `${variable}` interpolation | ❌ | ✅ |
| Multi-line without `\n` | ❌ | ✅ |
| Expression `${a + b}` | ❌ | ✅ |
| JSON-compatible | ✅ | ❌ |

---

## 📖 What's in Chapter 6 — Operators (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `30_Operator.js` | Assignment | `=` puts the right-hand value into the left-hand binding |
| `31_Arithmetic_OP.js` | Arithmetic | `+`, `-`, `*`, `/` on numbers |
| `32_Modulus_OP.js` | Modulus | `%` remainder — odd/even check (`n % 2 === 0`) |
| `33_Expo_OP.js` | Exponentiation | `**` power (`2 ** 3 === 8`) |
| `34_IQ.js` | Compound | `+=`, `-=`, `*=`, `/=`, `%=` shorthand |
| `35_Comparsion_OP.js` | Comparison | `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==` → boolean |
| `36_Comparsion_Strict_loose.js` | Loose vs strict | Why `42 == "42"` is `true` but `42 === "42"` is `false` |
| `37_IQ_Loose_Strict.js` | Interview quick-fire | `0 == ""`, `0 == "0"`, `"" == "0"` — transitivity broken |
| `38_Confusing_Comparsion.js` | 🔥 == vs === | NaN, `[]`, `null`/`undefined`, `typeof null`, `[] == ![]` |
| `39_Logical_Op.js` | Logical | `&&`, `\|\|`, `!` on booleans |
| `40_String_Con_Op.js` | String concat | `+` on strings glues them (`"Hi" + " Dev"`) |
| `41_Ternary_Op.js` | Ternary `? :` | One-line `if/else` — SLA checks, env-based URLs, nested ternaries |
| `42_Type_Op.js` | `typeof` | Type tag for any value (`"string"`, `"number"`, `"object"`, `"undefined"`) |
| `43_Incre_Decre_Op.js` | `++` / `--` | Pre vs post increment/decrement — when each is evaluated |
| `44_Null_Op.js` | Nullish `??` | Fallback **only** for `null`/`undefined` (unlike `\|\|`) |
| `45_Post_Increment.js` | Post `++` | `a++` returns old value, then increments |
| `46_IQ_INCREMENT_D.js` | Interview Q | What does `let r = a++` log? |
| `47_Advance_ID_.js` | 🔥 IQ Trap | `++a + ++a` — read-modify-write order in one expression |

### Key Concepts

```mermaid
mindmap
  root((Chapter 6 — Operators))
    Assignment
      =
      += -= *= /= %=
    Arithmetic
      + - * /
      % modulus
      ** power
    Comparison
      > < >= <=
      == loose
      === strict
      != !==
    Logical
      && AND
      || OR
      ! NOT
    String
      + concatenation
    Conditional
      ternary ? :
    Type
      typeof
    Inc/Dec
      ++ pre
      ++ post
      -- pre
      -- post
    Nullish
      ?? coalescing
```

### Run them

```bash
node chapter_06_Operator/31_Arithmetic_OP.js          # → sum, sub, mul, div
node chapter_06_Operator/32_Modulus_OP.js             # → 13 % 7, odd/even via % 2
node chapter_06_Operator/36_Comparsion_Strict_loose.js # → 42 == "42" vs 42 === "42"
node chapter_06_Operator/38_Confusing_Comparsion.js   # → full == vs === reference
node chapter_06_Operator/41_Ternary_Op.js             # → ternary, nested, SLA, env URLs
node chapter_06_Operator/43_Incre_Decre_Op.js         # → ++ / -- pre vs post
node chapter_06_Operator/44_Null_Op.js                # → ?? nullish fallback
node chapter_06_Operator/47_Advance_ID_.js            # → ++a + ++a IQ trap
```

---

### 30 — Operators Overview (Assignment, Arithmetic, Modulus, Exponent, Compound)

**Concept:** Operators take 1–2 values and return a new value. Assignment writes a binding (`=`); arithmetic does math (`+ - * / % **`); compound combines both (`x += 3` = `x = x + 3`).

**Why:** Every expression in a JS program is built from operators — count loops, totals, percentages, screenshot filenames with `+`, test data math. Get the precedence wrong and the assertion is wrong.

**Q&A — why use this?**
- **Q: What's `%` actually for in tests?** A: Even/odd row striping (`i % 2 === 0`), every-Nth iteration (`i % 10 === 0` → log progress), modular bucketing of test data.
- **Q: Why prefer `x += 1` over `x = x + 1`?** A: One read of `x`, one write — same outcome, fewer keystrokes, and `+=` works on strings too (`s += " more"`).
- **Q: Is `**` the same as `Math.pow`?** A: Same numeric result. `**` is the operator (ES2016+), `Math.pow(2, 3)` is the legacy function. Prefer `**`.

```mermaid
flowchart LR
    A["let x = 10"] --> B["x += 5  →  15"]
    B --> C["x *= 2  →  30"]
    C --> D["x %= 4  →  2"]
    D --> E["x ** 3  →  8"]
    style A fill:#e3f2fd,stroke:#01579b
    style E fill:#e8f5e9,stroke:#2e7d32
```

```js
// 31, 32, 33, 34 — combined
let a = 10, b = 3;
console.log(a + b);        // 13
console.log(a - b);        // 7
console.log(a * b);        // 30
console.log(a / b);        // 3.333...
console.log(a % b);        // 1   ← remainder
console.log(2 ** 10);      // 1024

// Compound assignment — same x, mutated step by step
let x = 10;
x += 10;  // 20
x -= 3;   // 17
x *= 2;   // 34
x /= 17;  // 2
x %= 2;   // 0
console.log(x);            // 0
```

---

### 35 — Comparison: `==` vs `===`

**Concept:** Comparison operators return `true`/`false`. `==` (loose) coerces types before comparing — `42 == "42"` is `true`. `===` (strict) requires same type AND same value — `42 === "42"` is `false`.

**Why:** 90% of mystery test failures around equality are caused by accidental loose equality. Strict (`===`) is the safe default; loose (`==`) is reserved for one specific trick.

**Q&A — why use this?**
- **Q: When is `==` ever the right choice?** A: One case only — `if (x == null)` matches both `null` and `undefined` in one shot. Everywhere else use `===`.
- **Q: Is `>=` strict or loose?** A: `>=`, `<=`, `>`, `<` always coerce — there is no strict version. That's why `null >= 0` is `true` even though `null == 0` is `false`.
- **Q: Why does Playwright's `expect()` not have this problem?** A: It compares with deep strict equality internally — but **your** code outside `expect()` (filters, IDs, conditions) is where `==` bites you.

```mermaid
flowchart TB
    Q[a vs b] --> T1{Same type?}
    T1 -->|No, use ==| C1[Coerce to same type] --> V1{Same value?}
    T1 -->|No, use ===| F1[false ❌]
    T1 -->|Yes| V2{Same value?}
    V1 -->|Yes| Tr1[true ✅]
    V1 -->|No| F2[false ❌]
    V2 -->|Yes| Tr2[true ✅]
    V2 -->|No| F3[false ❌]
    style F1 fill:#ffebee,stroke:#c62828
    style Tr1 fill:#fff3e0,stroke:#e65100
    style Tr2 fill:#e8f5e9,stroke:#2e7d32
```

```js
// 36_Comparsion_Strict_loose.js
console.log(42 == "42");   // true   — string "42" coerced to number 42
console.log(42 === "42");  // false  — different types, strict rejects
console.log(42 == "45");   // false  — coerced, values still differ

console.log(true == 1);    // true   — true coerces to 1
console.log(false == 0);   // true   — false coerces to 0
console.log(true == "1");  // true   — both → 1

console.log(5 !== "5");    // true   — strict not-equal (type differs)
```

| Operator | Coerces? | Use when |
|:--------:|:--------:|:---------|
| `===` | ❌ | Default — always |
| `!==` | ❌ | Default — always |
| `==` | ✅ | Only `x == null` (matches null + undefined) |
| `!=` | ✅ | Only `x != null` |
| `>`, `<`, `>=`, `<=` | ✅ (no strict variant) | Numeric comparisons — guard for `null`/`NaN` first |

---

### 38 — Confusing Comparisons (the hall of fame)

**Concept:** Loose equality (`==`) walks a coercion algorithm that produces results no human would predict. `"" == 0` is `true`; `null >= 0` is `true` but `null == 0` is `false`; `NaN == NaN` is `false`; `[] == ![]` is `true`. These aren't bugs — they're spec, and they will eat your tests.

**Why:** Interviewers love these. Test runners hit them in filter conditions. Knowing the eight patterns below means you stop debugging and start fixing.

**Q&A — why use this?**
- **Q: Why is `null >= 0` true but `null == 0` false?** A: `>=` coerces `null` to `0` (relational rule). `==` has a special rule: `null` only equals `null` and `undefined`. Two different algorithms.
- **Q: How do I correctly check for `NaN`?** A: `Number.isNaN(x)` or `Object.is(x, NaN)`. **Never** `x === NaN` — it's always `false` because NaN equals nothing, not even itself.
- **Q: What's `[] == ![]` and why is it `true`?** A: `![]` → `false` → `0`. `[]` → `""` → `0`. `0 == 0` → `true`. The exclamation flips the empty array to false before coercion catches up.

```mermaid
flowchart LR
    NaN["NaN == NaN<br/>→ false"] --> Use[Use Number.isNaN&#40;x&#41;]
    Null["null == undefined<br/>→ true"] --> Pair[Only null/undefined pair like this]
    Empty["'' == 0<br/>'0' == 0<br/>'' == '0'  ← false"] --> Trans[Transitivity broken 🤯]
    Arr["[] == ![]<br/>→ true"] --> Trick[![] → false → 0;  [] → '' → 0]
    style NaN fill:#ffebee,stroke:#c62828
    style Empty fill:#fff3e0,stroke:#e65100
    style Arr fill:#fce4ec,stroke:#ad1457
```

```js
// 38_Confusing_Comparsion.js — the eight patterns
console.log("" == 0);             // true   — "" → 0
console.log("0" == 0);            // true   — "0" → 0
console.log("" == "0");           // false  — both strings, no coercion
console.log(null == undefined);   // true   — special rule
console.log(null == 0);           // false  — null only == undefined
console.log(null >= 0);           // true   — relational coerces null → 0
console.log(NaN === NaN);         // false  — NaN never equals anything
console.log(Number.isNaN(NaN));   // true   — correct check
console.log([] == false);         // true   — [] → "" → 0; false → 0
console.log([] == ![]);           // true   — !![] flips, both sides → 0
console.log(typeof null);         // "object" — 26-year legacy bug
```

**Takeaway:** Always reach for `===` / `!==`. Reserve `==` for one pattern only: `if (x == null)`. Use `Number.isNaN` for NaN, `Object.is` for `-0` vs `+0` edge cases.

---

### 39 — Logical & String Concatenation

**Concept:** Logical operators (`&&`, `||`, `!`) combine booleans. `&&` returns the first falsy or the last value; `||` returns the first truthy or the last value; `!` flips. `+` on a string concatenates — `"Hi" + " Dev"` → `"Hi Dev"` (use template literals for anything fancier).

**Why:** Conditional rendering of test data (`name || "Anonymous"`), guarding optional config (`opts && opts.headless`), and building dynamic log lines all live here.

**Q&A — why use this?**
- **Q: What does `user.name || "Guest"` actually return?** A: `user.name` if it's truthy (non-empty string, non-zero, etc.); otherwise the string `"Guest"`. Common default-value idiom.
- **Q: Why is `0 || "fallback"` not `0`?** A: `0` is falsy, so `||` skips it. If you want "use 0 if it's 0, fallback only if null/undefined", use `??` (nullish coalescing — coming in file 44).
- **Q: When should I drop `+` for strings?** A: Any time more than one variable is involved. Template literals (`` `Hi ${name}` ``) win on readability and avoid type-coercion surprises (`1 + "2"` → `"12"`).

```mermaid
flowchart LR
    A["a && b"] --> A1{a truthy?}
    A1 -->|Yes| AR[return b]
    A1 -->|No| AF[return a]

    B["a || b"] --> B1{a truthy?}
    B1 -->|Yes| BR[return a]
    B1 -->|No| BF[return b]

    C["!a"] --> CR[flip boolean]
    style AR fill:#e8f5e9
    style BR fill:#e8f5e9
    style AF fill:#fff3e0
    style BF fill:#fff3e0
```

```js
// 39_Logical_Op.js + 40_String_Con_Op.js
let a = true;
let b = false;
console.log(a && b);   // false  — AND: both must be true
console.log(a || b);   // true   — OR: either is enough
console.log(!a);       // false  — NOT: flip

// short-circuit defaults
const userName = "" || "Guest";   // "Guest" — "" is falsy
const port     = 0  || 3000;      // 3000   — but use ?? if 0 is a valid value!

// string concatenation
let s = "Hi";
s += " Dev";
console.log(s);        // "Hi Dev"
```

---

### 41 — Ternary Operator `? :`

**Concept:** Ternary is a three-part expression — `condition ? whenTrue : whenFalse` — that **returns** a value. It's the only operator in JS that takes three operands and the cleanest way to assign one of two values based on a boolean.

**Why:** In test code, you reach for it constantly — pick the base URL by environment, pick `headless`/`headed` by CI flag, format pass/fail status, choose retry counts. Ternary keeps the decision and the assignment on one line.

**Q&A — why use this?**
- **Q: Ternary vs `if/else` — which when?** A: Use ternary when you're **returning or assigning** one of two values. Use `if/else` when you're running **side-effect statements** (logging multiple lines, mutating multiple vars). One value out → ternary. Multiple actions → `if/else`.
- **Q: Nested ternary — yes or no?** A: 2 levels max, formatted vertically (see `statusCode` example). Beyond that, switch to a lookup map or `if/else if`. Junior reviewers won't follow 4-deep nesting.
- **Q: Can I `await` inside a ternary?** A: Yes — `await (flag ? api.fast() : api.slow())`. The arms are expressions, so promises are fine.

```mermaid
flowchart LR
    C{condition} -->|true| T["return whenTrue"]
    C -->|false| F["return whenFalse"]
    T --> O[assign / log / return]
    F --> O
    style T fill:#e8f5e9,stroke:#2e7d32
    style F fill:#fff3e0,stroke:#e65100
```

```js
// 41_Ternary_Op.js — real test-code patterns

// 1) Environment-driven base URL
const env = "staging";
const baseUrl = env === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";

// 2) CI-aware browser mode
const isCI = true;
const browserMode = isCI ? "headless" : "headed";

// 3) SLA check formatted inline
const responseTime = 850, sla = 1000;
const slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";

// 4) Nested ternary — HTTP status category (format vertically!)
const statusCode = 404;
const category =
    statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
    statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);   // Status 404: Client Error
```

| Use ternary when | Use `if/else` when |
|:--|:--|
| Returning / assigning a value | Running multiple statements |
| One simple condition | Multiple branches or side effects |
| Result fits on 1–2 lines | Body needs `{ … }` |

---

### 42 — `typeof` Operator

**Concept:** `typeof x` returns a **string** naming the type of `x` — `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"bigint"`, `"symbol"`. It's a unary operator that never throws (even for undeclared identifiers).

**Why:** In assertions, fixtures, and guards you constantly need to ask "is this thing the type I expect?". `typeof` is the safe, fast answer for primitives — and the *only* way to test for `undefined` without a `ReferenceError` when the variable might not be declared.

**Q&A — why use this?**
- **Q: Why does `typeof []` return `"object"` and not `"array"`?** A: Arrays are objects under the hood. Use `Array.isArray(x)` to test for arrays — `typeof` can't tell array from plain object.
- **Q: Why does `typeof null` say `"object"`?** A: 26-year-old bug locked in for backwards compatibility. Test for null with `x === null`, never `typeof`.
- **Q: Is `typeof` safe on undeclared variables?** A: Yes — `typeof neverDeclared` → `"undefined"`. That makes it the *only* operator that doesn't throw a `ReferenceError` on a missing global. Useful for feature-detection (`typeof window !== "undefined"`).

```mermaid
mindmap
  root((typeof))
    "string"
      'pramod'
      "hi"
      `tpl`
    "number"
      42
      3.14
      NaN 🤯
    "boolean"
      true
      false
    "undefined"
      let x;
    "object"
      null 🐛
      []
      {}
    "function"
      ()=>{}
    "bigint"
      123n
```

```js
// 42_Type_Op.js
console.log(typeof "hello");   // "string"
console.log(typeof 123);       // "number"
console.log(typeof 31.4);      // "number"   ← no int/float split
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"   ← classic JS bug
console.log(typeof []);        // "object"   ← arrays ARE objects
console.log(typeof {});        // "object"
console.log(typeof function() {}); // "function"
console.log(typeof 123n);      // "bigint"
```

| To detect | Don't use | Use |
|:--|:--|:--|
| `null` | `typeof x` | `x === null` |
| Array | `typeof x` | `Array.isArray(x)` |
| `NaN` | `typeof x === "number"` | `Number.isNaN(x)` |
| Undefined global | bare reference (throws) | `typeof x === "undefined"` |

---

### 43 — Increment / Decrement (`++` / `--`)

**Concept:** `++` adds 1, `--` subtracts 1. The position matters: **pre** (`++a`) increments **first**, then returns the new value. **Post** (`a++`) returns the **old** value, then increments. Same logic for `--`.

**Why:** Loop counters, retry counts, version bumps, and a beloved class of interview puzzles. Mixing pre/post in one expression is the #1 way junior devs get the wrong number.

**Q&A — why use this?**
- **Q: When does pre vs post actually matter?** A: Only when the value is **used in the same expression**. Standalone `i++;` and `++i;` behave identically. Inside `let b = a++` vs `let b = ++a` — the value of `b` differs.
- **Q: Is `++` allowed on `const`?** A: No — `++`/`--` reassign the binding (`x = x + 1`), so `const` throws `TypeError: Assignment to constant variable`.
- **Q: Should I use `++` in tests or stick to `+= 1`?** A: Either works. `+= 1` reads slightly more explicit and avoids the pre/post mistake entirely. Many style guides ban `++` for this reason.

```mermaid
sequenceDiagram
    participant Code
    participant a as a (10)
    Note over a: let b = a++  (post)
    Code->>a: read a → 10
    Code-->>Code: b = 10
    Code->>a: a = a + 1 → 11
    Note over a: a is now 11, b is 10

    Note over a: let b = ++a  (pre)
    Code->>a: a = a + 1 → 12
    Code->>a: read a → 12
    Code-->>Code: b = 12
    Note over a: a is now 12, b is 12
```

```js
// 43_Incre_Decre_Op.js  +  45_Post_Increment.js  +  46_IQ_INCREMENT_D.js

// Post-decrement: return OLD, then decrement
let a = 10;
let b = a--;
console.log(b);   // 10  ← old value
console.log(a);   //  9  ← decremented after

// Post-increment: return OLD, then increment
let a_post = 10;
let p = a_post++;
console.log(a_post); // 11
console.log(p);      // 10

// Interview: what does this log?
let x = 34;
let result = x++;
console.log(result); // 34   ← post returns old
console.log(x);      // 35
```

| Form | Returns | Then |
|:----:|:--------|:-----|
| `++a` | new value (a+1) | a is incremented |
| `a++` | old value (a) | a is incremented |
| `--a` | new value (a-1) | a is decremented |
| `a--` | old value (a) | a is decremented |

---

### 44 — Nullish Coalescing `??`

**Concept:** `a ?? b` returns `a` **unless** `a` is `null` or `undefined`, in which case it returns `b`. Unlike `||`, it does **not** fall through on other falsy values like `0`, `""`, or `false`.

**Why:** When `0` or `""` is a **valid** value (port number, search query, page index) but you still want to default `null`/`undefined`, `||` gives the wrong answer. `??` is the precise fix that ships in every modern config and options object.

**Q&A — why use this?**
- **Q: `??` vs `||` — when to switch?** A: Use `??` when `0`/`""`/`false` are valid values you want to keep. Use `||` when *any* falsy means "fall back" (typical for object/string defaults).
- **Q: Can I combine `??` with `&&` or `||`?** A: Only with parentheses — `a ?? b || c` is a SyntaxError. Write `(a ?? b) || c` explicitly. JS forces the parens so the precedence is unambiguous.
- **Q: Does `??` work on `NaN`?** A: No — `NaN` is **not** nullish. `NaN ?? "fallback"` returns `NaN`. Only `null` and `undefined` trigger the fallback.

```mermaid
flowchart LR
    A["a ?? b"] --> Q{a is null<br/>or undefined?}
    Q -->|Yes| RB[return b]
    Q -->|No| RA[return a]
    RA --> Note0[0, '', false → kept ✅]
    style RA fill:#e8f5e9,stroke:#2e7d32
    style RB fill:#fff3e0,stroke:#e65100
```

```js
// 44_Null_Op.js
const amul = null;
const milk = amul ?? "nandani milk";
console.log(milk);            // "nandani milk"

// The classic || vs ?? trap
const port_or = 0 || 3000;    // 3000  ← || treats 0 as falsy (wrong if 0 valid)
const port_nc = 0 ?? 3000;    //    0  ← ?? keeps 0 ✅

const query_or = "" || "default"; // "default" ← may not be what you want
const query_nc = "" ?? "default"; //        "" ← keeps empty string ✅
```

| Value | `value \|\| "fallback"` | `value ?? "fallback"` |
|:-----:|:-----------------------:|:----------------------:|
| `null` | `"fallback"` | `"fallback"` |
| `undefined` | `"fallback"` | `"fallback"` |
| `0` | `"fallback"` ❌ | `0` ✅ |
| `""` | `"fallback"` ❌ | `""` ✅ |
| `false` | `"fallback"` ❌ | `false` ✅ |
| `NaN` | `"fallback"` | `NaN` |

---

### 47 — Pre/Post Mixed in One Expression (🔥 IQ Trap)

**Concept:** When `++a` and/or `a++` appear **inside the same expression**, each sub-expression evaluates left-to-right: each `++a` mutates `a` and reads the **new** value; each `a++` reads the **old** value and mutates `a`. Track `a` step by step.

**Why:** Pure interview-trap territory — and shows up in real bugs when someone "cleverly" combines a counter increment with a use of the counter. The cure is to never write expressions like this in production. The skill is reading them when other people did.

**Q&A — why use this?**
- **Q: `let a = 10; console.log(++a + ++a)` — what's logged?** A: `23`. Step 1: `++a` → `a = 11`, returns `11`. Step 2: `++a` → `a = 12`, returns `12`. Sum: `11 + 12 = 23`.
- **Q: `let a = 10; console.log(a++ + ++a)` — what's logged?** A: `22`. Step 1: `a++` returns `10`, then `a = 11`. Step 2: `++a` → `a = 12`, returns `12`. Sum: `10 + 12 = 22`.
- **Q: Should I ever write code like this?** A: No. If a reviewer needs a whiteboard to follow your expression, rewrite as separate `a += 1` lines.

```mermaid
sequenceDiagram
    participant E as Expression
    participant a as a (10)
    Note over E,a: ++a + ++a
    E->>a: ++a → a = 11
    a-->>E: 11
    E->>a: ++a → a = 12
    a-->>E: 12
    E-->>E: 11 + 12 = 23
    Note over a: final a = 12
```

```js
// 47_Advance_ID_.js — the three IQ classics
// Track a step by step. Don't guess.

let a = 10;
console.log(++a + ++a);  // 23   (a → 11, then 12; 11+12)
console.log(a);          // 12

let b = 10;
console.log(b++ + ++b);  // 22   (b++ → 10 with b→11; ++b → 12; 10+12)
console.log(b);          // 12

let c = 10;
console.log(++c + c);    // 22   (++c → 11 then read c → 11; 11+11)
console.log(c);          // 11
```

**Takeaway:** When you see mixed `++`/`--` in an expression, replace each occurrence in your head with its pre/post rule, mutate the variable as you go, and **never write this code yourself** — use `a += 1` lines and reference `a` afterwards.

---

## 📖 What's in Chapter 7 — If / Else (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `48_IF_ESLE.js` | Basic if/else | Vote eligibility with `age > 18` |
| `49_If_elseif_else.js` | Else-if ladder | Grade scoring (A → F) |
| `50_REAL_IF_ELSE.js` | Nested if/else | Login check → role-based access (admin / editor / viewer) |
| `51_API_IF_ELSE.js` | API branching | Status-code-driven console messages |
| `52_IQ_IF_ELSE.js` | Truthy vs falsy | Which values count as `true` / `false` in an `if` |
| `53_IF_ELSE_real.js` | Logical + if/else | Combine `&&` / `\|\|` with nested conditions (auth logic) |
| `54_IQ.js` | One-line if | `if` without braces — when it works |
| `55_IE.js` | Empty if | A bare `if (true) { }` block |
| `56_IQ_EVEN_ODD.js` | Even / odd | `% 2 === 0` check |
| `57_Grade_Calc.js` | Grade calculator | Clean else-if ladder for marks → A–F |
| `58_LEAP_YEAR.js` | Leap year | `% 4 && !% 100 \|\| % 400` rule |

### Key Concepts

```mermaid
mindmap
  root((Chapter 7 — If / Else))
    Basic
      if
      else
    Ladder
      if ... else if ... else
    Nested
      if inside if
    Truthy
      non-zero numbers
      non-empty strings
      objects / arrays
    Falsy
      0
      ""
      null
      undefined
      NaN
    Logical combo
      &&  both true
      ||  either true
```

### Run them

```bash
node chapter_07_If_else/48_IF_ESLE.js           # → "You are allowed to vote!"
node chapter_07_If_else/49_If_elseif_else.js    # → grade for score = 78
node chapter_07_If_else/50_REAL_IF_ELSE.js      # → role-based welcome message
node chapter_07_If_else/51_API_IF_ELSE.js       # → API status messages
node chapter_07_If_else/52_IQ_IF_ELSE.js        # → truthy / falsy surprise
node chapter_07_If_else/53_IF_ELSE_real.js     # → "Allowed to enter"
node chapter_07_If_else/56_IQ_EVEN_ODD.js      # → "7 is Odd"
node chapter_07_If_else/57_Grade_Calc.js       # → "Grade: B"
node chapter_07_If_else/58_LEAP_YEAR.js        # → "2024 is a Leap Year"
```

---

### 48 — Basic If / Else

**Concept:** An `if` statement evaluates a condition. If the condition is *truthy*, the first block runs; otherwise the `else` block runs. It's the simplest form of control flow.

**Why:** Every program needs decisions — "is the user logged in?", "is the API 200?", "is the price > budget?". If/else is the first tool for that.

```js
// 48_IF_ESLE.js
let age = 20;
if (age > 18) {
    console.log("You are allowed to vote!");
} else {
    console.log("You are not allowed to vote!");
}
```

---

### 52 — Truthy vs Falsy

**Concept:** In a boolean context (`if`, `while`, `&&`, `||`), JS coerces values to `true` or `false`. "Falsy" values are `0`, `""`, `null`, `undefined`, `NaN`, and `false`. Everything else is "truthy".

**Why:** Debugging "why didn't my if-block run?" usually comes down to a falsy value you didn't expect — especially `0` or `""`.

```js
// 52_IQ_IF_ELSE.js
if ("hello") console.log("String is truthy");   // prints
if (42)      console.log("Number is truthy");   // prints
if ({})      console.log("Empty object is truthy!"); // prints
if ([])      console.log("Empty array is truthy!");  // prints

if ("")      console.log("Won't print");          // "" is falsy
if (0)       console.log("Won't print");          // 0 is falsy
if (null)   console.log("Won't print");          // null is falsy
```

| Value | Truthy? |
|-------|:-------:|
| `"hello"` | ✅ |
| `42` | ✅ |
| `-1` | ✅ |
| `0` | ❌ |
| `""` | ❌ |
| `" "` | ✅ |
| `null` | ❌ |
| `undefined` | ❌ |
| `NaN` | ❌ |
| `{}` | ✅ |
| `[]` | ✅ |

---

### 58 — Leap Year

**Concept:** A year is a leap year if it is divisible by 4 **and not** divisible by 100, **or** it is divisible by 400.

**Why:** Classic interview question that tests understanding of compound boolean logic and operator precedence.

```js
// 58_LEAP_YEAR.js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}
```

---

## 📖 What's in Chapter 8 — Switch Statement (Available Now)

> 🔗 **Full walk-through:** [chapter_08_Switch_Statement/README.md](./chapter_08_Switch_Statement/README.md)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `59_Switch.js` | Switch basics | `switch (expr)` with `case` and `default` |
| `60_No_Break.js` | Fall-through | What happens when you forget `break` |
| `61_Default.js` | `default` | The catch-all branch |
| `62_REAL_TIME_EXAMPLE.js` | Real-world | Status / role / env routing with `switch` |
| `63_Switch_Group.js` | Grouped cases | Multiple `case` labels sharing one body |
| `64_IQ.js` | Interview Q | Switch trap #1 |
| `65_IQ2.js` | Interview Q | Switch trap #2 |
| `66_IQ3.js` | Interview Q | Switch trap #3 |
| `67_IQ4.js` | Interview Q | Switch trap #4 |

### Key Concepts

```mermaid
mindmap
  root((Chapter 8 — Switch))
    switch
      expression
      strict ===
    case
      value match
      break to exit
      grouped cases
    default
      fallback
    fall-through
      missing break
```

---

## 📖 What's in Chapter 9 — User Input (Available Now)

> 🔗 **Full walk-through:** [chapter_09_UserInput/README.md](./chapter_09_UserInput/README.md)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `68_User_Input.js` | `prompt()` (browser) | Browser-only API — fails in Node with `ReferenceError` |
| `69_Node_readline.js` | Node `readline` | Built-in module, async `rl.question()` for terminal input |
| `70_prompt_sync.js` | `prompt-sync` | npm package for synchronous terminal input |

### Key Concepts

```mermaid
mindmap
  root((Chapter 9 — User Input))
    Browser
      prompt&#40;&#41;
      not in Node
    Node built-in
      readline
      async callback
      rl.close&#40;&#41;
    npm package
      prompt-sync
      synchronous
      one-liner
    Always
      input is string
      Number&#40;input&#41; to parse
```

| Approach | Where it runs | Style | Needs install |
|----------|---------------|-------|:--:|
| `prompt()` | Browser only | Sync | ❌ (built-in to browser) |
| `readline` | Node | Async (callback) | ❌ (built-in to Node) |
| `prompt-sync` | Node | Sync | ✅ (`npm i prompt-sync`) |

---

## 📖 What's in Chapter 10 — Loops (Available Now)

> 🔗 **Full walk-through:** [chapter_10_Loops/README.md](./chapter_10_Loops/README.md)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `71_For_loop.js` | For loop intro | Why loops exist — replacing repeated `console.log` lines |
| `72_For_loop.js` | For with `<=` | `i = 0; i <= 5` runs 6 times (0 through 5) |
| `73_For_Loop2.js` | Loop boundaries | `i <= 10` vs `i < 10` — 11 vs 10 iterations |
| `74_IQ.js` | Loop + if/else | Combine loops with conditional branching |
| `75_For_OF_IN_EACH.js` | while retry | while loop as a retry mechanism |
| `76_While.js` | while loop | Three parts: init, condition, update |
| `77_Do_While.js` | do-while | Guaranteed one execution regardless of condition |
| `78_Do_While.js` | do-while retry | Retry with do-while (always runs at least once) |
| `79_IQ.js` | while countdown | Decrementing loop — `i--` instead of `i++` |
| `80_IQ.js` | do-while trap | Do-while off-by-one: runs once even when condition is false |
| `81_IQ.js` | continue in for | `continue` skips current iteration, next one runs |
| `82_IQ.js` | do-while infinite | do-while with always-true condition |

### Key Concepts

```mermaid
mindmap
  root((Chapter 10 — Loops))
    for
      init; condition; update
      i++ increment
      i-- decrement
    while
      checks condition first
      might never run
    do-while
      runs at least once
      checks after body
    break
      exits loop early
    continue
      skips current iteration
```

### Run them

```bash
node chapter_10_Loops/71_For_loop.js          # → 1 to 10 + introduction
node chapter_10_Loops/72_For_loop.js          # → 0, 1, 2, 3, 4, 5
node chapter_10_Loops/73_For_Loop2.js         # → 0 to 10 (11 iterations)
node chapter_10_Loops/74_IQ.js               # → for + if/else
node chapter_10_Loops/75_For_OF_IN_EACH.js   # → while retry
node chapter_10_Loops/76_While.js            # → while countdown
node chapter_10_Loops/77_Do_While.js         # → do-while guaranteed run
node chapter_10_Loops/78_Do_While.js         # → do-while retry
node chapter_10_Loops/79_IQ.js               # → 5, 4, 3, 2, 1
node chapter_10_Loops/80_IQ.js               # → 0 (do-while off-by-one)
node chapter_10_Loops/81_IQ.js               # → 0, 2 (continue skips 1)
node chapter_10_Loops/82_IQ.js               # → 1 only (infinite if not careful)
```

### 71 — For Loop

**Concept:** A `for` loop replaces manually repeating `console.log` calls. It has three parts: **initialization** (`let i = 0`), **condition** (`i < N`), and **update** (`i++`). The body runs while the condition is true.

**Why:** Anywhere you need to iterate a known number of times — processing test data rows, retrying a flaky API, generating N test values.

```js
// 71_For_loop.js — the "why loops" file
console.log(1);
console.log(2);
console.log(3);
// ... imagine 100 lines ...
console.log(10);

// For Loop — helps you repeat a block of code
```

```js
// 72_For_loop.js — basic for with <=
for (let i = 0; i <= 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4, 5
}
```

| File | `for` loop | Iterations | Output |
|:--|:--|:--:|:--|
| `72_For_loop.js` | `i = 0; i <= 5; i++` | 6 | 0, 1, 2, 3, 4, 5 |
| `73_For_Loop2.js` | `i = 0; i <= 10; i++` | 11 | 0 to 10 |
| `74_IQ.js` | `i = 0; i < 18; i++` + if/else | 18 | conditional gift logic |

**Key pattern — three parts of a for loop:**

```mermaid
flowchart LR
    I["init<br/>let i = 0"] --> C{"condition<br/>i < 5 ?"}
    C -->|true| B[run body]
    B --> U["update<br/>i++"]
    U --> C
    C -->|false| D[Done ✅]
    style I fill:#e3f2fd,stroke:#01579b
    style C fill:#fff3e0,stroke:#e65100
    style U fill:#f3e5f5,stroke:#7b1fa2
```

### 76 — While Loop

**Concept:** `while (condition) { … }` checks the condition **before** each iteration. If the condition is already false, the body **never runs**. Three essential parts: init (`let i = 0`), condition (`i < 5`), update (`i++`).

**Why:** Use when you don't know how many iterations you need — retrying an API until it succeeds, reading lines until EOF, polling until a condition is met.

```js
// 76_While.js — the three-part pattern
let attempt = 0;          // init
while (attempt < 3) {     // condition
    console.log(attempt);
    attempt++;            // update
}

let modi = 1;
while (modi <= 15) {
    console.log("Modi will do 15+ years");
    modi++;
}
```

### 77 — Do-While Loop

**Concept:** `do { … } while (condition)` runs the body **at least once** — the condition is checked *after* the body. Guaranteed one execution regardless of the condition.

**Why:** "Try once, then check if you need to retry" — perfect for login prompts, data fetch + retry, or any action that must happen at least once.

```js
// 77_Do_While.js — runs once even when a >= 10
let a = 10;
do {
    console.log(a);   // prints 10
    a++;
} while (a < 10);     // condition already false, but body ran

// 78_Do_While.js — retry pattern
let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);
```

| Loop type | Condition check | Minimum runs | When to use |
|:--|:--|:--:|:--|
| `for` | Before each iteration | 0 | Known iteration count |
| `while` | Before each iteration | 0 | Unknown count, maybe zero |
| `do-while` | After each iteration | **1** | Must run at least once |

### 79–80 — IQ: Countdown & Off-by-One

**Concept:** `i--` decrements the counter — same loop, different direction. Do-while off-by-one: when the condition starts false, it still executes once (the body prints, then the condition fails).

```js
// 79_IQ.js — countdown
let i = 5;
while (i > 0) {
    console.log(i);   // 5, 4, 3, 2, 1
    i--;
}

// 80_IQ.js — do-while off-by-one trap
let i = 0;
do {
    console.log(i);   // prints 0 (once), then condition fails
    i--;
} while (i > 0);      // i is -1, condition is false → loop ends
```

### 81 — Continue

**Concept:** `continue` skips the **rest of the current iteration** and jumps to the next one. Unlike `break`, it doesn't exit the loop — it only skips.

```js
// 81_IQ.js
for (let i = 0; i < 3; i++) {
    if (i === 1) continue;    // skip the rest when i is 1
    console.log(i);           // 0, 2
}
```

### 82 — Do-While Always-True Trap

**Concept:** A do-while loop where the condition is always true will run **forever** (infinite loop) unless you `break` or it's intentionally bounded.

```js
// 82_IQ.js — pattern: runs at least once
let n = 1;
do {
    console.log(n);   // prints 1
} while (n < 3);      // 1 < 3 → true → runs again... wait, there's no update!
```

**Takeaway:** Always include an update (`n++`) or a `break` inside a loop body. No update = infinite loop = frozen program.

---

## 📖 What's in Chapter 11 — Arrays (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `83_Arrays.js` | Arrays basics | Literal `[]`, index access, `length`, mixed types, `undefined` out-of-bounds |
| `84_Arrays.js` | Array creation | Array literal, `new Array()`, `Array.of()`, `Array.from()` |
| `85_Access_Array.js` | Access & modify | Bracket notation `[]`, `.at()` with negative index, modifying in place |
| `86_Arrays_Adding_Remove.js` | Add/remove | `push`, `pop`, `unshift`, `shift` |
| `87_Adding_Remove2.js` | Splice | `splice(start, deleteCount, ...items)` — add, remove, replace at any position |
| `88_REAL_Example.js` | Real-world | Browser list manipulation — iterate, search, remove |
| `89_Searching.js` | Searching | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex` |
| `90_Iterate.js` | Iteration | `for`, `for...of`, `forEach`, `for...in`, `.entries()` |
| `91_Transform_Array.js` | Transform | `map`, `filter`, `reduce`, `flat` |
| `92_Arrays.js` | Sorting | `sort()` — default lexicographic vs numeric compare function |
| `93_Array_slicing.js` | Slice vs splice | `slice(start, end)` extracts; `splice()` mutates — know the difference |
| `94_concat_array.js` | Combine arrays | `concat()`, spread `...`, and `join()` for string output |
| `95_Array_checking.js` | Validation | `Array.isArray()`, `every()`, `some()` — check all or any |
| `96_Transform_array.js` | Numeric sort | `sort((a, b) => a - b)` for ascending / descending numbers |

### Key Concepts

```mermaid
mindmap
  root((Chapter 11 — Arrays))
    Creation
      literal []
      new Array()
      Array.of()
      Array.from()
    Access
      bracket [0]
      .at(-1)
      modify
    Add/Remove
      push (end)
      pop (end)
      unshift (start)
      shift (start)
      splice (any)
    Search
      indexOf
      lastIndexOf
      includes
      find
      findIndex
    Iterate
      for loop
      for...of
      forEach
      for...in
      .entries()
    Transform
      map
      filter
      reduce
      flat
    Sort
      sort()
      compare function
    Slice
      slice
      splice
    Combine
      concat
      spread ...
      join
    Check
      Array.isArray
      every
      some
```

### Run them

```bash
node chapter_11_Arrays/83_Arrays.js               # → array basics, index, mixed types
node chapter_11_Arrays/84_Arrays.js               # → Array constructor, Array.of, Array.from
node chapter_11_Arrays/85_Access_Array.js         # → access, .at(-1), modify
node chapter_11_Arrays/86_Arrays_Adding_Remove.js # → push, pop, unshift, shift
node chapter_11_Arrays/87_Adding_Remove2.js       # → splice add/remove/replace
node chapter_11_Arrays/88_REAL_Example.js         # → real browser list example
node chapter_11_Arrays/89_Searching.js            # → indexOf, includes, find, findIndex
node chapter_11_Arrays/90_Iterate.js              # → 5 ways to iterate arrays
node chapter_11_Arrays/91_Transform_Array.js      # → map, filter, reduce, flat
node chapter_11_Arrays/92_Arrays.js               # → sort default vs numeric
node chapter_11_Arrays/93_Array_slicing.js        # → slice vs splice
node chapter_11_Arrays/94_concat_array.js         # → concat, spread, join
node chapter_11_Arrays/95_Array_checking.js       # → Array.isArray, every, some
node chapter_11_Arrays/96_Transform_array.js      # → sort with compare function
```

### 83 — Arrays Basics

**Concept:** Arrays are ordered collections of values. Use literal syntax `[]` (preferred). Index starts at `0`. `length` gives count. Out-of-bounds access returns `undefined`. Arrays can hold mixed types.

**Why:** Test data comes in lists — test names, element handles, results, URLs. Arrays are the first data structure every SDET needs.

```js
// 83_Arrays.js
let fruits = [];                         // empty array
let fruits_fresh = ["apple", "banana", "cherry"];  // length = 3, index 0-2

let arr = [10, 20, 30, 40];
console.log(arr[0]);   // 10
console.log(arr[3]);   // 40
console.log(arr[4]);   // undefined (out of bounds)

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null];    // JS arrays can hold any type
```

### 84 — Array Creation Methods

**Concept:** Beyond the literal `[]`, you can create arrays with `new Array(n)` (pre-allocates `n` empty slots), `Array.of(...items)` (safe constructor), and `Array.from(iterable)` (converts strings/iterables to arrays).

**Why:** `Array.from("hello")` → `["h","e","l","l","o"]` is perfect for splitting strings. `new Array()` with a single number argument creates sparse arrays — a common trap. Use `Array.of()` when you want predictable behavior.

```js
// 84_Arrays.js
let browsers = ["Chrome", "Firefox", "Safari"];        // literal (preferred)
let scores = new Array(3);                             // [empty × 3]
let scores2 = new Array(1, 2, 3);                      // [1, 2, 3]
let numbers = new Array(100, 200, 300, 400);           // [100, 200, 300, 400]
let test = Array.of(10, 20, 30, 40, 50);               // [10, 20, 30, 40, 50]
let chars = Array.from("hello");                       // ["h", "e", "l", "l", "o"]
```

| Method | Use when | Trap |
|:--|:--|:--|
| `[]` | **Always** (default) | None |
| `new Array(n)` | Pre-allocate known size | `new Array(3)` = sparse, not `[3]` |
| `Array.of(...)` | Safe constructor | No trap — always works as expected |
| `Array.from(iterable)` | Convert string/iterable | Only works on iterable objects |

### 85 — Access & Modify (with `.at()`)

**Concept:** Use bracket notation `[index]` for access and assignment. `.at(index)` is the modern alternative that supports **negative indices** (`.at(-1)` = last element).

**Why:** Negative indexing saves `arr[arr.length - 1]` boilerplate. In test code, `.at(-1)` cleanly grabs the last result, last error, last screenshot — without calculating length.

```js
// 85_Access_Array.js
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);       // "pass"
console.log(statuses.at(-1));   // "skip" (last element)
console.log(statuses.at(-2));   // "fail"

statuses[1] = "blocked";        // modify in place
console.log(statuses);          // ["pass", "blocked", "skip"]
```

### 86 — Add & Remove (Queue/Stack Operations)

**Concept:** Four methods that work on the ends of arrays:
- `push(x)` — add to **end** (stack push)
- `pop()` — remove from **end** (stack pop)
- `unshift(x)` — add to **start** (queue enqueue)
- `shift()` — remove from **start** (queue dequeue)

**Why:** Test queues (next test to run), result stacks (latest result first), retry lists — these four operations cover 90% of array mutations in automation.

```js
// 86_Arrays_Adding_Remove.js
let arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.push(5, 6);     // [1, 2, 3, 5, 6]
arr.unshift(0);     // [0, 1, 2, 3, 5, 6]
arr.shift();        // [1, 2, 3, 5, 6]
```

### 87 — Splice (Add, Remove, Replace at Any Position)

**Concept:** `arr.splice(start, deleteCount, ...itemsToAdd)` — the Swiss Army knife. Insert at `start` (deleteCount=0), remove at `start` (deleteCount=N), or replace (deleteCount=M + itemsToAdd).

**Why:** When you need to surgically modify test data — remove a flaky test from a suite, inject a fixture at a specific position, replace expected values mid-run.

```js
// 87_Adding_Remove2.js
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 10, 20);   // delete 2 items at index 1, insert 10, 20
console.log(arr);           // [1, 10, 20, 4, 5, 6]
```

| Splice call | Effect | Result |
|:--|:--|:--|
| `splice(2, 0, 99)` | Insert `99` at index 2 | `[1, 2, 99, 3, 4, 5, 6]` |
| `splice(2, 1)` | Remove 1 item at index 2 | `[1, 2, 4, 5, 6]` |
| `splice(2, 1, 99)` | Replace item at index 2 | `[1, 2, 99, 4, 5, 6]` |

### 89 — Searching Arrays

**Concept:** Six search methods — `indexOf`/`lastIndexOf` (exact match, return index or `-1`), `includes` (boolean), `find`/`findIndex` (first match by predicate), `findLast`/`findLastIndex` (search from end).

**Why:** Finding a specific test result, locating an element in a list, checking if a browser is supported — searching is the most common array operation in test code.

```js
// 89_Searching.js
let results = ["pass", "fail", "pass", "error", "fail"];
results.indexOf("fail");            // 1 (first occurrence)
results.lastIndexOf("fail");        // 4 (search from end)
results.includes("error");          // true
results.includes("skip");           // false

let nums = [10, 25, 30, 45];
nums.find(n => n > 20);             // 25 (first matching value)
nums.findIndex(n => n > 20);        // 1 (index of first match)
nums.findLast(n => n > 20);         // 45 (last matching value)
nums.findLastIndex(n => n > 20);    // 3 (index of last match)
```

### 90 — Five Ways to Iterate

**Concept:** JavaScript offers five iteration patterns — classic `for` (full control), `for...of` (cleanest for values), `forEach` (callback style, has index), `for...in` (iterates indices as strings), `.entries()` (index + value pairs with destructuring).

**Why:** Different patterns for different jobs: `for...of` for simple reads, `forEach` for side effects with index, `for` when you need to `break`/`continue`, `.entries()` when you need both index and value cleanly.

```js
// 90_Iterate.js
let tests = ["login", "checkout", "search"];

// 1) Classic for — full control, can break/continue
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// 2) for...of — cleanest for values only
for (let test of tests) {
    console.log(test);
}

// 3) forEach — callback, has index, cannot break
tests.forEach((item, index) => {
    console.log(item, index);
});

// 4) for...in — iterates indices (as strings!)
for (let i in tests) {
    console.log(i, tests[i]);
}

// 5) .entries() — index + value pairs (preferred for indexed iteration)
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
```

| Method | Break/Continue | Index | Best for |
|:--|:--:|:--:|:--|
| `for` loop | ✅ | ✅ | When you need to exit early |
| `for...of` | ✅ | ❌ | Simple value iteration |
| `forEach` | ❌ | ✅ | Functional style, side effects |
| `for...in` | ✅ | ✅ (as strings) | Objects, not recommended for arrays |
| `.entries()` | ✅ | ✅ | When you need both index and value |

### 91 — Transform (map, filter, reduce, flat)

**Concept:** Higher-order array methods that return **new arrays** (no mutation):
- `map(fn)` — transform each element (same length output)
- `filter(fn)` — keep elements that pass a test (shorter or same length)
- `reduce(fn, initial)` — accumulate to a single value
- `flat()` — flatten nested arrays by one level (or `flat(depth)` for more)

**Why:** These are the workhorses of test data processing — transforming raw API responses into clean test data, filtering for specific conditions, aggregating results into summaries.

```js
// 91_Transform_Array.js
let scores = [45, 82, 91, 60, 73];

// map — transform every element
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);   // ["Fail", "Pass", "Pass", "Fail", "Pass"]

// filter — keep passing elements
let passing = scores.filter(s => s > 70);
console.log(passing);  // [82, 91, 73]

// reduce — accumulate to single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);    // 351

// flat — flatten nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());  // [1, 2, 3, 4, 5]
```

| Method | Returns | Length | Mutation |
|:--|:--|:--|:--|
| `map(fn)` | New array | Same as original | ❌ |
| `filter(fn)` | New array | ≤ original | ❌ |
| `reduce(fn, init)` | Single value | N/A | ❌ |
| `flat(depth)` | New array | Depends | ❌ |

**Chaining example** — the pattern you'll use most in test code:

```js
let results = [
    { name: "Login", status: "pass", time: 1.2 },
    { name: "Checkout", status: "fail", time: 3.4 },
    { name: "Search", status: "pass", time: 0.8 },
];

let passed = results
    .filter(r => r.status === "pass")    // keep only passing
    .map(r => r.name)                     // extract names
    .sort();                              // sort alphabetically

console.log(passed);  // ["Login", "Search"]
```

---

## 📖 What's in Chapter 12 — Functions (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `96_Functions.js` | Function basics | Define a function with `function`, call it by name |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 | No parameters, no return value — side-effect only |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 | With parameters, no return — logs but gives `undefined` |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 | No parameters, with return — produces a value |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 | With parameters, with return — the most common pattern |
| `101_Template_literal.js` | Template literals in functions | Return interpolated strings from a function |
| `102_Fn_Expression.js` | Function expressions | Assign a function to a variable — `const fn = function() {}` |
| `103_Arrow_Fn.js` | Arrow functions | Compact syntax: `const fn = (x) => x * 2` |
| `104_Arrow_func_realone.js` | Arrow real-world | Status-code validator in one line |
| `105_IIFE.js` | IIFE | Immediately invoked — no separate call needed |
| `106_Default_param.js` | Default parameters | Fallback values in the function signature |
| `107_IQ.js` | Interview Q | Return values with template literals |
| `108_Rest_Param.js` | Rest parameters | Gather remaining args with `...args` |
| `109_IQ.js` | Interview Q | HTTP status categories & implicit return |
| `110_Spread_IQ.js` | Spread vs Rest | `...` in call (spread) vs in definition (rest) |
| `111_Scope_IQ.js` | Scope basics | Global vs local variable access |
| `112_IQ.js` | Interview Q | Nested scope & blocked scope |
| `113_Clouser.js` | Closures | Inner function retains outer scope |
| `114_clouser.js` | Closure counter | Private state via closure |
| `115_API_Real_Clouser.js` | Real-world closure | Retry tracker with private `attempts` |
| `116_Higher_order.js` | Higher-Order Functions | Functions that take or return functions |
| `117_Pure_fn.js` | Pure functions | Predictable, no side effects |

### Key Concepts

```mermaid
mindmap
  root((Chapter 12 — Functions))
    Declaration
      function name() {}
    Types
      Type 1: no param, no return
      Type 2: param, no return
      Type 3: no param, return
      Type 4: param, return
    Expression
      const fn = function() {}
    Arrow
      const fn = () => {}
      implicit return
    Template literals
      return `Hello ${name}`
    IIFE
      (function(){})()
    Default params
      fn(a = 1)
    Rest / Spread
      ...args
    Scope
      global / local / block
    Closures
      inner remembers outer
    Higher-Order
      takes or returns fn
    Pure functions
      same input → same output
```

### Run them

```bash
node Chapter_12_Functions/96_Functions.js                # → "Hi, how are you?"
node Chapter_12_Functions/97_Type1_Fn_Basic_Functions.js # → undefined (no return)
node Chapter_12_Functions/98_Type2_Fn_With_Param_No_Return.js # → param logging
node Chapter_12_Functions/99_Type3_Fn_without_Param_Return_Type.js # → "Hello"
node Chapter_12_Functions/100_Type4_Fn_With_Param_With_Return.js   # → 9
node Chapter_12_Functions/101_Template_literal.js        # → "Hello, Alice"
node Chapter_12_Functions/102_Fn_Expression.js           # → function expression vs declaration
node Chapter_12_Functions/103_Arrow_Fn.js                # → arrow function shorthand
node Chapter_12_Functions/104_Arrow_func_realone.js      # → arrow status-code validator
node Chapter_12_Functions/105_IIFE.js                    # → IIFE — auto-invoke
node Chapter_12_Functions/106_Default_param.js          # → default param values
node Chapter_12_Functions/107_IQ.js                     # → interview: return template literal
node Chapter_12_Functions/108_Rest_Param.js           # → rest params
node Chapter_12_Functions/109_IQ.js                     # → interview: status categories
node Chapter_12_Functions/110_Spread_IQ.js            # → spread vs rest
node Chapter_12_Functions/111_Scope_IQ.js              # → scope demo
node Chapter_12_Functions/112_IQ.js                     # → interview: nested scope
node Chapter_12_Functions/113_Clouser.js              # → closure basics
node Chapter_12_Functions/114_clouser.js              # → closure counter
node Chapter_12_Functions/115_API_Real_Clouser.js    # → closure retry tracker
node Chapter_12_Functions/116_Higher_order.js        # → higher-order function
node Chapter_12_Functions/117_Pure_fn.js             # → pure vs impure
```

### 96 — Function Basics

**Concept:** A function is a reusable block of code. Two steps: **define** with `function name() { … }`, then **call** with `name()`.

**Why:** Any logic you use more than once — login, logout, API helpers, screenshot wrappers — belongs in a function. DRY (Don't Repeat Yourself) is the core of maintainable test code.

```js
// 96_Functions.js
function greet() {
    console.log("Hi, how are you?");
}
greet();  // → "Hi, how are you?"
```

### 97–100 — The Four Function Types

**Concept:** Every function falls into one of four buckets based on whether it takes parameters and whether it returns a value.

| Type | Params | Return | Use case |
|:--|:--:|:--:|:--|
| 1 | ❌ | ❌ | Side effects only (log, click, navigate) |
| 2 | ✅ | ❌ | Action with input (login with username) |
| 3 | ❌ | ✅ | Produce a constant value (getBaseUrl) |
| 4 | ✅ | ✅ | Transform input to output (sum, formatDate) |

```js
// 97 — Type 1: no param, no return
function greet() {
    console.log("Hi");
}
let a = greet();  // a = undefined

// 98 — Type 2: param, no return
function greetByName(name) {
    console.log("Hi", name);
}
greetByName("Pramod");

// 99 — Type 3: no param, return
function goToRelativeHouse() {
    console.log('Hi');
    return "Hello";
}
let relative = goToRelativeHouse();  // "Hello"

// 100 — Type 4: param, return
function sumOfTwoNumner(a, b) {
    return a + b;
}
let c = sumOfTwoNumner(4, 5);  // 9
```

### 102 — Function Expressions

**Concept:** Instead of declaring a function with `function`, you can assign an anonymous function to a variable. This is called a **function expression**.

**Why:** Expressions let you pass functions as arguments (callbacks), store them in objects, and control scope more precisely.

```js
// 102_Fn_Expression.js
const greet = function (name) {
    return `Hello, ${name}`;
};
console.log(greet("Pramod"));  // "Hello, Pramod"

// Compare with declaration
function greet1(name1) {
    return `Hello, ${name1}!`;
}
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
};
```

### 103 — Arrow Functions

**Concept:** Arrow functions (ES6) provide a shorter syntax. Remove `function`, add `=>` between params and body. If the body is a single expression, the `return` and braces are implicit.

**Why:** Less boilerplate in callbacks, cleaner one-liners, and they don't rebind `this` (important in object methods and event handlers).

```js
// 103_Arrow_Fn.js
const doubleIt = n => n * 2;
console.log(doubleIt(10));  // 20

const printIt = name => console.log(name);
printIt("Dutta");  // "Dutta"
```

| Feature | Declaration | Expression | Arrow |
|:--|:--|:--|:--|
| Syntax | `function f() {}` | `const f = function() {}` | `const f = () => {}` |
| Hoisted | ✅ | ❌ | ❌ |
| `this` binding | Own `this` | Own `this` | Inherited `this` |
| Best for | Standalone helpers | Callbacks, object props | Short callbacks, transforms |

---

### 104 — Arrow Function Real-World Example

**Concept:** Refactor a normal validation function to a concise arrow function for checking HTTP status codes.

```js
// 104_Arrow_func_realone.js
const validateStatusCode = status =>
    status >= 200 && status < 300
        ? console.log("Successfully received response")
        : console.log("Error response");
```

---

### 105 — IIFE (Immediately Invoked Function Expression)

**Concept:** A function that runs as soon as it is defined — no separate call needed. Wrap the function in parentheses and add `()` at the end.

**Why:** Creates a private scope, avoids polluting the global namespace, useful for one-time setup (config, polyfills, test stubs).

```js
// 105_IIFE.js
(function () {
    console.log("I am IIFE");
})();

(() => {
    console.log("Arrow with IIFE");
})();
```

---

### 106 — Default Parameters

**Concept:** Assign fallback values directly in the function signature. If the caller omits an argument, the default is used.

**Why:** Eliminates manual `if (x === undefined)` checks; makes APIs self-documenting.

```js
// 106_Default_param.js
function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, delay ${delay}ms`);
}
retry("Login Test");               // uses defaults
retry("Reg Flow", 5, 2000);        // overrides defaults
```

---

### 108 — Rest Parameters

**Concept:** `...results` gathers all remaining arguments into a real array. Must be the **last** parameter.

**Why:** Handles variable-length argument lists cleanly (e.g., logging multiple test results).

```js
// 108_Rest_Param.js
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);  // [1, 2, 3]
}
logResult("LoginTest", 1, 2, 3);
```

---

### 110 — Spread vs Rest

**Concept:** `...` inside a **function definition** = rest (gather). `...` in a **function call** = spread (expand).

```js
// 110_Spread_IQ.js
function add(a, b, c) { return a + b + c; }
let nums = [1, 2, 3];
add(...nums);  // spread array into arguments

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...[200, 201, 404]);  // rest gathers, spread expands
```

---

### 111–112 — Scope in Functions

**Concept:** Variables are accessible based on where they are declared — **global** (everywhere), **local/function** (inside the function), **block** (inside `{}`). Inner scopes can read outer scopes, but not vice versa.

```js
// 111_Scope_IQ.js
let env = "staging";        // global
function setupConfig() {
    let timeout = 3000;     // local
    console.log(env);       // ✅ reads global
}
console.log(timeout);       // ❌ ReferenceError — outer can't see inner

// 112_IQ.js — nested scope
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);     // ✅ inner sees outer
    }
    console.log(y);         // ❌ outer can't see inner
}
```

---

### 113–115 — Closures

**Concept:** A closure is a function that **remembers** the variables from its outer scope even after the outer function has finished executing.

**Why:** Powers private state, factory functions, and real-world patterns like retry counters and rate limiters.

```js
// 113_Clouser.js
function outer() {
    let message = "hello";
    function inner() { console.log(message); }
    return inner;
}
let fn = outer();
fn();  // "hello" — still remembers message

// 115_API_Real_Clouser.js — retry tracker
function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) return `${testName} exceeded max retries`;
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}
let retry = makeRetryTracker(3);
retry("Login");  // Attempt 1/3
retry("Login");  // Attempt 2/3
retry("Login");  // Attempt 3/3
retry("Login");  // exceeded
```

---

### 116 — Higher-Order Functions

**Concept:** A function that either **takes a function as an argument** or **returns a function**.

**Why:** The foundation of functional programming — map, filter, reduce are all HOFs. In tests, you can wrap any test function with logging, retry, or timing logic.

```js
// 116_Higher_order.js
function runWithLogging(testFn, testName) {
    console.log(`Running: ${testName}`);
    return testFn();
}
runWithLogging(() => "pass", "Login Test");
```

---

### 117 — Pure vs Impure Functions

**Concept:** A **pure function** always returns the same output for the same input and has **no side effects**. An **impure function** depends on or modifies external state.

**Why:** Pure functions are predictable, easy to test, and thread-safe. Impure functions are where bugs hide.

```js
// 117_Pure_fn.js
// ✅ Pure
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

// ❌ Impure — depends on external variable
let threshold = 60;
function isPassing(score) {
    return score >= threshold;
}
```

---

## 📖 What's in Chapter 13 — Strings (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `118_Strings.js` | String literals | Single quotes, double quotes, backticks, multiline strings, `String()` constructor |
| `119_String_Properties.js` | Properties & access | `length`, bracket index `[i]`, `.at(-1)` for negative index, `charAt`, `charCodeAt` |
| `120_Search_Check_Str.js` | Search & check | `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `search` with regex |
| `121_Substring.js` | Substring extraction | `slice(start, end)` (supports negatives), `substring(start, end)` |
| `122_Transform_Str.js` | Transform strings | `toUpperCase`, `toLowerCase`, `trim`, `replace`, `replaceAll`, `split`, `join` |
| `123_SC.js` | Type conversion | `toString`, `Number()`, `parseInt`, `parseFloat` |
| `Tasks_Anagrams.js` | Coding task | Check if two words are anagrams (sort + compare) |
| `Tasks_palindrome.js` | Coding task | Check if a string is a palindrome (reverse + compare) |
| `javascript_stringcheatsheet.md` | Cheat-sheet | Quick reference for all common string methods |

### Key Concepts

```mermaid
mindmap
  root((Chapter 13 — Strings))
    Literals
      'single'
      "double"
      `template`
      multiline
    Properties
      length
      [index]
      .at(-1)
      charAt
      charCodeAt
    Search
      includes
      startsWith
      endsWith
      indexOf
      lastIndexOf
      search(regex)
    Extract
      slice
      substring
    Transform
      toUpperCase
      toLowerCase
      trim / trimStart / trimEnd
      replace / replaceAll
      split
      join
    Conversion
      toString
      Number
      parseInt
      parseFloat
```

### Run them

```bash
node chapter_13_Strings/118_Strings.js              # → string literals, backticks, multiline
node chapter_13_Strings/119_String_Properties.js  # → length, index access, charAt, .at()
node chapter_13_Strings/120_Search_Check_Str.js     # → includes, startsWith, indexOf, search(regex)
node chapter_13_Strings/121_Substring.js            # → slice, substring
node chapter_13_Strings/122_Transform_Str.js        # → toUpperCase, trim, replace, split, join
node chapter_13_Strings/123_SC.js                 # → toString, parseInt, parseFloat
node chapter_13_Strings/Tasks_Anagrams.js         # → anagram check
node chapter_13_Strings/Tasks_palindrome.js       # → palindrome check
```

### 118 — String Literals

**Concept:** JavaScript strings can be created with single quotes `'…'`, double quotes `"…"`, or backticks `` `…` ``. Backticks enable `${expression}` interpolation and real multi-line text. The `String()` constructor converts any value to a string.

**Why:** Playwright test code is full of dynamic strings — selectors, URLs, screenshot paths, log messages. Knowing all three quote styles and when to use each prevents escaping headaches.

```js
// 118_Strings.js
let a = 'hello';
let b = "world";
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;

// Multiline — backticks preserve line breaks
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200));      // "200"
console.log(String(true));     // "true"
console.log(String([1, 2]));   // "[1,2]"
```

| Quote | Interpolation | Multi-line | Escape needed |
|:-----:|:-------------:|:----------:|:-------------|
| `'…'` | ❌ | ❌ | `'` → `\'` |
| `"…"` | ❌ | ❌ | `"` → `\"` |
| `` `…` `` | ✅ `${}` | ✅ | `` ` `` → `\`` |

---

### 119 — String Properties & Access

**Concept:** Strings are zero-indexed sequences of characters. `length` returns the total count. Bracket notation `str[i]` reads a character; `.at(index)` is the modern alternative that supports **negative indices** (`.at(-1)` = last character).

**Why:** In test automation you constantly parse status messages, extract IDs from URLs, or verify the last character of a generated code. Negative indexing with `.at(-1)` is cleaner than `str[str.length - 1]`.

```js
// 119_String_Properties.js
let str = "Hello, World!";
console.log(str.length);      // 13
console.log(str[0]);          // "H"
console.log(str[7]);          // "W"
console.log(str.at(-1));      // "!"  ← last character
console.log(str.at(-6));      // "W"  ← 6th from end
console.log(str.charAt(0));   // "H"
console.log(str.charCodeAt(0)); // 72 (ASCII code of 'H')
```

---

### 120 — Search & Check

**Concept:** Six methods to search inside a string: `includes` (boolean), `startsWith` / `endsWith` (boolean), `indexOf` / `lastIndexOf` (position or `-1`), and `search` (regex match position or `-1`).

**Why:** Validating URLs, checking if a response contains an error keyword, or verifying that a file path ends with `.png` — these checks happen in almost every test.

```js
// 120_Search_Check_Str.js
let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));      // true
console.log(url.includes("production"));   // false

console.log(url.startsWith("https"));      // true
console.log(url.endsWith("true"));         // true

console.log(url.indexOf("a"));             // first 'a' position
console.log(url.lastIndexOf("a"));         // last 'a' position
console.log(url.search(/login/));          // regex search → position
```

---

### 121 — Substring Extraction

**Concept:** `slice(start, end)` extracts a portion of a string and supports **negative indexes** (count from end). `substring(start, end)` is similar but treats negatives as `0`. Both return a new string — the original is unchanged.

**Why:** Extracting test IDs, version numbers, or timestamps from filenames and logs is a daily task. `slice` is the more powerful and predictable choice.

```js
// 121_Substring.js
let str = "Login_Test_Pass_001";
console.log(str.slice(0, 5));     // "Login" (indices 0–4)
console.log(str.slice(11));       // "Pass_001" (from index 11 to end)
console.log(str.slice(-3));       // "001" (last 3 characters)
console.log(str.substring(6, 10)); // "Test" (same, no negatives)
```

---

### 122 — Transform Strings

**Concept:** Change case (`toUpperCase`, `toLowerCase`), remove whitespace (`trim`, `trimStart`, `trimEnd`), replace text (`replace`, `replaceAll`), split into arrays (`split`), and join arrays back (`join`).

**Why:** Normalizing user input, formatting test names, cleaning API responses, and generating readable reports all depend on these methods.

```js
// 122_Transform_Str.js
let str = "  Hello, World!  ";
console.log(str.toUpperCase());          // "  HELLO, WORLD!  "
console.log(str.toLowerCase());          // "  hello, world!  "
console.log(str.trim());                 // "Hello, World!"

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));  // replaces first only
console.log(msg.replaceAll("FAIL", "PASS")); // replaces all

// Split & join pipeline
let rr = "test_login_pass".split("_").join(" ");
console.log(rr);                         // "test login pass"

let parts = ["2024", "03", "07"];
console.log(parts.join("-"));            // "2024-03-07"
```

---

### 123 — String Conversion

**Concept:** Convert values to strings with `.toString()` or `String()`. Parse strings to numbers with `Number()`, `parseInt()`, and `parseFloat()`. `parseInt` and `parseFloat` stop at the first non-numeric character and ignore the rest.

**Why:** API responses arrive as strings; calculations need numbers. Knowing the difference between strict `Number()` and forgiving `parseInt()` prevents `NaN` surprises.

```js
// 123_SC.js
console.log((200).toString());         // "200"
console.log(true.toString());          // "true"

console.log(Number("42"));             // 42
console.log(parseInt("42px"));         // 42 (stops at 'p')
console.log(parseFloat("3.14rem"));    // 3.14
```

---

### Coding Tasks

**Anagram check** — sort both words and compare:
```js
// Tasks_Anagrams.js
let word1 = "was";
let word2 = "saw";
let sorted1 = word1.toLowerCase().split("").sort().join("");
let sorted2 = word2.toLowerCase().split("").sort().join("");
console.log(sorted1 === sorted2);  // true
```

**Palindrome check** — reverse and compare case-insensitively:
```js
// Tasks_palindrome.js
let str = "Madam";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(str.toLowerCase() === reversed.toLowerCase());  // true
```

---

## 📖 What's in Chapter 14 — Objects (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `124_Objects.js` | Object Basics | Object literal syntax — key/value pairs, dot & bracket access |
| `125_Objects2.js` | Multi-property Objects | Objects as data containers |
| `126_Objects_Creation.js` | Object Creation | Literal, constructor, and `Object.create()` patterns |
| `127_Objects_REAL.js` | Real-World Objects | Building a dynamic test config object |
| `128_Primitive_Ref.js` | Primitive vs Reference | Copy semantics vs alias — why `b = a` doesn't clone objects |
| `129_Ob_Examples.js` | JSON-shaped Objects | Objects that mirror API JSON payloads |
| `130_IQ.js` | IQ — Property Access | Interview traps with dot vs bracket notation |
| `131_Object_Fn.js` | Object Methods | Functions as object property values |
| `132_Obj_Decon.js` | Destructuring | Extract named properties with `const { name, age } = user` |
| `133_Spead.js` | Spread Operator | Copy & merge objects with `{ ...obj1, ...obj2 }` |
| `134_Objects_GET_SET_Methods.js` | Getters & Setters | Computed properties using `get`/`set` keywords |
| `136_Obj_REAL.js` | Real-World: ENV Config | ENV object with `BASE_URL`, `TIMEOUT`, `RETRIES` |
| `137_Let_const_obj.js` | let vs const Objects | Mutation is allowed; reassignment with `const` is not |

### Key Concepts

```mermaid
mindmap
  root((Chapter 14 — Objects))
    Creation
      Literal {}
      Constructor new Object()
      Object.create()
    Access
      dot notation obj.key
      bracket obj["key"]
    Reference Types
      Assign = alias, not clone
      Spread to copy
    Methods
      Functions as values
      this keyword
    Modern Syntax
      Destructuring
      Spread ...
      get / set
```

### Run them

```bash
node Chapter_14_objects.js/124_Objects.js                 # → object basics
node Chapter_14_objects.js/128_Primitive_Ref.js           # → primitive vs reference copy
node Chapter_14_objects.js/132_Obj_Decon.js               # → destructuring
node Chapter_14_objects.js/133_Spead.js                   # → spread copy & merge
node Chapter_14_objects.js/134_Objects_GET_SET_Methods.js # → getters & setters
node Chapter_14_objects.js/136_Obj_REAL.js                # → ENV config object
```

### Key snippet — Primitive vs Reference

```js
// 128_Primitive_Ref.js
let a = 10;
let b = a;       // copy of value
b = 99;
console.log(a);  // 10 — unchanged

let obj1 = { name: "Pramod" };
let obj2 = obj1; // same reference
obj2.name = "Harsh";
console.log(obj1.name); // "Harsh" — both point to same object

// Clone safely with spread
let obj3 = { ...obj1 };
obj3.name = "Alice";
console.log(obj1.name); // "Harsh" — unaffected
```

| Pattern | Copies value? | Shares reference? |
|:--------|:-------------:|:-----------------:|
| `let b = a` (primitive) | ✅ | ❌ |
| `let b = obj` (object) | ❌ | ✅ |
| `let b = { ...obj }` (spread) | ✅ (shallow) | ❌ |

---

## 📖 What's in Chapter 15 — 2D Arrays (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `138_2D_Array.js` | 2D Array Basics | Nested arrays, nested loops, `grid[i][j]` access |
| `139_2d.js` | Matrix Dimensions | Rows × columns, boundary conditions |
| `140_REAL.js` | Test Result Matrix | Real-world grid: `[testName, status, statusCode]` per row |
| `141_2d_Array_Fn.js` | Row Aggregation | Sum and average per student score row |
| `142_IQ_Right_Pattern_Py.js` | IQ — Star Pattern | Right-angle triangle with nested loops |
| `testdata.csv` | Sample Data | CSV test data used in matrix examples |

### Key Concepts

```mermaid
mindmap
  root((Chapter 15 — 2D Arrays))
    Structure
      Array of arrays
      grid[row][col]
    Traversal
      Outer loop = rows
      Inner loop = columns
    Real World
      Test result tables
      Student score grids
    IQ Patterns
      Star triangles
      Boundary traps
```

### Run them

```bash
node Chapter_15_2D_array/138_2D_Array.js          # → print 3×3 grid
node Chapter_15_2D_array/140_REAL.js              # → test result matrix
node Chapter_15_2D_array/141_2d_Array_Fn.js       # → row sum & average
node Chapter_15_2D_array/142_IQ_Right_Pattern_Py.js # → star triangle pattern
```

### Key snippet — Test Result Matrix

```js
// 140_REAL.js
let testMatrix = [
    ["login",    "pass", 200],
    ["checkout", "fail", 404],
    ["search",   "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {
    let [name, status, code] = testMatrix[i];
    console.log(`${name} → ${status} (${code})`);
}
// login    → pass (200)
// checkout → fail (404)
// search   → pass (180)
```

---

## 📖 What's in Chapter 16 — Callbacks (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `143_Callback.js` | Callback Basics | Passing a function as an argument — three styles |
| `144_CB.js` | Playwright-flavoured test() | How `test('title', callback)` works under the hood |
| `145_CB_Fn.js` | Cafe Simulation | Real-world callback analogy — call when table is ready |
| `146_PW_CB.js` | Hand-rolled test() | Build your own `test()` runner using callbacks |
| `147_JS_CB.js` | Async Callback | `setTimeout` simulating an API delay |
| `148_Sync_CB.js` | Sync Callback | `forEach` iterating test results — synchronous execution |
| `149_Async_CB.js` | Event-loop Order | Async callback — understanding execution order |
| `150_CB_Hell.js` | Callback Hell Intro | Nested callbacks for login/navigate/assert |
| `151_CB_Hell_20_Steps.js` | Pyramid of Doom | 24-step E2E checkout as nested callbacks — why Promises fix this |
| `152_CB_Parameter.js` | Callbacks with Params | Passing data into the callback function |
| `153_CB_Return.js` | Returning from Callbacks | Higher-order `calculate()` — callbacks that return values |

### Key Concepts

```mermaid
mindmap
  root((Chapter 16 — Callbacks))
    What is a Callback
      Function passed as argument
      Called later by the host fn
    Three Styles
      Named function
      Anonymous function
      Arrow function
    Sync vs Async
      forEach = sync
      setTimeout = async
    Problems
      Callback hell
      Pyramid of doom
      Hard to read & debug
    Solution Preview
      Promises (Ch 17)
      Async/Await (Ch 18)
```

### Run them

```bash
node Chapter_16_Callback/143_Callback.js          # → three callback styles
node Chapter_16_Callback/147_JS_CB.js             # → async callback with setTimeout
node Chapter_16_Callback/148_Sync_CB.js           # → sync forEach callback
node Chapter_16_Callback/150_CB_Hell.js           # → callback hell intro
node Chapter_16_Callback/151_CB_Hell_20_Steps.js  # → full pyramid of doom
node Chapter_16_Callback/153_CB_Return.js         # → callback as return value
```

### Key snippet — Three Callback Styles

```js
// 143_Callback.js
function print() {
    console.log("Normal Function is called");
}

function placeOrder(item, callback) {
    console.log("Order placed:", item);
    callback();
}

// Style 1: named function reference
placeOrder("Pizza", print);

// Style 2: anonymous function
placeOrder("Burger", function () {
    console.log("Anonymous callback");
});

// Style 3: arrow function
placeOrder("Momos", () => {
    console.log("Arrow function callback");
});
```

### Callback Hell (Why Promises exist)

```js
// 151_CB_Hell_20_Steps.js — 24-step E2E as nested callbacks
openBrowser(function() {
    goToLoginPage(function() {
        enterCredentials(function() {
            clickLogin(function() {
                // ... 20 more nested levels
            });
        });
    });
});
// Reading/debugging this = pyramid of doom — solved by Promises & async/await
```

| Callback Type | When executes | Example |
|:-------------|:-------------:|---------|
| Sync | Immediately, inline | `forEach`, `map`, `filter` |
| Async | After delay/event | `setTimeout`, `fetch`, file I/O |
| Return | Returns a value | `calculate(a, b, fn)` |

---

## 📖 What's in Chapter 17 — Promises (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `154_Promise.js` | Promise basics | `new Promise(resolve, reject)` — the two outcomes |
| `155_Promise_REAL_API.js` | Real API simulation | `.then()` runs only when promise resolves |
| `156_Promise_REAL_API_PART2.js` | Promise chaining | `.then().catch()` for happy path + error path |
| `157_Finally.js` | `.finally()` | Cleanup block that always runs — pass or fail |
| `158_Call_Py_Problem.js` | Callback → Promise | Rewrite a callback-hell problem as a clean Promise chain |
| `159_Promise_ALL.js` | Parallel promises | `Promise.all` (fail-fast) vs `Promise.allSettled` (all results) |
| `160_Promise_IQ.js` | Interview Qs | Chaining, value passing through `.then`, catch flow |

### Key Concepts

```mermaid
mindmap
  root((Chapter 17 — Promises))
    States
      Pending
      Fulfilled
      Rejected
    Consumers
      .then — on success
      .catch — on failure
      .finally — always runs
    Chaining
      return value flows to next .then
      throw / reject jumps to .catch
    Parallel
      Promise.all — fail fast
      Promise.allSettled — all outcomes
    vs Callbacks
      No pyramid of doom
      Linear .then chains
      Catchable errors
```

### Run them

```bash
node Chapter_17_promises/154_Promise.js          # → Promise { 'Pizza is delivered...' }
node Chapter_17_promises/155_Promise_REAL_API.js # → 200 (from resolved API mock)
node Chapter_17_promises/157_Finally.js          # → resolved value + "finally always runs"
node Chapter_17_promises/159_Promise_ALL.js      # → allSettled: fulfilled + rejected results
node Chapter_17_promises/160_Promise_IQ.js       # → chaining IQ answers
```

### Key snippet — Promise basics

```js
// 154_Promise.js
let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered. Food is ready.");
    } else {
        reject("Order cancelled because of rain.");
    }
});

order
    .then(function (msg) { console.log("Success:", msg); })
    .catch(function (err) { console.log("Error:", err); })
    .finally(function ()  { console.log("Order flow complete."); });
```

### Promise.all vs Promise.allSettled

```js
// 159_Promise_ALL.js
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed!"),
    Promise.resolve("Test C Passed!"),
]).then(function (results) {
    results.forEach(r => console.log(r.status, r.value ?? r.reason));
});
// fulfilled Test A Passed!
// rejected  Test B Failed!
// fulfilled Test C Passed!
```

| Method | Resolves when | Rejects when | Use when |
|:-------|:-------------|:------------|:---------|
| `Promise.all` | ALL resolve | ANY rejects | All steps must pass (e.g. setup) |
| `Promise.allSettled` | ALL settle (either way) | Never rejects | Want every result regardless of failure |

---

## 📖 What's in Chapter 18 — Async / Await (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `161_Async.js` | async basics | `async function`, `await`, `try/catch/finally` |
| `162_Aysnc_P2.js` | Async Part 2 | Sequential vs parallel — when `await` matters |
| `163_PyODom.js` | Async DOM simulation | Awaiting element-ready checks — Playwright analogy |
| `164_Async_Ex.js` | Real examples | Async login flow step-by-step with `await` |
| `165_AA_Parallel.js` | Parallel execution | `Promise.allSettled` + array destructuring — run N calls together |
| `166_IQ.js` | Interview Qs | Async return value, error propagation, execution order |
| `167_ACLogin.js` | Async login sim | Full async login + assertion simulation — blueprint for PW tests |

### Key Concepts

```mermaid
mindmap
  root((Chapter 18 — Async/Await))
    async function
      always returns a Promise
      await pauses only inside async
    await
      unwraps Promise value
      pauses execution until settled
    Error handling
      try / catch replaces .catch
      finally for cleanup
    Sequential vs Parallel
      sequential: await one then next
      parallel: Promise.allSettled + await
    Playwright connection
      every page action is async/await
      test fn is async
      await page.goto, click, fill, expect
```

### Run them

```bash
node chapter_18_Async_Await/161_Async.js       # → async basics + try/catch/finally
node chapter_18_Async_Await/164_Async_Ex.js    # → async login flow
node chapter_18_Async_Await/165_AA_Parallel.js # → 3 parallel API calls via allSettled
node chapter_18_Async_Await/167_ACLogin.js     # → full async login simulation
```

### Key snippet — async/await with try/catch

```js
// 161_Async.js
async function testapi() {
    try {
        let result = await Promise.reject("503 reject");
    } catch (error) {
        console.log('Error', error);   // Error 503 reject
    } finally {
        console.log("Clean up!!");     // always runs
    }
}
testapi();
```

### Parallel execution pattern

```js
// 165_AA_Parallel.js — run 3 API calls at once, wait for all
async function parallelTest() {
    let [r1, r2, r3] = await Promise.allSettled([
        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API")
    ]);
    console.log(r1.value, r2.value, r3.value);
}
```

| Pattern | Code | When to use |
|:--------|:-----|:------------|
| Sequential | `let a = await f1(); let b = await f2(a);` | Step 2 depends on Step 1 |
| Parallel | `let [a, b] = await Promise.allSettled([f1(), f2()])` | Steps are independent |

---

## 📖 What's in Chapter 19 — Playwright Automation (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `examples.spec.ts` | First Playwright test | `test.only`, `page.goto`, `expect(page).toHaveTitle`, `waitForTimeout` |
| `Codegen_Invalid.spec.ts` | Anti-pattern codegen | Brittle / fragile locators produced by naive codegen |
| `tests/codegen_valid.spec.ts` | Valid codegen | Semantic, role-based locators — what good codegen output looks like |
| `tests/Codegen_Invalid.spec.ts` | Invalid codegen | Side-by-side comparison — positional vs semantic selectors |
| `playwright.config.ts` | Playwright config | `testDir`, `fullyParallel`, `retries`, `reporter: html`, `projects` |

### Setup

```bash
cd Chapter_19_Playwright_Automation

# Install Playwright + browsers
npm install
npx playwright install

# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Open HTML report after a run
npx playwright show-report
```

### Key Concepts

```mermaid
mindmap
  root((Chapter 19 — Playwright))
    Test structure
      import test, expect
      test&#40;title, async fn&#41;
      async &#40;{ page }&#41; =>
    Navigation
      page.goto&#40;url&#41;
      page.waitForTimeout&#40;ms&#41;
    Assertions
      expect&#40;page&#41;.toHaveTitle
      expect&#40;locator&#41;.toBeHidden
      expect&#40;locator&#41;.toBeVisible
    Config
      testDir
      fullyParallel
      retries
      reporter html
      projects Chromium
    Codegen
      npx playwright codegen url
      valid — role-based locators
      invalid — fragile nth / text selectors
```

### Key snippet — first test

```ts
// examples.spec.ts
import { test, expect } from '@playwright/test';

test.only('Validate the title of page', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");
    await page.waitForTimeout(5000);
});
```

### playwright.config.ts highlights

```ts
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,   // fail CI if test.only slips through
    retries: process.env.CI ? 2 : 0,
    reporter: 'html',
    use: { trace: 'on-first-retry' },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
```

| Config key | What it does |
|:-----------|:-------------|
| `testDir` | Folder where Playwright looks for spec files |
| `fullyParallel` | Run tests across files in parallel |
| `forbidOnly` | Blocks `test.only` from landing in CI |
| `retries` | Auto-retry flaky tests on CI |
| `reporter: 'html'` | Generates a rich HTML test report |
| `trace: 'on-first-retry'` | Captures network/DOM trace on first retry |

---

## 📖 What's in Chapter 20 — OOP: ES Modules & Classes (Available Now)

### Part 1 — ES Modules (Export / Import)

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `utils.js` | Named exports | `export let`, `export function` — multiple exports per file |
| `testutils.js` | Named exports | A second module exporting `BASE_URL` and a helper |
| `logger.js` | Default + named | `export default function` alongside a named `export function` |
| `168_EXPORT_IMPORT.js` | Basic import | `import { BASE_URL, formatTestName } from` — curly-brace syntax |
| `169_Utils.js` | Named alias | `import { BASE_URL as bul_util }` — resolve name collisions with `as` |
| `170_Logger.js` | Default import | `import log from` — no braces for the default export |
| `ExplainDefault.md` | Full reference | Named vs default side-by-side, when to use each, mixing both |

### Part 2 — Classes & OOP

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `171_Class_Object.js` | Class basics | Class syntax — attributes (fields) and behaviour (methods) |
| `172_Class_Object2.js` | Constructor | `constructor()` runs automatically on every `new ClassName()` call |
| `173_Car.js` | Constructor + method | Passing data into a class via constructor; `this.name` |
| `174_REAL_Browser.js` | Real-world class | `TestCase` class — constructor with `name/status/priority` + `display()` |
| `175_IQ.js` | Multi-instance IQ | `Browser` class — each instance tracks own `name` and `isOpen` |
| `176_Private_Public.js` | Private fields `#` | `#apiKey` — truly private, inaccessible outside the class |
| `177_Statis.js` | Static members | `static` property and `static display()` — shared across all instances |
| `178_Statis.js` | Static property | `static nationality` — belongs to the class, not any instance |

### Key Concepts

```mermaid
mindmap
  root((Chapter 20 — OOP))
    ES Modules
      Named export
        export let / function
        import { x } from
        alias with as
      Default export
        export default
        import x from
        any name on import
      Mix both
        import x, { y } from
    Classes
      class keyword
      constructor&#40;&#41;
        runs on new
        this.prop = arg
      Instance methods
        behaviours on objects
      Private fields
        hash prefix
        inaccessible outside
      Static members
        class-level data
        no instance needed
```

### Run them

```bash
# ES Modules (requires Node with --experimental-vm-modules or .mjs / package.json "type":"module")
node Chapter_20_OOPS_concept/01_EXPORT_IMPORT/169_Utils.js
node Chapter_20_OOPS_concept/01_EXPORT_IMPORT/170_Logger.js

# Classes
node Chapter_20_OOPS_concept/02_CLASS_OBJECT/173_Car.js        # → "i am driving Model S"
node Chapter_20_OOPS_concept/02_CLASS_OBJECT/174_REAL_Browser.js
node Chapter_20_OOPS_concept/02_CLASS_OBJECT/176_Private_Public.js
node Chapter_20_OOPS_concept/02_CLASS_OBJECT/177_Statis.js
```

### Key snippets

**Named vs default exports:**

```js
// utils.js — named exports (many allowed per file)
export let BASE_URL = "https://api.staging.com";
export function formatTestName(name) { return "TC_" + name.toUpperCase(); }

// logger.js — default export (only one per file) + a named export
export default function log(message) { console.log("[LOG]", message); }
export function log2(message) { console.log("[LOGS]", message); }

// Consuming both in one import
import log, { log2 } from "../logger.js";   // default first, named in braces
```

**Class with constructor and private field:**

```js
// 176_Private_Public.js
class Credentials {
    #apiKey;   // private — only accessible inside this class
    user;      // public

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;  // OK — inside the class
    }
}

const creds = new Credentials("pramod", "secret-key-123");
console.log(creds.user);                  // "pramod"
// console.log(creds.#apiKey);            // ❌ SyntaxError — private!
console.log(creds.pramodgetAuthHeader()); // "Bearer secret-key-123"
```

**Static members — shared across instances:**

```js
// 177_Statis.js
class Student {
    static name = "Playwright2x";
    static mentor_name = "PramodDutta";
    static display() { console.log("Hi, I am common fn"); }

    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
}

Student.display();               // call without any instance
console.log(Student.name);       // "Playwright2x" — class-level, not instance
```

| Concept | Keyword | Accessible on |
|:--------|:--------|:-------------|
| Public field | *(none)* | instance and outside |
| Private field | `#` prefix | inside the class only |
| Static property | `static` | the class itself (`ClassName.prop`) |
| Static method | `static` | the class itself — no `new` needed |

---

## 🔭 What's Coming Next

```mermaid
graph TD
    subgraph done["Completed"]
        D1[Ch 16: Callbacks ✅] --> D2[Ch 17: Promises ✅]
        D2 --> D3[Ch 18: Async / Await ✅]
        D3 --> D4[Ch 19: Playwright Intro ✅]
        D4 --> D5[Ch 20: OOP — ES Modules & Classes ✅]
    end

    subgraph next["Next Up"]
        N1[OOP — Inheritance]
        N2[TypeScript Fundamentals]
        N3[Playwright: Locators & Assertions]
    end

    D5 --> N1 --> N2 --> N3

    style done fill:#e8f5e9,stroke:#2e7d32
    style next fill:#fff3e0,stroke:#e65100
```

**Just shipped:**
- ✅ Chapter 4 extended with **Temporal Dead Zone (TDZ)** deep-dive (files `18`–`21`)
- ✅ Chapter 5 — **Literals**: null/undefined, every number form, strings, template literals (files `22`–`29`)
- ✅ Chapter 6 — **Operators (Part 1)**: arithmetic, comparison (`==` vs `===`), confusing-comparisons reference, logical, string concat (files `30`–`40`)
- ✅ Chapter 6 — **Operators (Part 2)**: ternary `? :`, `typeof`, `++`/`--` pre/post, nullish `??`, mixed-increment IQ trap (files `41`–`47`)
- ✅ Chapter 7 — **If / Else**: basic if/else, else-if ladder, nested conditions, truthy/falsy, logical operators, IQ problems (files `48`–`58`)
- ✅ Chapter 8 — **Switch Statement**: switch basics, fall-through, default, grouped cases, IQ traps (files `59`–`67`)
- ✅ Chapter 9 — **User Input**: browser `prompt()`, Node `readline`, `prompt-sync` (files `68`–`70`)
- ✅ Chapter 10 — **Loops**: for, while, do-while, continue, IQ traps (files `71`–`82`)
- ✅ Chapter 11 — **Arrays**: creation, access, add/remove, splice, search, iterate, transform, sort, slice, concat, checking (files `83`–`96`)
- ✅ Chapter 12 — **Functions**: four types, template literals, expressions, arrow functions, IIFE, default params, rest/spread, scope, closures, HOF, pure functions (files `96`–`117`)
- ✅ Chapter 13 — **Strings**: literals, properties, search & check, substring, transform, conversion, anagram & palindrome tasks (files `118`–`123`)
- ✅ Chapter 14 — **Objects**: literal, creation, primitive vs reference, destructuring, spread, getters/setters, real-world ENV config (files `124`–`137`)
- ✅ Chapter 15 — **2D Arrays**: matrix traversal, test result grids, row aggregation, IQ patterns (files `138`–`142`)
- ✅ Chapter 16 — **Callbacks**: three callback styles, sync vs async, callback hell, pyramid of doom, Playwright-style test() (files `143`–`153`)
- ✅ Chapter 17 — **Promises**: resolve/reject, `.then/.catch/.finally`, chaining, `Promise.all`, `Promise.allSettled`, IQ traps (files `154`–`160`)
- ✅ Chapter 18 — **Async/Await**: async functions, `try/catch/finally`, sequential vs parallel, `Promise.allSettled`, Playwright analogy (files `161`–`167`)
- ✅ Chapter 19 — **Playwright Automation**: first tests, `page.goto`, `toHaveTitle`, `test.only`, codegen valid vs invalid, `playwright.config.ts`
- ✅ Chapter 20 — **OOP — ES Modules & Classes**: named/default exports, `import as` aliasing, class syntax, constructors, `this`, private fields `#`, static members (files `168`–`178`)

---

## 🎯 What You'll Build (by the end)

```mermaid
graph LR
    Start([Start]) --> JS[Solid JavaScript foundation]
    JS --> TS[TypeScript fluency]
    TS --> PW[Playwright tests with POM]
    PW --> CI[CI/CD-ready test suites]
    CI --> AI[AI-assisted self-healing tests]
    AI --> MCP[Full STLC automation via MCP]
    MCP --> Job([SDET-ready 🎯])

    style Start fill:#e8f5e9
    style Job fill:#ffe0b2
```

By graduation you'll have:

- ✅ A complete JavaScript + TypeScript portfolio
- ✅ Production-grade Playwright test suites with the Page Object Model
- ✅ Hands-on experience with **Playwright CLI**, **codegen**, **trace viewer**
- ✅ Real projects using **AI agents** (Planner / Generator / Healer)
- ✅ End-to-end **MCP-driven STLC automation** (Playwright + Jira + reports)
- ✅ Interview prep — coding questions + Q&A banks

---

## 🧩 How Playwright Fits In (Big Picture)

```mermaid
flowchart TB
    subgraph App["Your App Under Test"]
        UI[Web UI]
        API[REST API]
    end

    subgraph PW["Playwright"]
        Browsers["Chromium · Firefox · WebKit"]
        Locators[Locators & Assertions]
        Fixtures[Fixtures & Config]
        Trace[Trace Viewer]
    end

    subgraph Smart["Smart Automation Layer"]
        Codegen[Codegen]
        Agents["AI Agents<br/>Planner · Generator · Healer"]
        MCP["MCP Servers<br/>Playwright · Jira · Docs"]
    end

    UI --> Browsers
    API --> Locators
    Browsers --> Locators --> Fixtures --> Trace
    Codegen --> Locators
    Agents --> Locators
    MCP --> Agents

    style PW fill:#f3e5f5,stroke:#7b1fa2
    style Smart fill:#e1f5fe,stroke:#01579b
```

---

## 🛠️ Useful Commands (You'll Use These Soon)

```bash
# JavaScript
node <file.js>                           # Run any chapter file

# TypeScript (Week 9+)
npx tsc <file.ts>                        # Compile TS → JS
npx ts-node <file.ts>                    # Run TS directly

# Playwright (Week 10+)
npm init playwright@latest               # Scaffold Playwright project
npx playwright test                      # Run all tests
npx playwright test --ui                 # Interactive UI mode
npx playwright test --debug              # Debug with inspector
npx playwright codegen <url>             # Record a test
npx playwright show-report               # Open HTML report
npx playwright show-trace <trace.zip>    # Open trace viewer
```

---

## 📘 Recommended Study Habit

| Day | Activity |
|-----|----------|
| **Class day** | Watch the live class, take notes |
| **Day +1** | Re-run every example from the chapter folder |
| **Day +2** | Solve 2–3 interview-style problems on the topic |
| **Day +3** | Build a tiny project applying the concept |
| **Weekend** | Recap the week — re-read code, ask doubts in the group |

> **Rule of thumb:** Don't move to the next chapter until you can explain the previous one out loud.

---

## 🔗 Resources

- 📺 [The Testing Academy YouTube](https://youtube.com/@TheTestingAcademy)
- 🌐 [thetestingacademy.com](https://thetestingacademy.com)
- 📚 [Playwright Docs](https://playwright.dev/docs/intro)
- 📚 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 📦 [Reference Repo — Batch 1](https://github.com/PramodDutta/LearningPlaywrightBatch)

---

## 🙋 Project Info

| | |
|---|---|
| **Author** | Pramod Dutta |
| **Organization** | The Testing Academy |
| **Batch** | 2x (in progress) |
| **Stack** | JavaScript · TypeScript · Playwright · Node 18+ |

---

<div align="center">

**Happy learning, future SDETs! 🚀**

*Code with intent. Test with confidence. Automate with joy.*

— Pramod & The Testing Academy team

</div>
