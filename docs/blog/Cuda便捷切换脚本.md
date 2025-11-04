## 便捷切换cuda版本

switch-cuda-on-version.sh

```sh
#!/bin/bash

export CUDA_HOME=/usr/local/cuda-$1
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH

echo "注意：CUDA版本切换到: $CUDA_HOME"
```

## 安装cudnn

https://zhuanlan.zhihu.com/p/691711768



