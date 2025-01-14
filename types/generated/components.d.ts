import type { Schema, Struct } from '@strapi/strapi';

export interface TalentBuildsTalentBuilds extends Struct.ComponentSchema {
  collectionName: 'components_talent_builds_talent_builds';
  info: {
    description: '';
    displayName: 'Talent Builds';
    icon: 'code';
  };
  attributes: {
    buildName: Schema.Attribute.String;
    keyTalentIcons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    quickSummary: Schema.Attribute.String;
    talentBuildPic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    wowImportString: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'talent-builds.talent-builds': TalentBuildsTalentBuilds;
    }
  }
}
