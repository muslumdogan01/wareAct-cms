import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalTag extends Struct.ComponentSchema {
  collectionName: 'components_global_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.tag': GlobalTag;
    }
  }
}
