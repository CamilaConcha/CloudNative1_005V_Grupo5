# Ejecución con Docker

## Requisitos
- Docker Desktop instalado y ejecutándose.
- Puertos 5173, 8080, 8081, 8082, 8083 y 3306 disponibles.

## Levantar todo el proyecto
Desde la raíz del proyecto:

```bash
docker compose up --build
```

Para ejecutarlo en segundo plano:

```bash
docker compose up --build -d
```

Frontend: http://localhost:5173

## Ver contenedores

```bash
docker compose ps
```

## Ver logs

```bash
docker compose logs -f
```

O un servicio concreto:

```bash
docker compose logs -f bff-colegio
```

## Detener el proyecto sin borrar la base de datos

```bash
docker compose down
```

Los datos de MySQL quedan guardados en el volumen `colegio_mysql_data`.

## Volver a levantarlo

```bash
docker compose up -d
```

## Borrar también los datos de MySQL
Solo si se quiere reiniciar completamente la base de datos:

```bash
docker compose down -v
```

## Servicios
- Frontend: http://localhost:5173
- BFF: http://localhost:8080
- Auth: http://localhost:8081
- Notas: http://localhost:8082
- Asistencia: http://localhost:8083
- MySQL: localhost:3306

## Persistencia
MySQL monta `/var/lib/mysql` sobre el volumen Docker `colegio_mysql_data`, por lo que `docker compose down` no elimina las tablas ni los registros.
