> 参考链接：https://github.com/CVHub520/X-AnyLabeling/issues/23

```bash
yaml文件位置：/Users/hxhy/Code/Python/X-AnyLabeling/anylabeling/configs/auto_labeling
```

举例：

**yolo11s_seg.yaml**

```yaml
type: yolo11_seg
name: yolo11s_seg-r20240930
provider: Ultralytics
display_name: YOLO11s-Seg
model_path: ./best.onnx
iou_threshold: 0.45
conf_threshold: 0.25
classes:
  - water

```

