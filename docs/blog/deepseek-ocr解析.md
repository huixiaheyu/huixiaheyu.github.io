> 名字是ocr，但重点不在ocr，因为“一图胜千言”
>
> 这篇文章证明了使用视觉信息表示文本是可行的，并且相比较文本的精度还能较高的保持（比如1/10下97%的准确率，当然超过10倍，准确率就明显下降）



## 模型架构

![image-20251022194944402](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251022194944402.png)

DeepEncoder：处理的分辨率足够的高，消耗的token尽可能的少

1. 扫局部
2. 压缩
3. 找细节

解码器：Deepseek-Moe



能力：

1. 多语言处理能力[PDF中的100种语言都能搞定]
2. OCR2.0能力[OCR1.0为图像转文本；OCR2.0为解析复杂的人造图像内容]
   - 图片形式的图表转为HTML
   - 图片形式的化学分子式转SMILES格式
   - 看懂几何图
   - 基本图像理解：目标检测等





## Dora

> 改进lora使得微调的效果趋近于全参微调大模型的效果
>
> 将原先的权重分解为两个维度：大小、方向
>
> - 大小：不变
> - 方向：lora
>
> 将大小的维度合并到方向的维度上

- Model Compression
- Efficient Pre-Training
- Efficient Fine-Tuning
- Efficient Inference
- Efficient Architecture

![img](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/dd457a2d5e1349a783109a17cfc3dc16.png)



![image-20251029083424863](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029083424863.png)

- 量化
  - 训练后量化
  - 边训练边量化
- 剪枝
- 低秩分解
- 知识蒸馏（教生模型）

![image-20251029083601957](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029083601957.png)

- 混合精度加速
- 扩展模型（大模型剪枝后训练时间短）
- 初始化技巧（高斯初始化、凯明初始化等）
- 优化策略（优化器调参策略）
- 系统级预训练高效优化

![image-20251029084301484](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029084301484.png)

- 参数高效微调
- 内存高效微调（减少内存消耗）

![image-20251029084518480](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029084518480.png)

- 算法层面推理
  - 投机采样
  - kv-cache优化
- 系统级推理（分布式多机多卡）



![image-20251029084711352](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029084711352.png)

- 适配器微调
- 低秩分解
- 前缀微调
- 提示词微调

![image-20251029085045350](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029085045350.png)

- Transformer架构的每个子层（如注意力层和前馈网络之后）插入一个适配器模块：降维-非线性激励-升维
- 缺点
  1. 串xing
  2. 要加很多adapter

![image-20251029085259163](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029085259163.png)

[d, d]=[d,r] [r,d]

![image-20251029085416112](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029085416112.png)

前缀微调

![image-20251029085455054](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029085455054.png)

用可训练向量和小型网络替代硬提示

- P-Tuning v1在模型**输入端**之前，加装了一个可训练的“提示生成器”，这个生成器的参数就是微调的对象
- P-Tuning v2借鉴了**前缀微调** 的思想，将提示注入到模型的每一层（和前缀微调已没有区别）

![image-20251029090300348](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029090300348.png)

模型权重拆为大小和方向两个维度

- 大小维度不变
- 方向维度使用lora

lora原理：
$$
W'=W_0+\Delta W=W_0+\underline{BA}
$$
dora原理：
$$
W_0=m\cdot\frac V{\|V\|_c}
$$

$$
W'=\underline{m}\frac{V+\Delta V}{||V+\Delta V||_c}=\underline{m}\frac{W_0+\underline{BA}}{||W_0+\underline{BA}||_c}
$$

<img src="./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029090839628.png" alt="image-20251029090839628" style="zoom: 50%;" />

![image-20251029090600861](./deepseek-ocr%E8%A7%A3%E6%9E%90.assets/image-20251029090600861.png)

- 全参：方向变化，大小应该下降
- lora：方向变化，大小上升
- dora：

