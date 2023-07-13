## `tsconfig`

公共的tsconfig

### 使用

```json
"extends": "@aurorafe/tsconfig/index.json"
```

### 配置说明

模块解析：

- moduleResolution：指定模块解析策略，node或classic
- baseUrl：用于解析非绝对模块名的基本目录，相对模块不受影响。
- paths：用于设置模块名称基于baseUrl的路径映射关系。
- typeRoots：指定声明文件或文件夹的路径列表
- types：用来指定需要包含的模块，并将其包含在全局范围内。
- allowSyntheticDefaultImports：是否允许从没有默认导出的模块中默认导入，默认：false。
- esModuleInterop：是否通过为所有导入模块创建命名空间对象，允许CommonJS和ES模块之间的互操作性，开启改选项时，也自动开启- allowSyntheticDefaultImports选项，默认：false。

编译：

- isolatedModules：是否将每个文件转换为单独的模块，默认：false。
- sourceMap：是否生成相应的Map映射的文件，默认：false。
- composite：是否开启项目编译，开启该功能，将会生成被编译文件所在的目录，同时开启declaration、declarationMap和incremental，默认：false。
- forceConsistentCasingInFileNames：是否区分文件系统大小写规则，默认：false
- experimentalDecorators：是否启用实验性的装饰器特性。
- allowJs：允许编译器编译JS，JSX文件


严格检查类：

- strict：是否启动所有严格检查的总开关，默认：false，启动后将开启所有的严格检查选项。
- alwaysStrict：是否以严格模式解析，并为每个源文件发出"use strict"，默认：false。
- noImplicitAny：是否禁止隐式的any类型，默认：false。
- noImplicitThis：是否禁止不明确类型的this，默认：false。
- strictNullChecks：是否启用严格的空检查，默认：false。
- strictBindCallApply：是否在函数上启用严格的’bind’， 'call’和’apply’方法，默认：false。
- strictFunctionTypes：是否启用对函数类型的严格检查，默认：false。
- strictPropertyInitialization：是否启用严格检查类的属性初始化，默认：false。

- noUnusedLocals：是否检查未使用的局部变量，默认：false。
- noUnusedParameters：是否检查未使用的参数，默认：false。
- noImplicitReturns：检查函数是否不含有隐式返回值，默认：false。
- noFallthroughCasesInSwitch：检查switch中是否含有case没有使用break跳出，默认：false。
- useDefineForClassFields：此标志用作迁移到即将推出的类字段标准版本的一部分。

- resolveJsonModule：是否解析 JSON 模块。
- skipDefaultLibCheck：是否跳过默认库声明文件的类型检查，默认：false。
- skipLibCheck：是否跳过声明文件的类型检查，这可以在编译期间以牺牲类型系统准确性为代价来节省时间，默认：false。

- suppressImplicitAnyIndexErrors：是否抑制隐式any索引的错误，默认：false。
- jsx：jsx用于的开发环境，preserve/react/RN