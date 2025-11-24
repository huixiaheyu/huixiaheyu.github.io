## 安装与运行

```bash
# install
brew install go
go version

# run[如此简单，go可直接转为二进制，并且运行速度飞快]
go build main.go && ./main
go run main.go
```



## 变量声明

```go
package main

import "fmt"

// TIP 1.全局变量需要设置数据类型。
// 2. var可以一次声明多个变量
var (
	Ga int
	Gb string
)

func main() {
	//TIP 定义一个变量，默认是0
	var a int
	fmt.Println("a = ", a)
	fmt.Printf("a = %T\n", a)

	var b int = 100
	fmt.Println("b = ", b)
	fmt.Printf("b = %T\n", b)

	var c = 100
	fmt.Println("c = ", c)
	fmt.Printf("c = %T\n", c)

	//TIP 自动匹配数据类型
	e := "100"
	fmt.Println("e = ", e)
	fmt.Printf("e = %T\n", e)

	fmt.Println("Ga = ", Ga)
	fmt.Printf("Ga = %T\n", Ga)

	fmt.Println("Gb = ", Gb)
	fmt.Printf("Gb = %T\n", Gb)
}

hello
```

