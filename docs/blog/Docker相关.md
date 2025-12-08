## Docker

`官方安装指南（推荐）：https://docs.docker.com/engine/install/centos/`

### 卸载旧版docker

```sh
yum remove docker \
	docker-client \
	docker-client-latest \
	docker-common \
	docker-latest \
	docker-latest-logrotate \
	docker-logrotate \
	docker-engine
```

### 安装docker

#### 卸载

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

#### 配置docker源

```sh
# 安装yum工具包
yum install -y yum-utils
# 添加 Docker 的阿里云镜像源
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 修改 docker-ce.repo 文件以使用阿里云的镜像
sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
# 更新缓存
sudo yum makecache fast
```

```bash
sudo apt update
sudo apt upgrade
sudo apt-get install ca-certificates curl gnupg lsb-release	# 依赖包
sudo gpg --no-default-keyring --keyring /etc/apt/keyrings/docker.gpg --keyserver hkps://keyserver.ubuntu.com:443 --recv-keys 7EA0A9C3F273FCD8
```

#### 安装docker

```sh
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

##### docker支持GPU

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit	# 安装 NVIDIA Container Toolkit 软件包
sudo nvidia-ctk runtime configure --runtime=docker	# 修改/etc/docker/daemon.json主机上的文件，以便 Docker 可以使用 NVIDIA 容器运行
sudo systemctl restart docker	# 重启docker
```

#### 启动和校验

```sh
# 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
```

#### 配置镜像源

```sh
# 创建目录
mkdir -p /etc/docker

# 复制内容，注意把其中的镜像加速地址改成你自己的
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.1ms.run",
        "https://docker.1panel.live",
        "https://0dj0t5fb.mirror.aliyuncs.com",
        "https://registry.docker-cn.com",
        "https://k-docker.asia"
    ]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker【Job for docker.service failed because the control process exited with error code. See "systemctl status docker.service" and "journalctl -xe" for details.】
systemctl restart docker
```

### 基本命令

`官方文档：https://docs.docker.com/reference/`
`Dockerhub：https://hub.docker.com/`

<img src="./Docker%E7%9B%B8%E5%85%B3.assets/image-20240903184359357-1729245905757-106-1731284955034-1-1731284960645-6.png" alt="image-20240903184359357" style="zoom:67%;" />

<img src="./Docker%E7%9B%B8%E5%85%B3.assets/image-20240903184359521-1729245905757-105-1731284955034-2-1731284960645-5.png" alt="image-20240903184359521" style="zoom:67%;" />

```sh
"""镜像"""
docker pull	 <image_name>:<tag>	# 拉取镜像
docker push  <repository>/<image_name>:<tag>	# 推送到镜像仓库
# 查看本地所有docker镜像
docker images
# 删除docker镜像
docker rmi <image_name>:<tag>
docker rmi <image_id>
# 通过dockerfile构建docker镜像
docker build -t myimage:latest .
    -t：指定镜像标签。
    .：当前目录的 Dockerfile（可以指定其他路径）
# 保存 Docker 镜像为 tar 文件。
docker save -o <path_to_tar_file> <image_name>:<tag>
# 从 tar 文件加载 Docker 镜像。
docker load -i qinglong.tar
"""镜像->容器"""
# 从本地镜像创建docker容器（没必要重复创建容器）
docker run -d --gpus all -v /opt/ai/ollama:/root/.ollama -p 5700:5700 --name qinglong --restart unless-stopped whyour/qinglong:latest
    -d：后台运行容器
	--gpus all: 使用所有gpu运行容器
    -p <host_port>:<container_port>：端口映射。
    -v <host_path>:<container_path>：文件挂载。
    --name <container_name>：指定容器名称。
    --restart unless-stopped：容器崩溃后自动重启。
"""容器"""
# 查看docker容器进程(-a为所有容器)
docker ps -a
# 运行docker容器
docker start <container_name_or_id>
# 停止docker容器
docker stop <container_name_or_id>
# 删除一个或多个容器（容器必须已停止）
docker rm <container_name_or_id>
# 查看docker容器日志
docker logs	<container_name_or_id>
docker logs -f qinglong  # 实时查看日志
docker logs --tail 100 qinglong  # 查看最后 100 行日志
# 在运行中的容器内执行命令
docker exec -it <container_name_or_id> /bin/bash
	-it：交互模式和分配终端。
```





```
docker run \
	--name="corex_4.3.6_v10" \
	--ulimit memlock=-1:-1 -itd \
	--privileged \
	--cap-add=ALL \
	--network=host \
	--ipc=host \
	--pid=host \
	-v /dev:/dev \
	-v /lib/modules:/lib/modules \
	-v /usr/src:/usr/src \
	-v /home/:/home \
	-v /root:/root \
	-v /mnt/sdb:/mnt/sdb
	crpi-92uj7jb20gffz04j.cn-guangzhou.personal.cr.aliyuncs.com/iluvatar_common/vllm0.10.1-4.3.6-aarch64:v1 \
	/bin/bash
	
	
docker run --name="corex_4.3.6_v10" --ulimit memlock=-1:-1 -itd --privileged --cap-add=ALL --network=host --ipc=host --pid=host -v /dev:/dev -v /lib/modules:/lib/modules -v /usr/src:/usr/src -v /home/:/home -v /root:/root -v /mnt/sdb:/mnt/sdb -e LD_LIBRARY_PATH="$COREX_LIB_PATH:\$LD_LIBRARY_PATH" -e ANOTHER_VAR="another_value" crpi-92uj7jb20gffz04j.cn-guangzhou.personal.cr.aliyuncs.com/iluvatar_common/vllm0.10.1-4.3.6-aarch64:v1 /bin/bash
```

