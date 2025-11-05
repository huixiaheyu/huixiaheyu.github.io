<template><div><blockquote>
<p>名字是ocr，但重点不在ocr，因为“一图胜千言”</p>
<p>这篇文章证明了使用视觉信息表示文本是可行的，并且相比较文本的精度还能较高的保持（比如1/10下97%的准确率，当然超过10倍，准确率就明显下降）</p>
</blockquote>
<h2 id="模型架构" tabindex="-1"><a class="header-anchor" href="#模型架构"><span>模型架构</span></a></h2>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251022194944402.png" alt="image-20251022194944402" tabindex="0" loading="lazy"><figcaption>image-20251022194944402</figcaption></figure>
<p>DeepEncoder：处理的分辨率足够的高，消耗的token尽可能的少</p>
<ol>
<li>扫局部</li>
<li>压缩</li>
<li>找细节</li>
</ol>
<p>解码器：Deepseek-Moe</p>
<p>能力：</p>
<ol>
<li>多语言处理能力[PDF中的100种语言都能搞定]</li>
<li>OCR2.0能力[OCR1.0为图像转文本；OCR2.0为解析复杂的人造图像内容]
<ul>
<li>图片形式的图表转为HTML</li>
<li>图片形式的化学分子式转SMILES格式</li>
<li>看懂几何图</li>
<li>基本图像理解：目标检测等</li>
</ul>
</li>
</ol>
<h2 id="dora" tabindex="-1"><a class="header-anchor" href="#dora"><span>Dora</span></a></h2>
<blockquote>
<p>改进lora使得微调的效果趋近于全参微调大模型的效果</p>
<p>将原先的权重分解为两个维度：大小、方向</p>
<ul>
<li>大小：不变</li>
<li>方向：lora</li>
</ul>
<p>将大小的维度合并到方向的维度上</p>
</blockquote>
<ul>
<li>Model Compression</li>
<li>Efficient Pre-Training</li>
<li>Efficient Fine-Tuning</li>
<li>Efficient Inference</li>
<li>Efficient Architecture</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/dd457a2d5e1349a783109a17cfc3dc16.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029083424863.png" alt="image-20251029083424863" tabindex="0" loading="lazy"><figcaption>image-20251029083424863</figcaption></figure>
<ul>
<li>量化
<ul>
<li>训练后量化</li>
<li>边训练边量化</li>
</ul>
</li>
<li>剪枝</li>
<li>低秩分解</li>
<li>知识蒸馏（教生模型）</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029083601957.png" alt="image-20251029083601957" tabindex="0" loading="lazy"><figcaption>image-20251029083601957</figcaption></figure>
<ul>
<li>混合精度加速</li>
<li>扩展模型（大模型剪枝后训练时间短）</li>
<li>初始化技巧（高斯初始化、凯明初始化等）</li>
<li>优化策略（优化器调参策略）</li>
<li>系统级预训练高效优化</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029084301484.png" alt="image-20251029084301484" tabindex="0" loading="lazy"><figcaption>image-20251029084301484</figcaption></figure>
<ul>
<li>参数高效微调</li>
<li>内存高效微调（减少内存消耗）</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029084518480.png" alt="image-20251029084518480" tabindex="0" loading="lazy"><figcaption>image-20251029084518480</figcaption></figure>
<ul>
<li>算法层面推理
<ul>
<li>投机采样</li>
<li>kv-cache优化</li>
</ul>
</li>
<li>系统级推理（分布式多机多卡）</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029084711352.png" alt="image-20251029084711352" tabindex="0" loading="lazy"><figcaption>image-20251029084711352</figcaption></figure>
<ul>
<li>适配器微调</li>
<li>低秩分解</li>
<li>前缀微调</li>
<li>提示词微调</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029085045350.png" alt="image-20251029085045350" tabindex="0" loading="lazy"><figcaption>image-20251029085045350</figcaption></figure>
<ul>
<li>Transformer架构的每个子层（如注意力层和前馈网络之后）插入一个适配器模块：降维-非线性激励-升维</li>
<li>缺点
<ol>
<li>串xing</li>
<li>要加很多adapter</li>
</ol>
</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029085259163.png" alt="image-20251029085259163" tabindex="0" loading="lazy"><figcaption>image-20251029085259163</figcaption></figure>
<p>[d, d]=[d,r] [r,d]</p>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029085416112.png" alt="image-20251029085416112" tabindex="0" loading="lazy"><figcaption>image-20251029085416112</figcaption></figure>
<p>前缀微调</p>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029085455054.png" alt="image-20251029085455054" tabindex="0" loading="lazy"><figcaption>image-20251029085455054</figcaption></figure>
<p>用可训练向量和小型网络替代硬提示</p>
<ul>
<li>P-Tuning v1在模型<strong>输入端</strong>之前，加装了一个可训练的“提示生成器”，这个生成器的参数就是微调的对象</li>
<li>P-Tuning v2借鉴了<strong>前缀微调</strong> 的思想，将提示注入到模型的每一层（和前缀微调已没有区别）</li>
</ul>
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029090300348.png" alt="image-20251029090300348" tabindex="0" loading="lazy"><figcaption>image-20251029090300348</figcaption></figure>
<p>模型权重拆为大小和方向两个维度</p>
<ul>
<li>大小维度不变</li>
<li>方向维度使用lora</li>
</ul>
<p>lora原理：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>W</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>W</mi><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><munder accentunder="true"><mrow><mi>B</mi><mi>A</mi></mrow><mo stretchy="true">‾</mo></munder></mrow><annotation encoding="application/x-tex">W&#x27;=W_0+\Delta W=W_0+\underline{BA}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8019em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8833em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span></span></p>
<p>dora原理：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>W</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><mo>⋅</mo><mfrac><mi>V</mi><mrow><mi mathvariant="normal">∥</mi><mi>V</mi><msub><mi mathvariant="normal">∥</mi><mi>c</mi></msub></mrow></mfrac></mrow><annotation encoding="application/x-tex">W_0=m\cdot\frac V{\|V\|_c}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.2963em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord"><span class="mord">∥</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>W</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><munder accentunder="true"><mi>m</mi><mo stretchy="true">‾</mo></munder><mfrac><mrow><mi>V</mi><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>V</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mi>V</mi><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>V</mi><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">∣</mi><mi>c</mi></msub></mrow></mfrac><mo>=</mo><munder accentunder="true"><mi>m</mi><mo stretchy="true">‾</mo></munder><mfrac><mrow><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><munder accentunder="true"><mrow><mi>B</mi><mi>A</mi></mrow><mo stretchy="true">‾</mo></munder></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><munder accentunder="true"><mrow><mi>B</mi><mi>A</mi></mrow><mo stretchy="true">‾</mo></munder><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">∣</mi><mi>c</mi></msub></mrow></mfrac></mrow><annotation encoding="application/x-tex">W&#x27;=\underline{m}\frac{V+\Delta V}{||V+\Delta V||_c}=\underline{m}\frac{W_0+\underline{BA}}{||W_0+\underline{BA}||_c}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8019em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.2963em;vertical-align:-0.936em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∣∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord">∣</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.2963em;vertical-align:-0.936em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.4306em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∣∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span><span class="mord">∣</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6833em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<img src="@source/blog/deepseek-ocr解析.assets/image-20251029090839628.png" alt="image-20251029090839628" style="zoom: 50%;" />
<figure><img src="@source/blog/deepseek-ocr解析.assets/image-20251029090600861.png" alt="image-20251029090600861" tabindex="0" loading="lazy"><figcaption>image-20251029090600861</figcaption></figure>
<ul>
<li>全参：方向变化，大小应该下降</li>
<li>lora：方向变化，大小上升</li>
<li>dora：</li>
</ul>
</div></template>


