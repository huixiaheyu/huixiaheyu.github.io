<template><div><p>spa@node1:~$ sudo crontab -l -u fengwei</p>
<ul>
<li>/var/tmp/.cache/upd &gt;/dev/null 2&gt;&amp;1
spa@node1:~$ sudo cat /etc/passwd | cut -d: -f1 | xargs -I {} sudo crontab -u {} -l 2&gt;/dev/null</li>
<li>/tmp/.bash/.bash</li>
<li>/tmp/.py/.python</li>
<li>/var/tmp/.cache/upd &gt;/dev/null 2&gt;&amp;1</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>sudo cat /etc/passwd | cut -d: -f1 | xargs -I {} sudo crontab -u {} -l 2>/dev/null</span></span>
<span class="line"><span>sudo ls -l /proc/847787/exe</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如何处理？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 处理恶意程序（1.删除恶意文件2.删除crontab）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 改ssh为强密码</label></li>
</ul>
<p>服务器系统整理和资源分配</p>
</div></template>


