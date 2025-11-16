## 挂载硬盘

> 对于mac系统来讲，自动挂载硬盘不兼容 `NTFS` 格式，所以如果有需要，大多数视频会推荐NTFS for MAC等知名软件，而90%都是收费的。这里我推荐一款半成品：`ntfs-3g`，免费但需要一定的动手能力。
>
> 参考链接：
>
> https://www.cnblogs.com/qkcan/p/17473575.html
>
> https://www.bilibili.com/opus/572870537603931251

### 下载macFuse

其实Homebrew自带的资源中是事先包含有ntfs-3g的，但是如果查看这个包的详情会发现brew已经把这个包禁用了，即使你已经事先安装了FUSE，Homebrew也无法检测到导致不能正常安装。

依据流程中的介绍，需要另外添加FUSE推荐的包含了可以正常的ntfs-3g的源。

```bash
brew tap gromgit/homebrew-fuse
brew install gromgit/fuse/ntfs-3g-mac
// 或者直接写ntfs-3g-mac，注意名称上与自带的ntfs-3g区分
brew install ntfs-3g-mac
```

### 挂载硬盘

> 卸载也可以通过访达中的弹出按钮实现

- 卸载硬盘并挂载

```bash
// 1.过设备文件名称卸载
sudo umount /dev/xxxx
// 2.使用挂载点目录名称卸载
sudo umount /Volumes/xxxx

// 使用ntfs-3g重新挂载到指定的目录
sudo ntfs-3g /dev/xxxx /mnt/xxxx
```

- 官方wiki的做法==[推荐]==

```bash
# unmount if necessary
sudo diskutil unmount /dev/disk1s1
# mount with ntfs-3g
sudo mkdir /Volumes/NTFS
sudo /usr/local/bin/ntfs-3g /dev/disk1s1 /Volumes/NTFS -o local -o allow_other -o auto_xattr -o auto_cache
# alternatively...
sudo /usr/local/bin/mount_ntfs /dev/disk1s1 /Volumes/NTFS
```

