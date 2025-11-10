> 参考：https://gofrp.org/zh-cn/docs/setup/

## 配置toml文件

- frpc.toml

```bash
serverAddr = "x.x.x.x"
serverPort = 7000

[[proxies]]
name = "ssh-68"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 6068
```

- frps.toml

```bash
bindPort = 7000

webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "xxx"
webServer.password = "xxxxxxxx"
```



## 配置Service

```bash
sudo vim /etc/systemd/system/[frps, frpc].service
```

- frps.service

```bash
[Unit]
Description = frps server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /frp/frps -c /frp/frps.toml
ExecStop = /bin/kill $MAINPID
Restart = always
RestartSec = 5


[Install]
WantedBy = multi-user.target
```

- frpc.service

```bash
[Unit]
Description = frpc server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /frp/frpc -c /frp/frpc.toml
ExecStop = /bin/kill $MAINPID
Restart = always
RestartSec = 5


[Install]
WantedBy = multi-user.target

```

### 服务启停

```bash
sudo systemctl start [frps, frpc]
sudo systemctl stop [frps, frpc]
sudo systemctl restart [frps, frpc]
sudo systemctl status [frps, frpc]
sudo systemctl enable [frps, frpc]
```

