## Servicio Consola

Crea un servicio de windows mediante la consola


### install
Instala e inicia un nuevo servicio

```
service install -n "Mi Servicio" -d "Mi Descripcion" -s RutaDeScript
```

#### Parámetros
* --name, -n         Service name                            [string] [required]
* --description, -d  Service short desc                                 [string]
* --script, -s       Script path                             [string] [required]



### uninstall
Desintala un servicio existente

```
service uninstall -n "Mi Servicio" -s RutaDeScript
```

#### Parámetros
* --name, -n         Service name                            [string] [required]
* --script, -s       Script path                             [string] [required]