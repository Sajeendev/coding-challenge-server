import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const useSwagger = (app: any) => {
  const styles = `
            .topbar-wrapper img {
              content:url(\'../assets/logo.png\');
              width:auto;
              height:40px;
          }
          .swagger-ui .topbar {
              background-color: #d6d6d6;
              padding:3px;
          }
        `;

  const customOptions: SwaggerCustomOptions = {
    customCss: styles,
    customSiteTitle: 'Api Documentation',
    customfavIcon: '../assets/logo.png',
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      persistAuthorization: true,
    },
  };

  const config = new DocumentBuilder()
    .setTitle('Edreams')
    .setDescription('Api documentation - Coding challenge')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, customOptions);
};
