## rule-providers

```
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  icloud:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
    path: ./ruleset/icloud.yaml
    interval: 86400

  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

  google:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
    path: ./ruleset/google.yaml
    interval: 86400

  proxy:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  cncidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.yaml
    interval: 86400

  lancidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
    path: ./ruleset/lancidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400
```

## 编辑规则


```
prepend:
	- 'GEOSITE,category-ads-all,REJECT'
  - 'DOMAIN-KEYWORD,ads,REJECT'
  - 'DOMAIN-KEYWORD,tracker,REJECT'
  
  - 'GEOSITE,cn,DIRECT'	# 国内直连
  - 'GEOIP,CN,DIRECT'
  - 'DOMAIN-SUFFIX,cn,DIRECT'
  - 'RULE-SET,cncidr,DIRECT'
  - 'GEOIP,LAN,DIRECT'
  - 'RULE-SET,lancidr,DIRECT'
	
  - 'RULE-SET,direct,DIRECT'	# 规则  
  - 'RULE-SET,private,DIRECT'
  - 'RULE-SET,reject,REJECT'
  - 'RULE-SET,proxy,Proxy'
  
  - 'RULE-SET,icloud,DIRECT'	# 服务类
  - 'RULE-SET,apple,DIRECT'
  - 'RULE-SET,google,Proxy'
  - 'RULE-SET,telegramcidr,Proxy'
  
  - 'RULE-SET,applications,DIRECT'	# 应用程序
  
  - 'DOMAIN,clash.razord.top,DIRECT'	# 域名
  - 'DOMAIN,yacd.haishan.me,DIRECT'
append: []
delete: []
```

