// @ts-nocheck
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, 'app');

const getRoutes = (dir, basePath = '') => {
  const files = fs.readdirSync(dir);
  let routes = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      routes = routes.concat(getRoutes(filePath, `${basePath}/${file}`));
    } else if (file === 'page.tsx' || file === 'page.ts') {
      const route = `${basePath}/${file.replace(/\.tsx?$/, '')}`.replace(/\/page$/, '');
      const formattedRoute = route.replace(/\[(\w+?)\]/g, '${string}'); // Convert [id] to ${string}
      routes.push(formattedRoute === '' ? '/' : formattedRoute);
    }
  });

  return routes;
};

const routes = getRoutes(appDir);

const routeTypes = routes.map(route => route.includes('${string}') ? `\`${route}\`` : `'${route}'`).join(' | ');

const output = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.
export type AppRoutes = ${routeTypes};
`;

fs.writeFileSync(path.join(__dirname, 'generated-routes.ts'), output);

console.log('Route types generated successfully.');
