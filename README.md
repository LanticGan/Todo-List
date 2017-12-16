## Todo-List

> 技术架构：主要功能由React实现，Django提供对静态文件的支持。

> UI参考： [www.todolist.com](www.todolist.com)。

### 功能说明

- 支持增加一个待办事项
- 支持删除一个待办事项
- 支持标记一个待办事项为已完成
- 支持编辑一个待办事项的具体内容
- 支持列出所有的待办事项
- 支持为待办事项设置优先级
- 支持为待办事项可以Expire Date
- 支持对待办事项按照优先级/Expire Date/创建时间进行排序

### 演示

1. 对待办事项进行 添加/删除/标记。

![](https://github.com/LanticGan/Todo-List/blob/master/Preview/F1.gif)

2. 选择待办事项的优先级/到期时间，并进行排序。

![](https://github.com/LanticGan/Todo-List/blob/master/Preview/F2.gif)

### 本地演示方法

#### 环境要求

1. Python2.7 + Django1.8

#### 执行代码

```
git clone https://github.com/LanticGan/Todo-List

cd Todo-List/Django/TodoList

python manage.py runserver
```

服务器启动后访问 127.0.0.1:8000/static/public/index.html 即可。

