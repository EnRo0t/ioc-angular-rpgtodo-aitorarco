# MODELS

## MAPA API

**Flujo básico**

api (mockdb.json) -> raw data -> api.model.ts -> api.adapter.ts -> apiIntern.model.ts 

**Tabla de transformaciones**

|Campo API|Tipos API|Campo Interno|Tipos internos|Transformación|
|:-------:|:-------:|:-----------:|:------------:|:------------:|
|id|string \| number|id|number|aNumero|
|name|string \| null|name|string|textoLimpio y toLowerCase|
|description|string \| null|description|string|textoLimpio|
|level|number \| string \| null|level|number|Math.floor y aNumero|
|date|string \| null|date|string|aFecha|
|tasks|number \| string \| null|tasks|number|Math.floor y aNumero|
|ascend|boolean \| null|ascend|boolean|No transforma, si es null = false|


