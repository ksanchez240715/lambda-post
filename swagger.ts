import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentación de API',
            version: '1.0.0',
            description: 'API Lambda POST',
        },
        servers: [
            {
                url: 'http://localhost:3000/dev',
            },
        ],
    },
    apis: ['./path/to/your/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/dev/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
