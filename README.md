# 🏋️ Calculadora de Índice de Masa Corporal (IMC)

Una aplicación web interactiva y moderna para calcular el Índice de Masa Corporal (IMC) de manera rápida y sencilla. Desarrollada con HTML5, CSS3 y JavaScript vanilla.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://imc-calculadora1.netlify.app)

## 📋 Descripción

Esta calculadora de IMC permite a los usuarios calcular su Índice de Masa Corporal ingresando su peso y altura. La aplicación proporciona resultados instantáneos con una interfaz limpia y responsive, ofreciendo retroalimentación visual sobre el estado de salud basado en los estándares de la OMS (Organización Mundial de la Salud).

## ✨ Características

- ✅ **Cálculo preciso del IMC** basado en las fórmulas estándar internacionales
- 🎨 **Interfaz moderna y atractiva** con diseño responsive
- 📱 **Compatible con dispositivos móviles** (tablets y smartphones)
- ⚡ **Resultados instantáneos** sin necesidad de recargar la página
- 🔄 **Validación de datos** para asegurar entradas correctas
- 🎯 **Categorización automática** del estado de peso
- 💾 **No requiere instalación** - funciona directamente en el navegador

## 🚀 Demo en Vivo

Prueba la aplicación aquí: [**https://imc-calculadora1.netlify.app**](https://imc-calculadora1.netlify.app)

## 🖼️ Captura de Pantalla

![Calculadora de IMC](assets/img/IMC-Indice-de-Masa-Corporal-832x471-1.webp)

## 📊 Rangos de IMC

La aplicación clasifica los resultados según los siguientes rangos establecidos por la OMS:

| Categoría | IMC (kg/m²) | Estado de Salud |
|-----------|-------------|-----------------|
| 🔵 Bajo peso | < 18.5 | Por debajo del peso saludable |
| 🟢 Normal | 18.5 - 24.9 | Peso saludable |
| 🟡 Sobrepeso | 25.0 - 29.9 | Por encima del peso saludable |
| 🟠 Obesidad I | 30.0 - 34.9 | Obesidad moderada |
| 🔴 Obesidad II | 35.0 - 39.9 | Obesidad severa |
| ⚫ Obesidad III | ≥ 40.0 | Obesidad mórbida |

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica del sitio
- **CSS3** - Estilos y diseño responsive
  - Flexbox/Grid para layouts
  - Animaciones CSS
  - Media queries para responsive design
- **JavaScript (ES6+)** - Lógica de cálculo y manipulación del DOM
  - Validación de formularios
  - Eventos interactivos
  - Cálculos matemáticos

## 📦 Instalación y Uso Local

### Prerrequisitos

No se requieren dependencias especiales. Solo necesitas:
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Un editor de código (opcional, para modificaciones)

### Pasos de Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Tomfmp2/BMI-calculator.git
```

2. **Navega al directorio del proyecto**
```bash
cd BMI-calculator
```

3. **Abre el archivo index.html**
   - Simplemente haz doble clic en el archivo `index.html`
   - O arrastra el archivo a tu navegador
   - O usa un servidor local (recomendado):

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

4. **Accede a la aplicación**
   - Abre tu navegador y visita `http://localhost:8000`

## 💻 Estructura del Proyecto

```
BMI-calculator/
│
├── index.html                      # Página principal de la aplicación
├── README.md                       # Documentación del proyecto
│
├── css/
│   └── style.css                   # Estilos y diseño de la aplicación
│
├── js/
│   └── app.js                      # Lógica principal de la calculadora
│
└── assets/
    └── img/                        # Recursos de imágenes
        ├── error.png                                   # Icono de error
        ├── IMC-Indice-de-Masa-Corporal-832x471-1.webp # Banner principal
        ├── IMC-Indice-de-Masa-Corporal-<-18-5.webp    # Imagen bajo peso
        ├── IMC-Indice-de-Masa-Corporal-saludable.webp # Imagen peso normal
        ├── IMC-Indice-de-Masa-Corporal-sobrepeso.webp # Imagen sobrepeso
        ├── IMC-Indice-de-Masa-Corporal-obesidad-I.webp  # Imagen obesidad I
        ├── IMC-Indice-de-Masa-Corporal-obesidad-II.webp # Imagen obesidad II
        └── IMC-Indice-de-Masa-Corporal-obesidad-III.webp # Imagen obesidad III
```

### 📂 Descripción de Archivos

- **index.html** - Estructura HTML de la calculadora
- **css/style.css** - Estilos CSS personalizados y diseño responsive
- **js/app.js** - Lógica de cálculo del IMC, validaciones y manejo de eventos
- **assets/img/** - Imágenes visuales para cada categoría de IMC y feedback

## 🔧 Cómo Usar la Calculadora

1. **Ingresa tu peso** en kilogramos (kg)
2. **Ingresa tu altura** en centímetros (cm) o metros (m)
3. **Haz clic en el botón "Calcular"**
4. **Visualiza tu resultado** con la categoría correspondiente
5. **Opcional:** Haz clic en "Limpiar" para realizar un nuevo cálculo

### Fórmula del IMC

```
IMC = peso (kg) / (altura (m))²
```

**Ejemplo:**
- Peso: 70 kg
- Altura: 1.75 m
- IMC = 70 / (1.75)² = 22.86 → **Normal**

## 🌐 Despliegue

Este proyecto está desplegado en **Netlify** con despliegue continuo desde GitHub.

### Desplegar tu propia versión

1. **Fork este repositorio**
2. **Conéctalo con Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona tu repositorio de GitHub
   - Configura el despliegue (usualmente auto-detectado)
   - Haz clic en "Deploy"

3. **Alternativas de hosting:**
   - GitHub Pages
   - Vercel
   - Firebase Hosting
   - Surge.sh

## 🤝 Contribuciones

Las contribuciones son bienvenidas y apreciadas. Si deseas mejorar este proyecto:

1. **Fork** el proyecto
2. Crea una **rama** para tu característica (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Ideas para Contribuir

- 🌍 Agregar soporte multiidioma
- 📊 Añadir gráficos visuales del IMC
- 💾 Implementar historial de cálculos
- 🎨 Mejorar el diseño UI/UX
- ♿ Mejorar la accesibilidad
- 📱 Desarrollar versión PWA
- 🧮 Agregar calculadoras adicionales (calorías, grasa corporal, etc.)

## 📝 Notas Importantes

⚠️ **Disclaimer:** Esta calculadora es solo una herramienta informativa. El IMC no es un diagnóstico médico definitivo y tiene limitaciones:

- No distingue entre masa muscular y grasa
- No considera la edad, género o etnia
- No es adecuado para atletas, embarazadas o niños
- Debe usarse junto con otras mediciones y consulta médica

Siempre consulta con un profesional de la salud para evaluación personalizada.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

## 👤 Autor

**Tomás Felipe Medina Prada**

- 📧 Email: tom.pradamd@gmail.com
- 📸 Instagram: [@tom_57_m](https://instagram.com/tom_57_m)
- 💻 GitHub: [@Tomfmp2](https://github.com/Tomfmp2)

## 🔗 Enlaces

- 🌐 **Sitio Web:** [https://imc-calculadora1.netlify.app](https://imc-calculadora1.netlify.app)
- 📦 **Repositorio:** [https://github.com/Tomfmp2/BMI-calculator](https://github.com/Tomfmp2/BMI-calculator)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐

**¡Gracias por visitar este proyecto! 🎉**
