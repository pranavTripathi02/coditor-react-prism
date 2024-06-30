export const langList = [
  {
    lang: "jsx",
    defaultCodeExample: `
    export default function MyApp() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      );
    }
    `,
  },
  {
    lang: "tsx",
    defaultCodeExample: `
    export default function MyApp() {
      return (
        <div>
          <h1>Welcome to my app</h1>
          <MyButton />
        </div>
      );
    }
    `,
  },
  {
    lang: "swift",
    defaultCodeExample: `
    import Swift

    print("Hello, World!")
    `,
  },
  {
    lang: "kotlin",
    defaultCodeExample: `
    fun main() {
        println("Hello, World!")
    }
`,
  },
  {
    lang: "objectivec",
    defaultCodeExample: `
    #import <Foundation/Foundation.h>

    int main(int argc, const char * argv[]) {
        @autoreleasepool {
            // insert code here...
            NSLog(@"Hello, World!");
        }
        return 0;
    }
    `,
  },
  {
    lang: "js-extras",
    defaultCodeExample: `
    console.log("hello world!")
    `,
  },
  {
    lang: "reason",
    defaultCodeExample: `
    String string;
    string = "hello world";
    `,
  },
  {
    lang: "rust",
    defaultCodeExample: `
    fn main() {
        println!("Hello, World!");
    }
    `,
  },
  {
    lang: "graphql",
    defaultCodeExample: `
    {
      "data": {
        "hello": "Hello world!"
      }
    }
    `,
  },
  {
    lang: "yaml",
    defaultCodeExample: `
    hello: world
    `,
  },
  {
    lang: "go",
    defaultCodeExample: `
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello, World!")
    }
    `,
  },
  {
    lang: "cpp",
    defaultCodeExample: `
    #include <iostream>
    int main() {
        std::cout << "Hello World";
        return 0;
    }
`,
  },
  {
    lang: "markdown",
    defaultCodeExample: `
    # Hello World
    `,
  },
] as const;

type TLangs = typeof langList;

export type TLang = TLangs[number];
