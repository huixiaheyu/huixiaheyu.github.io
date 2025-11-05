<template><div><p>工作室目前拥有三位导师：贺老师、郑老师与周老师。研究涵盖三大方向：满文档案智能分析、植物表型分析以及新型机器学习技术。</p>
<p>在植物表型分析方向，我们与环境资源学院开展深度合作，以经济作物文冠果为研究对象，围绕叶片气孔识别、花序与果实自动计数、智能剪枝等关键环节进行算法研发，并成功构建了文冠果田间精准管理系统。</p>
<p>在满文档案智能分析方向，针对满文档案作为小样本资源的特点，我们构建了大规模满文档案图像数据库，并从版面分析、单词识别与检索、档案翻译等多个层面推进算法研究。同时，立足于中华民族共同体视角，深入挖掘“三交”“交流、交往、交融”史料价值，开发了实用的满文档案信息处理系统。</p>
<p>合作交流方面，我们与大连理工大学、中船重工第760研究所、中国计算机学会、中国图象图形学学会、大连市人工智能产业学会等多所高校、科研机构及行业协会保持密切合作，并与中科双碳（大连）生态环境技术有限公司等企业开展了深入的产学研合作。</p>
<p>科研项目方面，近年来团队承担了包括国家自然科学基金、教育部人文社科项目在内的国家级项目5项，省市级及企业委托课题6项，累计科研经费近200万元。</p>
<p>历史：</p>
<p>元代朱思本 --&gt;《舆地图》</p>
<p>1541+ 明代罗洪先 --&gt;《广舆图》</p>
<p>1718 皇舆全览图</p>
<p>1722 雍正十排图</p>
<p>1787 乾隆内府舆图</p>
<p>点、线、面大模型</p>
<ul class="task-list-container">
<li>
<p>dinov3</p>
</li>
<li>
<p>。。</p>
</li>
<li>
<p>sam</p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 河流 湖泊一共多少类图例，有没有一根线的</label></p>
</li>
</ul>
<p>河流只有一种类别：双实线。不存在单实线树状结构，但存在其他问题：</p>
<ol>
<li>双实线绘制过密的问题【皇舆全览图-32页】</li>
</ol>
<img src="@source/blog/舆图记事本.assets/image-20251024082033942.png" alt="image-20251024082033942" style="zoom: 33%;" />
<img src="@source/blog/舆图记事本.assets/image-20251024082259081.png" alt="image-20251024082259081" style="zoom:33%;" />
<ol start="2">
<li>河流绘制出现断线【皇舆全览图-38页】</li>
</ol>
<figure><img src="@source/blog/舆图记事本.assets/image-20251024082803692.png" alt="image-20251024082803692" tabindex="0" loading="lazy"><figcaption>image-20251024082803692</figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 2. 两条边界线评价方面</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 调研mapsam算法</label></li>
</ul>
<p>霍仁龙老师：</p>
<ul>
<li><strong>四川大学国际关系学院</strong>网页：https://sis.scu.edu.cn/news.html?newsId=2166
<ul>
<li>此单位电话：028-85470709
<ul>
<li>目前情况：已告知，等待回复（1912452912@qq.com / 13653917580）</li>
</ul>
</li>
</ul>
</li>
<li><strong>中国人民大学清史研究所</strong>网页：http://iqh.ruc.edu.cn/xwdt/9b3c0b9cdea3453e8c94856de3dce44e.htm</li>
<li>百度词条：https://baike.baidu.com/item/%E9%9C%8D%E4%BB%81%E9%BE%99/24690515</li>
</ul>
<p>韩昭庆老师：</p>
<ul>
<li><strong>中国历史地理研究所</strong>网页：https://yugong.fudan.edu.cn/info/1113/3421.htm
<ul>
<li>此单位电话：(86)-21-65642714</li>
</ul>
</li>
<li>百度词条：https://baike.baidu.com/item/%E9%9F%A9%E6%98%AD%E5%BA%86?fromModule=lemma_search-box</li>
</ul>
<p>符号确定优先级：</p>
<ol>
<li>1895年“安徽舆地图”的图例表-》明清两代全国和省区地图集编制概况</li>
<li>明、清地图主要符号对比-》明、清、民国时期地图要素视觉表达方法分析</li>
<li>清代几种地图和地图集所用居民点符号-》试论我国地图的数学要素和表示方法的演进特色</li>
<li>广舆图24种符号-》试论我国地图的数学要素和标志方法的演进特色</li>
<li>中国古代地图的图式符号举例-》中国古代地图绘制的理论和方法初探</li>
</ol>
<ul>
<li>点特征：山、森林、村镇、州、县、府城、文官驻所；桥、柳条边门、柳条边台；城池、太平府等特殊景观</li>
<li>线性特征：河流、驿路、淤河、河岸线、长城</li>
<li>面特征：湖泊、沙漠</li>
</ul>
<p><code v-pre>来源：康熙《皇舆全览图》的数字化及意义</code></p>
<p>数据集制作</p>
<p>图像预处理：</p>
<p>对大图进行标注</p>
<ul>
<li>保证标签在所有图块的边缘处是<strong>完美对齐</strong>；</li>
<li>极大地减少了模型在图块拼接处的预测错误；</li>
<li>如果对小图进行标注，会导致训练标签中出现<strong>不连续</strong>的错误）</li>
</ul>
<p>使用scale_factor=2 搭配 tile_size=512对图像进行缩放和切块。</p>
<ul>
<li>保证图像信息密度</li>
<li>保证图像实际大小，防止oom</li>
</ul>
<p>对比实验</p>
<p>mask2former（68已配置）--2022CVPR</p>
<p>deeplabv3+（68已下载）--2018</p>
<p>unet+aspp（对比来源：Leveraging uncertainty estimation and spatial  pyramid pooling for extracting hydrological features from scanned historical topographic  maps）--2022</p>
<p>sam2-unet（68已配置）--2025ICCVW</p>
<p>mapsam（2024）（68已配置）--2025</p>
<h2 id="综合问题" tabindex="-1"><a class="header-anchor" href="#综合问题"><span>综合问题：</span></a></h2>
<h3 id="一、高分辨率" tabindex="-1"><a class="header-anchor" href="#一、高分辨率"><span>一、高分辨率：</span></a></h3>
<p>目前针对高分辨率舆图图像的语义分割主要是基于卷积神经网络，Transformer 以及 Mamba。然而卷积神经网络在处理高分辨率舆图图像时存在一个巨大的缺陷，由于卷积操作有限的感受野，其难以建模长距离的上下依赖，因此在提取特征图像时，无法有效地取全局信息。Transformer 在处理高分辨率舆图图像时，会占用大量的计算资源。针对上述问题，本文引入状态空间模型（State Space Model, SSM）驱动的 Mamba 架构，设计出了针对高分辨率城市舆图图像分割模型</p>
<h3 id="二、地图上的断线" tabindex="-1"><a class="header-anchor" href="#二、地图上的断线"><span>二、地图上的断线</span></a></h3>
<p>例：乾隆13排图的河流</p>
<img src="@source/blog/舆图记事本.assets/image-20250903121330831.png" alt="image-20250903121330831" style="zoom:50%;" />
<p><code v-pre>雍正十排图26页</code></p>
<figure><img src="@source/blog/舆图记事本.assets/image-20250903122800118.png" alt="image-20250903122800118" tabindex="0" loading="lazy"><figcaption>image-20250903122800118</figcaption></figure>
<h3 id="三、污损、线条看不清" tabindex="-1"><a class="header-anchor" href="#三、污损、线条看不清"><span>三、污损、线条看不清</span></a></h3>
<img src="@source/blog/舆图记事本.assets/image-20250903124245102.png" alt="image-20250903124245102" style="zoom: 33%;" />
<img src="@source/blog/舆图记事本.assets/image-20250903121302675.png" alt="image-20250903121302675" style="zoom:50%;" />
<h2 id="细分问题" tabindex="-1"><a class="header-anchor" href="#细分问题"><span>细分问题</span></a></h2>
<h3 id="河流-分割" tabindex="-1"><a class="header-anchor" href="#河流-分割"><span>河流：分割</span></a></h3>
<ol>
<li>河流与湖泊分类在模型上效果不准确，可找方法改善（湖泊依赖大尺度、河流依赖小尺度。湖泊在较窄部分被错认为河流）。
<ul>
<li>来源：Leveraging uncertainty estimation and spatial pyramid pooling for extracting hydrological features from scanned historical topographic maps</li>
</ul>
</li>
</ol>
<img src="@source/blog/舆图记事本.assets/image-20250903115113449.png" alt="image-20250903115113449" style="zoom: 67%;" />
<img src="@source/blog/舆图记事本.assets/image-20250903115812317.png" alt="image-20250903115812317" style="zoom:33%;" />
<img src="@source/blog/舆图记事本.assets/image-20250903122430262.png" alt="image-20250903122430262" style="zoom:50%;" />
<img src="@source/blog/舆图记事本.assets/image-20250903123116059.png" alt="image-20250903123116059" style="zoom:50%;" />
<img src="@source/blog/舆图记事本.assets/image-20250903123215896.png" alt="image-20250903123215896" style="zoom:50%;" />
<h3 id="山脉-检测-计数等" tabindex="-1"><a class="header-anchor" href="#山脉-检测-计数等"><span>山脉：检测-&gt;计数等</span></a></h3>
<blockquote>
<p>如果对山脉进行使用分割，效果可能不太好（山脉连接这一块）</p>
</blockquote>
</div></template>


