# Proyecto Energía Solar

## Requisitos previos

1. Tener instalado **Node.js**  


   [Descargar desde Node.js](https://nodejs.org)

2. Instalar dependencias  

   npm install


3. Compilar el proyecto (si usas TypeScript directamente) 

   npx tsc

4. Ejecutar el proyecto  

   npm run dev

---

## Cómo usar la API

Puedes usar herramientas como Thunder Client (Extensión VsCode), Postman, etc. para probar las rutas de la API.

### Obtener el estado de la batería

- Método: GET 
- URL: http://localhost:3000/battery/status 
- Descripción: Devuelve el porcentaje actual de carga y la última modificación.

---

### Cargar la batería

- Método: POST
- URL: http://localhost:3000/battery/charge 
- Body (JSON):
  ```json
  {
    "amount": 3
  }
  ```
- Descripción: Aumenta la energía de la batería en la cantidad indicada (amount en kWh). Si excede la capacidad, se ignora e imprime un error en la consola.

---

### Descargar la batería

- Método: POST 
- URL: http://localhost:3000/battery/discharge
- Body (JSON):
  ```json
  {
    "amount": 2
  }
  ```
- Descripción: Reduce la energía almacenada. Si no hay suficiente energía, no realiza cambios e imprime un error en consola.

---

### Ver historial

- Método: GET 
- URL: http://localhost:3000/battery/history  
- Descripción: Devuelve hasta los últimos 20 cambios de carga y descarga.