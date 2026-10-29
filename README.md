# WDIO + Allure + Jenkins (QA2)

Proyecto mínimo para ejecutar dos pruebas E2E contra https://example.com con Chrome en modo headless.

## Requisitos
- Node.js LTS compatible con WebdriverIO 10 (>=22.19)
- Chrome instalado (la detección/descarga del driver puede requerir internet)
- Jenkins con plugin Allure y Allure Commandline configurado

## Uso local
```bash
npm install
npm test
```

`npm install` genera `package-lock.json`: subir ese archivo junto con el proyecto, para permitir `npm ci` en Jenkins.

## Jenkins
Crear un trabajo Pipeline, Definition: `Pipeline script from SCM`, SCM: Git, rama `*/main`, Script Path: `Jenkinsfile`.
El `Jenkinsfile` usa los comandos Unix/macOS (`sh`) y publica los resultados mediante el plugin Allure. Configurar Allure Commandline en Jenkins > Tools antes de ejecutar.

## Notas
- El proyecto no ha sido ejecutado en este entorno de generación: ejecutar localmente antes de subirlo.
- `example.com` necesita conectividad y Chrome debe poder arrancar en el agente Jenkins.
- No subir secretos ni `node_modules` a Git.
